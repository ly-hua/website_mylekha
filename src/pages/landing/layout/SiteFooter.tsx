import { useMemo } from 'react'
import Reveal from '../../../components/Reveal'

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer id="contact" className="relative z-10 border-t border-slate-800 bg-slate-900 pb-8 pt-16">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Contact <span className="text-teal-500">Us</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-slate-400">
              Get in touch with our helpful and friendly support team using one of the contact
              methods listed
            </p>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <i className="fab fa-facebook-f text-xl text-white" />
                </div>
                <h3 className="mb-1 text-lg font-bold">MyLekha POS</h3>
                <p className="text-sm text-slate-400">Our facebook page</p>
              </div>

              <div className="glass-card flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                  <i className="fab fa-telegram-plane text-xl text-white" />
                </div>
                <h3 className="mb-1 text-lg font-bold">MyLekha</h3>
                <p className="text-sm text-slate-400">Our telegram contact</p>
              </div>

              <div className="glass-card flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
                  <i className="fas fa-envelope text-xl text-white" />
                </div>
                <h3 className="mb-1 text-lg font-bold">info@mylekha.net</h3>
                <p className="text-sm text-slate-400">Our email address</p>
              </div>

              <div className="glass-card flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                  <i className="fas fa-phone text-xl text-white" />
                </div>
                <h3 className="mb-1 text-lg font-bold">+855 (0) 81 666 078</h3>
                <p className="text-sm text-slate-400">Our phone number</p>
              </div>

              <a
                className="glass-card flex flex-col items-center rounded-xl p-6 transition-colors hover:bg-slate-800 md:col-span-2 lg:col-span-2"
                href="https://maps.google.com/?q=26%20street%2C%20Wat%20Bo%20Village%2C%20Slokram%20Commune%2C%20Siem%20Reap%20City%2C%20Cambodia"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
                  <i className="fas fa-map-marker-alt text-xl text-white" />
                </div>
                <h3 className="mb-1 text-center text-lg font-bold">
                  26 street, Wat Bo Village, Slokram Commune, Siem Reap City, Cambodia
                </h3>
                <p className="text-sm text-slate-400">Click on address above to view on map</p>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mb-12 grid gap-8 border-t border-slate-800 pt-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <i className="fas fa-cube text-teal-500" /> MyLekha
              </h2>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
                MyLekha is a fit for all POS systems that help business owners easily manage their
                inventory, sales, and customer data. MyLekha streamlines the process of running a
                business and helps owners save time and increase profits. Whether you run a small
                retail store or a large restaurant chain, MyLekha can be tailored to meet your
                specific needs and improve your overall efficiency. We are more than just software;
                we are your technology partner for growth.
              </p>
              <div className="mb-4">
                <h5 className="mb-2 text-sm font-bold">Payment Options</h5>
                <div className="flex gap-2 text-2xl text-slate-500">
                  <i className="fab fa-cc-visa transition-colors hover:text-white" />
                  <i className="fab fa-cc-mastercard transition-colors hover:text-white" />
                  <i className="fas fa-money-bill transition-colors hover:text-white" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Pages</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#about" className="hover:text-teal-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-teal-400">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    New Feeds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    FAQs (ENG)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    FAQs (KHM)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; Copyright {year} MyLekha・All rights reserved・{' '}
          <a href="#home" className="hover:text-white">
            Return to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
