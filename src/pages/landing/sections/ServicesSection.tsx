import Reveal from '../../../components/Reveal'

export default function ServicesSection() {
  return (
    <section className="relative z-10 bg-teal-900/10 py-20">
      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Training Services</h2>
            <p className="mb-6 leading-relaxed text-slate-300">
              We provide POS system training services to help businesses effectively use the
              point-of-sale systems. Whether you are a small business owner or a large corporation,
              our training services are designed to meet your specific needs. Our team of experts
              will guide you through the process of setting up and using your POS system, ensuring
              that you have a thorough understanding of its features and functionality. With our
              training services, you can maximize the benefits of your POS system and improve your
              business operations. Contact us today to learn more about our POS system training
              services.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-bold text-white transition-colors hover:bg-teal-700"
            >
              Contact Now
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Customize Services</h2>
            <p className="mb-6 leading-relaxed text-slate-300">
              Our POS system can also customize personal invoices, receipts, purchase orders, and
              kitchen order templates. Showcase your brand identity and maintain a professional
              image by adding your logo and personalized messages. This level of customization not
              only enhances the overall customer experience but also helps build brand loyalty and
              recognition.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg border border-teal-500 px-6 py-3 font-bold text-teal-400 transition-colors hover:bg-teal-500/20"
            >
              Contact Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
