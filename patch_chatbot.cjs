const fs = require('fs');
let code = fs.readFileSync('src/components/Chatbot.tsx', 'utf8');

code = code.replace(
  `  const [input, setInput] = useState('');`,
  `  const [input, setInput] = useState('');\n  const [isTyping, setIsTyping] = useState(false);`
);

code = code.replace(
  `  const handleSend = () => {
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
  };`,
  `  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Harika bir soru! Voicify asistanı tıpkı şu an benim sizinle yazıştığım gibi, müşterilerinizle telefonda akıcı ve doğal bir şekilde konuşur. İşletmenize özel fiyatları verebilir, randevu alabilir ve sıkça sorulan soruları yanıtlayabilir. Demomuzu denemek ister misiniz?'
      }]);
      setIsTyping(false);
    }, 1500);
  };`
);

code = code.replace(
  `              <div ref={messagesEndRef} />
            </div>`,
  `              {isTyping && (
                <div className="max-w-[85%] rounded-2xl p-3 text-sm bg-slate-800 text-slate-400 self-start rounded-tl-sm border border-white/5 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>`
);

code = code.replace(
  `disabled={!input.trim()}`,
  `disabled={!input.trim() || isTyping}`
);

fs.writeFileSync('src/components/Chatbot.tsx', code);
