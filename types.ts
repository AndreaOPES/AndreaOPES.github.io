
export interface ChartDataPoint {
  label: string;
  value: number;
  subLabel?: string;
}

export interface Transaction {
  id: number;
  name: string;
  category: string;
  amount: number;
  currency: string;
  icon: string;
  color: string;
  date: string;
  status: string;
  type: 'income' | 'expense';
}

export enum AppTab {
  DASHBOARD = 'DASHBOARD',
  BUDGET = 'BUDGET',
  TAXES = 'TAXES',
  SETTINGS = 'SETTINGS',
  INCOME = 'INCOME',
  EXPENSES = 'EXPENSES',
  INSIGHTS = 'INSIGHTS'
}

export interface AIInsight {
  title: string;
  desc: string;
  tag: 'Growth' | 'Savings' | 'Strategy' | 'Liquidity';
  cta: string;
  priority: 'high' | 'medium' | 'low';
}
