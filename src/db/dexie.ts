import Dexie, { type Table } from 'dexie';
import type { Wallet, Transaction, Budget, Subscription, Category, AppSettings } from '@/types/models';

export class RupeeTrackDB extends Dexie {
  wallets!: Table<Wallet, string>;
  transactions!: Table<Transaction, string>;
  budgets!: Table<Budget, string>;
  subscriptions!: Table<Subscription, string>;
  categories!: Table<Category, string>;
  settings!: Table<AppSettings, string>;

  constructor() {
    super('RupeeTrackDatabase');
    
    // Define the schema
    this.version(1).stores({
      wallets: 'id, name',
      transactions: 'id, type, date, walletId, category',
      budgets: 'id, category, period',
      subscriptions: 'id, nextDate',
      categories: 'id, type',
      settings: 'id'
    });
  }
}

export const db = new RupeeTrackDB();
