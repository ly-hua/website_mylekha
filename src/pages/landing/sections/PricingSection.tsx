import Reveal from '../../../components/Reveal'

export default function PricingSection() {
  return (
    <section className="relative z-10 bg-slate-900/80 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Subscription <span className="text-teal-500">Plans</span>
            </h2>
            <p className="text-slate-400">
              With our software, you can be confident that you’re getting a solution that is
              tailored to your business and designed to help it succeed
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <Reveal>
            <div className="glass-card flex flex-col rounded-2xl border-t-4 border-slate-500 p-8 text-center">
              <h3 className="mb-2 text-xl font-bold text-slate-300">Basic</h3>
              <div className="mb-6 text-4xl font-bold">
                $5<span className="text-lg font-normal text-slate-500">/month</span>
              </div>
              <ul className="mb-8 flex-grow space-y-4 pl-4 text-left text-slate-300">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 1 store
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 2 Staff Account
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 2 POS Devices
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> Last 3 Months Report
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full rounded-lg border border-slate-500 py-3 transition-colors hover:bg-slate-700"
              >
                Select Plan
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="glass-card relative flex flex-col rounded-2xl border-t-4 border-teal-500 bg-slate-800 p-8 text-center shadow-2xl shadow-teal-900/20 md:scale-105">
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-teal-600 px-3 py-1 text-xs font-bold">
                RECOMMENDED
              </div>
              <h3 className="mb-2 text-xl font-bold text-teal-400">Standard</h3>
              <div className="mb-2 text-4xl font-bold">
                $10<span className="text-lg font-normal text-slate-500">/month</span>
              </div>
              <p className="mb-6 text-sm font-semibold text-teal-300">plus 1 month free</p>
              <ul className="mb-8 flex-grow space-y-4 pl-4 text-left text-slate-300">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 2 Stores
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 4 Staff Accounts
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 5 POS Devices
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> Last 1 Year Report
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full rounded-lg bg-teal-600 py-3 font-bold transition-colors hover:bg-teal-700"
              >
                Contact Now
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="glass-card flex flex-col rounded-2xl border-t-4 border-purple-500 p-8 text-center">
              <h3 className="mb-2 text-xl font-bold text-purple-400">Premium</h3>
              <div className="mb-2 text-4xl font-bold">
                $15<span className="text-lg font-normal text-slate-500">/month</span>
              </div>
              <p className="mb-6 text-sm font-semibold text-purple-300">plus 2 months free</p>
              <ul className="mb-8 flex-grow space-y-4 pl-4 text-left text-slate-300">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 7 Stores
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 11 Staff Accounts
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> 15 POS Devices
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500" /> No Restriction Report
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full rounded-lg border border-purple-500 py-3 transition-colors hover:bg-purple-900/20"
              >
                Select Plan
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
