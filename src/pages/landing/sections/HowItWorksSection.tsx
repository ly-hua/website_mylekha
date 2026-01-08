import Reveal from '../../../components/Reveal'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative z-10 bg-slate-900/60 py-20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              How it <span className="text-teal-500">works</span>
            </h2>
            <p className="mx-auto max-w-3xl text-slate-400">
              Start selling in minutes. MyLekha connects sales, inventory, and reporting into one simple POS.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Setup</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Create your store, add products, set prices, and connect a printer/scanner.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Sell</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Make sales, refunds, and quotes from smartphone, tablet, or computer.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300 font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Track & Grow</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                View real-time reports, manage inventory, and run multi-store operations.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-4xl" delayMs={250}>
          <div className="glass-card overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div className="font-bold">Watch Demo</div>
              <div className="text-sm text-slate-400">(Add your video link later)</div>
            </div>
            <div className="flex aspect-video items-center justify-center bg-slate-800 text-slate-400">
              Demo video placeholder
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
