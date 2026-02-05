
import { ChartDataPoint, Transaction } from './types';

export const generateDenseData = (count: number, min: number, max: number, labels: string[]): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const pointsPerLabel = Math.floor(count / labels.length);
  
  for (let i = 0; i < count; i++) {
    const labelIndex = Math.floor(i / pointsPerLabel);
    const baseLabel = labels[Math.min(labelIndex, labels.length - 1)];
    const variance = (Math.random() - 0.5) * (max - min) * 0.4;
    const progress = i / count;
    const value = Math.floor(min + (progress * (max - min)) + variance + (max - min) * 0.2);
    
    data.push({
      label: baseLabel,
      subLabel: `Point ${i + 1}`,
      value: Math.max(min, Math.min(max, value))
    });
  }
  return data;
};

export const PERIOD_DATA: Record<string, ChartDataPoint[]> = {
  'Week': generateDenseData(28, 1000, 5000, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
  'Month': generateDenseData(30, 8000, 18000, ['Week 1', 'Week 2', 'Week 3', 'Week 4']),
  'Year': generateDenseData(48, 40000, 95000, ['Q1', 'Q2', 'Q3', 'Q4'])
};

export const TRANSACTIONS: Transaction[] = [
  { id: 1, name: 'Webflow', category: 'Software', amount: -124, currency: '€', icon: 'W', color: 'bg-blue-600', date: '2023-12-05', status: 'Completed', type: 'expense' },
  { id: 2, name: 'UI8', category: 'Design Assets', amount: -124, currency: '€', icon: 'UI', color: 'bg-indigo-500', date: '2023-12-04', status: 'Completed', type: 'expense' },
  { id: 3, name: 'To Marvilo', category: 'Transfer', date: '2023-12-05', amount: -27.19, currency: '€', icon: 'M', color: 'bg-orange-500', status: 'Pending', type: 'expense' },
  { id: 4, name: 'Client Payment', category: 'Income', date: '2023-12-04', amount: 2400, currency: '€', icon: 'C', color: 'bg-green-500', status: 'Completed', type: 'income' },
  { id: 5, name: 'Supermarket', category: 'Groceries', date: '2023-12-04', amount: -85.50, currency: '€', icon: 'S', color: 'bg-yellow-500', status: 'Completed', type: 'expense' },
  { id: 6, name: 'Upwork Payout', category: 'Freelance', date: '2023-12-03', amount: 1850, currency: '€', icon: 'U', color: 'bg-emerald-500', status: 'Completed', type: 'income' },
];
