import { Outlet } from 'react-router-dom';
import FloatingNavbar from '@/components/navigation/FloatingNavbar';

export default function AppShell() {
  return (
    <div className="min-h-screen bg-background text-text-primary pb-20 md:pb-0 md:pl-64 flex">
      {/* Sidebar for tablet/desktop */}
      <aside className="hidden md:flex flex-col w-64 fixed left-0 top-0 bottom-0 glass z-50">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-tight">RupeeTrack</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {/* Nav links placeholder */}
          <div className="p-3 bg-surface-secondary rounded-xl cursor-pointer">Dashboard</div>
          <div className="p-3 hover:bg-surface-secondary rounded-xl cursor-pointer text-text-secondary">Analytics</div>
          <div className="p-3 hover:bg-surface-secondary rounded-xl cursor-pointer text-text-secondary">Budgets</div>
          <div className="p-3 hover:bg-surface-secondary rounded-xl cursor-pointer text-text-secondary">Settings</div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8 pt-safe pb-safe">
        <Outlet />
      </main>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <FloatingNavbar />
      </div>
    </div>
  );
}
