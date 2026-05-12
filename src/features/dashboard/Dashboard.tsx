export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-end">
        <div>
          <p className="text-text-secondary text-sm font-medium mb-1">Total Balance</p>
          <h1 className="text-4xl font-bold tracking-tight">₹0.00</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-secondary border border-outline flex items-center justify-center">
          <span className="text-sm">RT</span>
        </div>
      </header>
      
      <section className="grid grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <p className="text-text-secondary text-xs mb-2">Income</p>
          <p className="text-lg font-semibold text-white">₹0.00</p>
        </div>
        <div className="glass-card p-5">
          <p className="text-text-secondary text-xs mb-2">Expense</p>
          <p className="text-lg font-semibold text-white">₹0.00</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="glass-card p-8 flex items-center justify-center text-center">
          <div>
            <p className="text-text-muted mb-2">No transactions yet</p>
            <p className="text-sm text-text-secondary">Tap the + button to add your first expense</p>
          </div>
        </div>
      </section>
    </div>
  );
}
