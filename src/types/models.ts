export type TransactionType = 'income' | 'expense' | 'transfer';
export type PeriodType = 'weekly' | 'monthly' | 'yearly';

export interface Wallet {
  id: string;
  name: string;
  balance: number;
  icon: string;
  createdAt: number;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  walletId: string;
  note?: string;
  date: number;
  tags?: string[];
  recurring?: boolean;
  createdAt: number;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: PeriodType;
}

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  nextDate: number;
  frequency: PeriodType;
  detectedAutomatically: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: TransactionType;
}

export interface AppSettings {
  id: string;
  currency: string;
  theme: 'dark' | 'system';
  language: string;
  autoDetectSubscriptions: boolean;
  biometricAuthEnabled: boolean;
}
