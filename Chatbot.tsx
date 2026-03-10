import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Merhaba! Ben Voicify yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Harika bir soru! Voicify asistanı tıpkı şu an benim sizinle yazıştığım gibi, müşterilerinizle telefonda akıcı ve doğal bir şekilde konuşur. İşletmenize özel fiyatları verebilir, randevu alabilir ve sıkça sorulan soruları yanıtlayabilir. Demomuzu denemek ister misiniz?' 
      }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-sky-400 hover:scale-110 transition-all z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col h-[500px]"
          >
            <div className="p-4 bg-slate-800/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Satış Asistanı</div>
                  <div className="text-xs text-sky-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Çevrimiçi
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.role === 'assistant' 
                    ? 'bg-slate-800 text-slate-200 self-start rounded-tl-sm border border-white/5' 
                    : 'bg-sky-500 text-white self-end rounded-tr-sm shadow-md'
                }`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-950 border-t border-white/10 shrink-0">
              <div className="flex items-center gap-2 bg-slate-900 rounded-full border border-white/10 p-1.5 pr-2 focus-within:border-sky-500/50 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Bir mesaj yazın..."
                  className="flex-1 bg-transparent px-3 py-1.5 text-sm text-white focus:outline-none placeholder:text-slate-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-400 transition-colors disabled:opacity-50 disabled:hover:bg-sky-500"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
