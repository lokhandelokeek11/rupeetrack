import { create } from 'zustand';
import { db } from '@/db/dexie';
import type { Transaction } from '@/types/models';
import { nanoid } from 'nanoid';

interface TransactionState {
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
}

export const useTransactionStore = create<TransactionState>(() => ({
  addTransaction: async (data) => {
    await db.transactions.add({
      ...data,
      id: nanoid(),
      createdAt: Date.now()
    });
  },
  deleteTransaction: async (id) => {
    await db.transactions.delete(id);
  }
}));
