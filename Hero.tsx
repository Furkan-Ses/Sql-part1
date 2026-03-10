import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-medium text-sky-200">KOBİ'ler için Yeni Nesil Yapay Zeka Ses Asistanı</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Hiçbir Müşteriyi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">
            Kaçırmayın.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
        >
          7/24 çağrılarınızı yanıtlayan, randevu oluşturan ve müşterilerinizin sorularını cevaplayan yapay zeka asistanınızla satışlarınızı katlayın.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-lg hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] transition-all flex items-center justify-center gap-2"
          >
            Ücretsiz Demo Alın <ArrowRight className="w-5 h-5" />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Play className="w-5 h-5" /> Örnek Çağrı Dinle
          </button>
        </motion.div>
      </div>
    </div>
  );
}
