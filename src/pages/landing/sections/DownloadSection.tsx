import { Button } from 'primereact/button'
import Reveal from '../../../components/Reveal'

export default function DownloadSection() {
  return (
    <section id="download" className="relative z-10 border-y border-slate-800 bg-slate-900/80 py-20">
      <div className="container mx-auto px-6">
        <Reveal className="text-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Download <span className="text-teal-500">MyLekha</span>
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-slate-400">
              Get MyLekha POS on your device. Use the dashboard on desktop and run POS on mobile/tablet.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                label="Download for Android"
                icon="pi pi-android"
                pt={{
                  root: {
                    className:
                      'px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full font-bold shadow-lg shadow-teal-500/30 transition-all transform hover:scale-105',
                  },
                  icon: { className: 'mr-2' },
                }}
              />
              <Button
                label="Download for Windows"
                icon="pi pi-desktop"
                pt={{
                  root: {
                    className:
                      'px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 glass-card hover:bg-slate-700',
                  },
                  icon: { className: 'mr-2' },
                }}
              />
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Replace these buttons with real download links when ready.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
