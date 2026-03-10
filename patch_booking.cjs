const fs = require('fs');
let code = fs.readFileSync('src/components/Booking.tsx', 'utf8');
code = code.replace(
  `  const [selectedTime, setSelectedTime] = useState<string | null>(null);`,
  `  const [selectedTime, setSelectedTime] = useState<string | null>(null);\n  const [name, setName] = useState('');\n  const [company, setCompany] = useState('');\n  const [phone, setPhone] = useState('');`
);
code = code.replace(
  `<input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Ahmet Yılmaz" />`,
  `<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Ahmet Yılmaz" />`
);
code = code.replace(
  `<input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Yılmaz Otomotiv" />`,
  `<input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Yılmaz Otomotiv" />`
);
code = code.replace(
  `<input type="tel" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="0555 555 55 55" />`,
  `<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="0555 555 55 55" />`
);
code = code.replace(
  `onClick={() => setStep(3)}`,
  `onClick={() => setStep(3)}\n                    disabled={!name || !company || !phone}\n                    style={{ opacity: (!name || !company || !phone) ? 0.5 : 1 }}`
);
code = code.replace(
  `onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); }}`,
  `onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); setName(''); setCompany(''); setPhone(''); }}`
);
fs.writeFileSync('src/components/Booking.tsx', code);
