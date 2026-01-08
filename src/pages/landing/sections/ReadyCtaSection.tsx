import Reveal from '../../../components/Reveal'

export default function ReadyCtaSection() {
  return (
    <section className="relative z-10 border-y border-slate-800 bg-teal-900/10 py-20">
      <Reveal>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to get a <span className="text-teal-500">high-tech POS system?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300">
            Great! A high-tech POS system can revolutionize the way you run your business. With
            advanced features such as sale management, inventory management, customer and supplier
            management, expense management, and real-time reporting, you’ll have access to valuable
            insights and data that can help you make informed decisions and grow your business.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-teal-600 px-10 py-4 text-lg font-bold shadow-lg shadow-teal-500/30 transition-all hover:scale-105 hover:bg-teal-700"
          >
            Contact Now
          </a>
        </div>
      </Reveal>
    </section>
  )
}
