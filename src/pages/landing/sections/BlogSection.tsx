import Reveal from '../../../components/Reveal'

export default function BlogSection() {
  return (
    <section id="blog" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Latest <span className="text-teal-500">Blog</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Tips, updates, and guides to help you run your business smarter.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-3 text-xs font-bold uppercase text-teal-300">Guide</div>
              <h3 className="mb-2 text-xl font-bold">How to reduce stock errors</h3>
              <p className="text-sm text-slate-400">
                Simple workflows to keep inventory accurate using counts and adjustments.
              </p>
            </a>
          </Reveal>

          <Reveal delayMs={120}>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-3 text-xs font-bold uppercase text-purple-300">Update</div>
              <h3 className="mb-2 text-xl font-bold">Real-time reporting for owners</h3>
              <p className="text-sm text-slate-400">
                Track sales, profit, and expenses from your phone—anytime.
              </p>
            </a>
          </Reveal>

          <Reveal delayMs={240}>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-3 text-xs font-bold uppercase text-blue-300">Business</div>
              <h3 className="mb-2 text-xl font-bold">Multi-store best practices</h3>
              <p className="text-sm text-slate-400">
                Permissions, consolidated reports, and control across locations.
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
