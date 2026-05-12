import { Home, PieChart, Plus, Target, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingNavbar() {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <nav className="glass-card flex items-center justify-between px-6 py-4 mx-auto max-w-sm rounded-2xl shadow-2xl">
        <Link to="/" className="text-text-primary">
          <Home size={24} />
        </Link>
        <Link to="/analytics" className="text-text-secondary hover:text-text-primary transition-colors">
          <PieChart size={24} />
        </Link>
        <div className="relative -top-6">
          <Link to="/add" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-background shadow-lg hover:scale-105 transition-transform">
            <Plus size={28} />
          </Link>
        </div>
        <Link to="/budgets" className="text-text-secondary hover:text-text-primary transition-colors">
          <Target size={24} />
        </Link>
        <Link to="/settings" className="text-text-secondary hover:text-text-primary transition-colors">
          <Settings size={24} />
        </Link>
      </nav>
    </div>
  );
}
