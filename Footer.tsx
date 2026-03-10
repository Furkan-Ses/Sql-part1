import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Voicify.AI
            </span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 Voicify AI. Tüm hakları saklıdır. KOBİ'ler için geliştirildi.
          </div>
        </div>
      </div>
    </footer>
  );
}
