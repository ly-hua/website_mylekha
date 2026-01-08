import Reveal from '../../../components/Reveal'

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Powerful features for your <span className="text-teal-500">business needs</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              We’ve got everything you need to take your business to the next level. Don’t let
              outdated technology hold your business back.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          <Reveal>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-cash-register text-xl text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Sale Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Create sales, quotes, refunds easily</li>
                <li>Manage by smartphone, tablet, or computer</li>
                <li>Real-time invoice printing & sending</li>
                <li>Easy filter by date, customer, due/paid</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-boxes text-xl text-purple-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Inventory Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Track stock with a few taps</li>
                <li>Real-time data on inventory levels</li>
                <li>Adjustment feature for warehouse alignment</li>
                <li>Inventory count to reduce errors</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-chart-line text-xl text-green-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Reports</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Access sales, expense, P&amp;L reports</li>
                <li>Filter by date, store, staff, supplier</li>
                <li>User-friendly visualizations</li>
                <li>Deep insights into operations</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-store text-xl text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Multi-Store Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Track inventory/sales across locations</li>
                <li>Unique permissions per store employee</li>
                <li>Manage multiple companies in one account</li>
                <li>Consolidated reporting</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-users text-xl text-red-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Customer &amp; Supplier</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Track sale and purchase transitions</li>
                <li>Manage AP with suppliers &amp; AR with customers</li>
                <li>Check payment deadlines to avoid fees</li>
                <li>Analyze transaction history</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-receipt text-xl text-pink-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Customization</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Tailor invoices with logo &amp; contact info</li>
                <li>Choose layout, font, and colors</li>
                <li>Add custom notes and payment terms</li>
                <li>Customize Receipts, POs, and Kitchen Orders</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-cubes text-xl text-blue-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Product Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Organize by ingredient, product, combo</li>
                <li>Stock alert features</li>
                <li>Categorize by brand or type</li>
                <li>Quick location for faster orders</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-money-bill-wave text-xl text-yellow-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Expense Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Record expenses with a few clicks</li>
                <li>Manage expenses with categories</li>
                <li>Monitor flow of money</li>
                <li>Improve financial well-being</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="glass-card group rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20 transition-transform group-hover:scale-110">
                <i className="fas fa-user-shield text-xl text-indigo-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Employee Management</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-400">
                <li>Assign role-based permissions</li>
                <li>Secure access to system areas</li>
                <li>Increase productivity &amp; trust</li>
                <li>Smooth operations monitoring</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
