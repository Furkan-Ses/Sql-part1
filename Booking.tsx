import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = [14, 15, 16, 17, 18];
  const times = ["09:00", "10:30", "13:00", "15:00", "16:30"];

  return (
    <section id="booking" className="py-24 bg-black/50 border-y border-white/5 relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sistemi Canlı <span className="text-violet-400">Deneyimleyin</span></h2>
          <p className="text-slate-400 text-lg">
            Sadece 15 dakikalık bir demo görüşmesi ile işletmenize ne kadar değer katabileceğimizi görün.
          </p>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-violet-500"></div>
          
          {step === 1 ? (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Calendar className="text-sky-400" /> Gün Seçin
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        selectedDate === date 
                          ? 'border-sky-500 bg-sky-500/20 text-white' 
                          : 'border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs uppercase mb-1">Eyl</span>
                      <span className="text-xl font-bold">{date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={selectedDate ? 'opacity-100 transition-opacity' : 'opacity-30 pointer-events-none transition-opacity'}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="text-violet-400" /> Saat Seçin
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedTime === time 
                          ? 'border-violet-500 bg-violet-500/20 text-white' 
                          : 'border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                  className="px-8 py-3 rounded-xl bg-white text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  Devam Et <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ) : step === 2 ? (
            <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Şirket Adı</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Yılmaz Otomotiv" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Telefon</label>
                  <input type="tel" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="0555 555 55 55" />
                </div>
                <div className="flex gap-4 mt-6">
                  <button onClick={() => setStep(1)} className="px-6 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                    Geri
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold text-lg hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] transition-all"
                  >
                    Randevuyu Onayla
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Randevunuz Onaylandı!</h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Size seçtiğiniz gün ve saatte ({selectedDate} Eylül, {selectedTime}) yapay zeka asistanımız telefon üzerinden ulaşarak canlı bir demo başlatacak.
              </p>
              <button
                onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); }}
                className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
              >
                Yeni Randevu Al
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
