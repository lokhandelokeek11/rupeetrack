import { createBrowserRouter } from 'react-router-dom';
import AppShell from '@/app/layouts/AppShell';
import Dashboard from '@/features/dashboard/Dashboard';
import AddExpense from '@/features/expenses/AddExpense';
import Analytics from '@/features/analytics/Analytics';
import Budgets from '@/features/budgets/Budgets';
import Settings from '@/features/settings/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'add',
        element: <AddExpense />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'budgets',
        element: <Budgets />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);
