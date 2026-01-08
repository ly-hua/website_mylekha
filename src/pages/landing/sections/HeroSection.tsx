import { Button } from 'primereact/button'
import Reveal from '../../../components/Reveal'

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <Reveal className="z-10">
          <div>
            <div className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/20 px-4 py-1 text-xs font-bold uppercase text-teal-300">
              One fit to all POS system
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight uppercase md:text-6xl">
              Your Business <br />
              Always in <span className="text-gradient">Your Pocket</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300">
              Contact us today and see how it can benefit your business!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                label="Get Started"
                pt={{
                  root: {
                    className:
                      'px-8 py-4 bg-teal-600 hover:bg-teal-700 rounded-full font-bold shadow-lg shadow-teal-500/30 transition-all transform hover:scale-105',
                  },
                  label: { className: 'font-bold' },
                }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              />

              <Button
                label="Watch Demo"
                pt={{
                  root: {
                    className:
                      'px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 glass-card hover:bg-slate-700',
                  },
                  label: { className: 'font-bold' },
                }}
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="relative z-10 hidden md:block" delayMs={120}>
          <div className="glass-card rounded-2xl p-6 transition-transform duration-500 hover:rotate-0">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold">Real-time Dashboard</h3>
              <span className="text-sm text-teal-400">
                <i className="fas fa-arrow-up" /> 33.3% Growth
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-end justify-between">
                <span className="text-sm text-slate-400">Income</span>
                <span className="text-2xl font-bold">$654,321</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                <div className="h-full w-3/4 bg-teal-500" />
              </div>

              <div className="flex items-end justify-between">
                <span className="text-sm text-slate-400">Profit</span>
                <span className="text-2xl font-bold text-green-400">+$530,865</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                <div className="h-full w-2/3 bg-green-500" />
              </div>

              <div className="flex items-end justify-between border-t border-slate-700 pt-2">
                <span className="text-sm text-slate-400">Expenses</span>
                <span className="text-xl font-bold text-red-400">$123,456</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
