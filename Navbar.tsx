import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Voicify.AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Özellikler</a>
            <a href="#booking" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Demoyu Dene</a>
            <a 
              href="#booking"
              className="px-6 py-2.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-sky-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Hemen Başla
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
