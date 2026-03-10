import { motion } from 'framer-motion';
import { CalendarCheck, Clock, BrainCircuit, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-sky-400" />,
    title: "7/24 Kesintisiz Hizmet",
    description: "Mesai saatleri dışında bile tüm çağrılarınızı anında yanıtlar. Müşterileriniz asla telesekretere düşmez."
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-violet-400" />,
    title: "Otomatik Randevu Planlama",
    description: "Takviminizle entegre çalışarak boş saatlerinize otomatik randevu alır ve hatırlatmalar gönderir."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
    title: "Sektöre Özel Yapay Zeka",
    description: "İşletmenizin hizmetlerini, fiyatlarını ve sıkça sorulan soruları saniyeler içinde öğrenir."
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-rose-400" />,
    title: "İnsan Doğallığında Ses",
    description: "Robotik olmayan, duyguları anlayabilen ve tamamen doğal bir dille konuşan ses asistanı."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">İşletmeniz İçin <span className="text-sky-400">Süper Güçler</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Geleneksel çağrı merkezlerinden çok daha uygun fiyata, kusursuz bir müşteri deneyimi sunun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
