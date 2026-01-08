import Reveal from '../../../components/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              About <span className="text-teal-500">Us</span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded bg-teal-500" />
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card mb-12 rounded-2xl border-l-4 border-teal-500 p-8 md:p-12">
            <h3 className="mb-6 text-2xl font-bold text-teal-400">Our Story</h3>
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                My Lekha was born from a simple observation: the entrepreneurs who are the backbone
                of Cambodia’s economy were being left behind by technology. We saw our friends and
                family—cafe owners, shopkeepers, and service providers—struggling with outdated
                tools, expensive foreign software, and a mess of paperwork.
              </p>
              <p className="font-semibold text-white">We knew there had to be a better way.</p>
              <p>
                So we brought together a team of passionate Cambodian developers, designers, and
                business strategists to build the solution we knew our community needed. A platform
                that is powerful but simple, affordable but complete, and understands the unique
                challenges and opportunities of doing business in Cambodia.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                <i className="fas fa-bullseye text-xl text-teal-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300">
                To empower Cambodian MSMEs with an all-in-one digital platform that integrates
                their operations with e-commerce and customer loyalty, enabling them to run their
                business efficiently and sell directly to their customers.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="glass-card rounded-2xl p-8 transition-colors hover:bg-slate-800/80">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <i className="fas fa-lightbulb text-xl text-blue-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300">
                To create a thriving, interconnected digital economy in Cambodia where every local
                business has the power to manage, market, and grow on a level playing field.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 transition-colors hover:border-teal-500/50">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                  <i className="fas fa-chart-pie text-xl text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">MyLekha Dashboard</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                MyLekha Dashboard is software that provides full functionality. This app is used
                to manage MyLekha POS. It allows users to easily track inventory, sales, and
                customer information. The MyLekha Dashboard also provides reports and analytics to
                help businesses make informed decisions. Overall, it is a powerful tool for
                streamlining operations and improving business efficiency.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="glass-card rounded-2xl p-8 transition-colors hover:border-blue-500/50">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <i className="fas fa-cash-register text-xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">MyLekha POS</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                MyLekha POS It is point of sale software that helps cashiers process transactions
                quickly and efficiently. With MyLekha POS, cashiers can easily scan barcodes,
                accept various forms of payment, and track sales. The software also generates shift
                reports that can help business owners make informed decisions about their
                operations. Overall, MyLekha POS is a valuable tool for any business looking to
                streamline their checkout process and improve customer service.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
