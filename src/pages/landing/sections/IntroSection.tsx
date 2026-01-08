import Reveal from '../../../components/Reveal'

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative z-10 border-b border-slate-800 bg-slate-900/50 py-20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                What is <span className="text-teal-500">MyLekha?</span>
              </h2>
              <div className="mb-6 h-1 w-20 rounded bg-teal-500" />
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                MyLekha is a fit for all POS systems that help business owners easily manage their
                inventory, sales, and customer data. MyLekha streamlines the process of running a
                business and helps owners save time and increase profits. Whether you run a small
                retail store or a large restaurant chain, MyLekha can be tailored to meet your
                specific needs and improve your overall efficiency. We are more than just software;
                we are your technology partner for growth.
              </p>
              <p className="leading-relaxed text-slate-400">
                Stop juggling messy paperwork, disconnected apps, and expensive services. We have
                combined all the tools you need into one simple, powerful system so you can focus
                on what you do best.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-6 text-center transition-all hover:bg-slate-800/80">
                <i className="fas fa-rocket mb-4 text-4xl text-teal-400" />
                <h3 className="font-bold">Streamline Process</h3>
              </div>
              <div className="glass-card rounded-xl p-6 text-center transition-all hover:bg-slate-800/80">
                <i className="fas fa-chart-pie mb-4 text-4xl text-purple-400" />
                <h3 className="font-bold">Increase Profits</h3>
              </div>
              <div className="glass-card rounded-xl p-6 text-center transition-all hover:bg-slate-800/80">
                <i className="fas fa-tools mb-4 text-4xl text-blue-400" />
                <h3 className="font-bold">Simple Tools</h3>
              </div>
              <div className="glass-card rounded-xl p-6 text-center transition-all hover:bg-slate-800/80">
                <i className="fas fa-handshake mb-4 text-4xl text-green-400" />
                <h3 className="font-bold">Growth Partner</h3>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center" delayMs={180}>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Our Product</h3>
            <p className="text-lg text-slate-400">
              Powerful online business solutions that help you maximize your potential and achieve
              your goals.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
