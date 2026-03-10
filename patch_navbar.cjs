const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
code = code.replace(
  `        </div>\n      </div>\n    </nav>`,
  `        </div>\n      </div>\n      {isOpen && (\n        <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-6 space-y-4">\n          <a href="#features" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-300 hover:text-white transition-colors">Özellikler</a>\n          <a href="#booking" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-300 hover:text-white transition-colors">Demoyu Dene</a>\n          <a href="#booking" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-sky-50 transition-colors">Hemen Başla</a>\n        </div>\n      )}\n    </nav>`
);
fs.writeFileSync('src/components/Navbar.tsx', code);
