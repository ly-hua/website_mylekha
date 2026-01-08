import Reveal from '../../../components/Reveal'

export default function ResourcesSection() {
  return (
    <section id="resources" className="relative z-10 bg-slate-900/60 py-20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Helpful <span className="text-teal-500">Resources</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Everything you need to learn and get support.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                <i className="fas fa-book text-teal-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Documentation</h3>
              <p className="text-sm text-slate-400">Setup guides and feature explanations.</p>
            </a>
          </Reveal>

          <Reveal delayMs={120}>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <i className="fas fa-circle-question text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold">FAQs</h3>
              <p className="text-sm text-slate-400">Answers to common questions (ENG/KHM).</p>
            </a>
          </Reveal>

          <Reveal delayMs={240}>
            <a href="#" className="glass-card block rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <i className="fas fa-headset text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Support</h3>
              <p className="text-sm text-slate-400">Contact us for training and onboarding.</p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
