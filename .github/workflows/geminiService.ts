
import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI client with the required named parameter for apiKey
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialInsights = async (dataSummary: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the following financial data summary and provide 4 actionable insights for a small business owner. 
      Return the results in a JSON array format where each object has: title, desc (2 sentences), tag (one of: Growth, Savings, Strategy, Liquidity), cta, and priority (high, medium, low).
      Data Summary: ${dataSummary}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              desc: { type: Type.STRING },
              tag: { type: Type.STRING },
              cta: { type: Type.STRING },
              priority: { type: Type.STRING }
            },
            required: ["title", "desc", "tag", "cta", "priority"]
          }
        }
      }
    });

    // Access the .text property directly from the response object
    const jsonStr = response.text;
    return JSON.parse(jsonStr || "[]");
  } catch (error) {
    console.error("Failed to fetch insights:", error);
    return [];
  }
};
