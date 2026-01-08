import Reveal from '../../../components/Reveal'

export default function HardwareSection() {
  return (
    <section id="products-services" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Hardware <span className="text-teal-500">Sets</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="glass-card flex flex-col overflow-hidden rounded-xl transition-all hover:bg-slate-800/80">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <i className="fas fa-mobile-alt text-6xl text-slate-600" />
              </div>
              <div className="flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-teal-400">MyLekha Mobile POS</h3>
                <ul className="mb-4 space-y-1 text-sm text-slate-300">
                  <li>• Mobile POS</li>
                  <li>• ថាច់ស្រ្គីនលឿន (Fast Touchscreen)</li>
                  <li>• ព្រីនវិក្កយបត្រ (Print Receipt)</li>
                  <li>• ដាក់ស៊ីម, WiFi (Sim Card, WiFi)</li>
                  <li>• Barcode Scan</li>
                </ul>
                <div className="mb-4 space-y-1 rounded bg-teal-500/10 p-3 text-xs text-teal-300">
                  <p>+ Include 1 year subscription</p>
                  <p>+ Free 1 click ABA KHQR integration</p>
                  <p>+ Free Digital social commerce website</p>
                  <p>+ Free setup installation and support</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="glass-card flex flex-col overflow-hidden rounded-xl transition-all hover:bg-slate-800/80">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <i className="fas fa-desktop text-6xl text-slate-600" />
              </div>
              <div className="flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-teal-400">All-in-One Desktop Set</h3>
                <ul className="mb-4 space-y-1 text-sm text-slate-300">
                  <li>• ALL-IN-ONE DESKTOP 23.8 inches</li>
                  <li>• ESC printer 80 mm (LAN + USB)</li>
                  <li>• 7 ports cash drawer</li>
                </ul>
                <div className="mb-4 space-y-1 rounded bg-teal-500/10 p-3 text-xs text-teal-300">
                  <p>+ Include 1 year subscription</p>
                  <p>+ Free 1 click ABA KHQR integration</p>
                  <p>+ Free Digital social commerce website</p>
                  <p>+ Free setup installation and support</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="glass-card flex flex-col overflow-hidden rounded-xl transition-all hover:bg-slate-800/80">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <i className="fas fa-tablet-alt text-6xl text-slate-600" />
              </div>
              <div className="flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-teal-400">All-in-One Tablet Set</h3>
                <ul className="mb-4 space-y-1 text-sm text-slate-300">
                  <li>• Tablet 11 inches (WiFi + Sim)</li>
                  <li>• ESC printer 80 mm (LAN + USB)</li>
                  <li>• 7 ports cash drawer</li>
                </ul>
                <div className="mb-4 space-y-1 rounded bg-teal-500/10 p-3 text-xs text-teal-300">
                  <p>+ Include 1 year subscription</p>
                  <p>+ Free 1 click ABA KHQR integration</p>
                  <p>+ Free Digital social commerce website</p>
                  <p>+ Free setup installation and support</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card flex flex-col overflow-hidden rounded-xl transition-all hover:bg-slate-800/80">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <i className="fas fa-computer text-6xl text-slate-600" />
              </div>
              <div className="flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-teal-400">Single Screen PC Set</h3>
                <ul className="mb-4 space-y-1 text-sm text-slate-300">
                  <li>• Touch screen 15.6 inches</li>
                  <li>• ESC printer 80 mm (LAN + USB)</li>
                  <li>• 7 ports cash drawer</li>
                </ul>
                <div className="mb-4 space-y-1 rounded bg-teal-500/10 p-3 text-xs text-teal-300">
                  <p>+ Include 1 year subscription</p>
                  <p>+ Free 1 click ABA KHQR integration</p>
                  <p>+ Free Digital social commerce website</p>
                  <p>+ Free setup installation and support</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="underline hover:text-white text-teal-400">
            View Full Catalog (Dual Screen, Printers, etc.)
          </a>
        </div>
      </div>
    </section>
  )
}
