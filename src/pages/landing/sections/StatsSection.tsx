import Reveal from '../../../components/Reveal'

export default function StatsSection() {
  return (
    <section className="relative z-10 border-y border-slate-800 bg-slate-900/50 py-10 backdrop-blur-sm">
      <Reveal>
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-white">+$2,473.65</h3>
            <p className="mt-1 text-sm text-slate-400">Average Daily Sales</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Real-Time</h3>
            <p className="mt-1 text-sm text-slate-400">Reports & Analytics</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Multi-Store</h3>
            <p className="mt-1 text-sm text-slate-400">Centralized Management</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Friendly</h3>
            <p className="mt-1 text-sm text-slate-400">User Interface</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
