
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Booking from './components/Booking';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden selection:bg-primary/30 selection:text-primary-100">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black pointer-events-none -z-10"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Booking />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
