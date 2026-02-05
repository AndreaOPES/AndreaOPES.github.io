
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, BarChart3, 
  PlayCircle, CreditCard, Mail, Phone, MapPin, 
  Quote, Sparkles, LayoutDashboard, Calculator,
  ReceiptText, Bell, Lock, TrendingUp, Menu, X, Gift, Monitor, Layout,
  Check, Globe, Briefcase, UserCircle
} from 'lucide-react';
import { Card } from './components/Shared';

// --- Lead Capture Modal Component ---
const LeadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-opex-navy/70 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] animate-in zoom-in-95 duration-500">
        
        {/* Left Column: Visual/Context */}
        <div className="md:w-[40%] bg-opex-navy p-12 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[20px] border-opex-green rounded-full"></div>
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-12">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-4 border-opex-navy rounded-full"></div>
                </div>
                <span className="text-xl font-black text-white tracking-tight">opex</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-opex-green rounded-full mb-6">
                <Sparkles size={12} className="fill-opex-green" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exclusivity Protocol</span>
              </div>
              
              <h3 className="text-4xl font-black text-white tracking-tight leading-tight mb-6">
                The Architect <br /><span className="text-opex-green text-3xl">Cohort.</span>
              </h3>
              
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                We are selecting 100 professionals to define the next decade of financial infrastructure. Secure your influence on our engineering roadmap.
              </p>
           </div>
           
           <div className="relative z-10 pt-12 border-t border-white/5">
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-opex-navy bg-slate-800 flex items-center justify-center text-[10px] font-black text-white uppercase">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                 </div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Joined by top tier soloists</p>
              </div>
           </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:w-[60%] p-12 md:p-16 bg-white relative">
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-opex-navy transition-colors">
            <X size={24} />
          </button>

          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-opex-green rounded-full flex items-center justify-center mb-8 shadow-xl shadow-opex-green/20">
                <Check className="text-opex-navy" size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black text-opex-navy mb-4 tracking-tight">Application Received</h3>
              <p className="text-slate-500 font-medium max-w-xs mx-auto">Andrea Caruso's team will review your credentials and contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <h4 className="text-2xl font-black text-opex-navy tracking-tight">Partner Application</h4>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Personal & Professional Identification</p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <CheckCircle2 size={12} /> Full Name
                    </label>
                    <input required type="text" className="w-full border-b-2 border-slate-100 py-3 text-[16px] font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Mail size={12} /> Professional Email
                    </label>
                    <input required type="email" className="w-full border-b-2 border-slate-100 py-3 text-[16px] font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="Enter email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Globe size={12} /> Residency / Hub
                    </label>
                    <input required type="text" className="w-full border-b-2 border-slate-100 py-3 text-[16px] font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="City, Country" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Briefcase size={12} /> Professional focus
                    </label>
                    <input required type="text" className="w-full border-b-2 border-slate-100 py-3 text-[16px] font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="e.g. Creative Lead" />
                  </div>
                </div>

                <div className="pt-8">
                  <button type="submit" className="w-full py-6 bg-opex-navy text-white font-bold uppercase tracking-[0.2em] text-[13px] rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-opex-navy/20 active:scale-95 flex items-center justify-center gap-3">
                    Transmit Application <ArrowRight size={18} />
                  </button>
                  <p className="text-[9px] text-center text-slate-300 font-bold uppercase tracking-[0.1em] mt-6">
                    By submitting, you agree to our confidential beta terms.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ activeView, onToggleView, onOpenModal }: { activeView: 'MARKETING' | 'PRODUCT', onToggleView: (v: 'MARKETING' | 'PRODUCT') => void, onOpenModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (activeView === 'MARKETING') {
        const sections = ['features', 'pricing', 'testimonials', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Capabilities', id: 'features' },
    { name: 'Influence', id: 'pricing' },
    { name: 'Endorsements', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100' : 'bg-white py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => {
            onToggleView('MARKETING');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <div className="w-8 h-8 bg-opex-navy rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-4 border-white rounded-full"></div>
            </div>
            <span className="text-2xl font-black text-opex-navy tracking-tight">opex</span>
          </div>
          
          {activeView === 'MARKETING' && (
            <div className="hidden md:flex items-center gap-12 lg:gap-16">
              {navLinks.map(link => (
                <button 
                  key={link.id} 
                  onClick={() => scrollTo(link.id)}
                  className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all ${activeSection === link.id ? 'text-opex-navy' : 'text-slate-300 hover:text-opex-navy'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-6">
            <button 
              onClick={onOpenModal}
              className="px-8 py-3 bg-opex-navy text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-opex-navy/10"
            >
              Get started
            </button>
            
            <button className="md:hidden p-2 text-opex-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white pt-32 px-10 md:hidden">
          <div className="flex flex-col gap-10">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-3xl font-black text-opex-navy text-left uppercase tracking-tighter">
                {link.name}
              </button>
            ))}
            <hr className="border-slate-100" />
            <button className="text-xl font-bold text-slate-400 uppercase tracking-widest text-left">Log in</button>
          </div>
        </div>
      )}
    </>
  );
};

const MarketingContent = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus('sending');
    setTimeout(() => setInquiryStatus('success'), 1500);
    setTimeout(() => setInquiryStatus('idle'), 5000);
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section id="hero" className="pt-52 pb-32 md:pt-64 md:pb-44 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-opex-green/5 border border-opex-green/20 text-opex-navy rounded-full mb-14">
            <div className="w-1.5 h-1.5 rounded-full bg-opex-green"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Institutional Grade • 100+ Elite Pioneers</span>
          </div>
          
          <h1 className="text-6xl md:text-[94px] font-black tracking-tight text-opex-navy leading-[0.95] mb-12">
            Master your capital. <br /> <span className="text-opex-green">Eliminate</span> tax anxiety.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-[22px] text-slate-400 font-medium mb-16 leading-[1.5] tracking-tight">
            Sophisticated financial infrastructure engineered for high-stakes soloists. Automate compliance, optimize liquidity, and command your business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto px-12 py-6 bg-opex-navy text-white font-bold uppercase tracking-[0.2em] rounded-full text-[14px] hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl shadow-opex-navy/20"
            >
              Start free trial <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-12 max-w-7xl mx-auto px-4 relative">
          <div className="bg-opex-navy rounded-[4rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,46,64,0.3)] relative group">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2400" 
              alt="OPEX Experience" 
              className="w-full h-[600px] object-cover opacity-50 brightness-110 scale-105 group-hover:scale-100 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[85%] h-[75%] bg-[#0A0D10]/90 rounded-[2.5rem] border border-white/5 shadow-2xl p-10 hidden md:block backdrop-blur-xl">
                  <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                           <div className="w-5 h-5 border-[3px] border-opex-green rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 w-44 bg-white/10 rounded-full"></div>
                          <div className="h-2 w-28 bg-white/5 rounded-full"></div>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-12 gap-8 h-[60%]">
                     <div className="col-span-8 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center">
                        <BarChart3 className="text-white/10" size={80} />
                     </div>
                     <div className="col-span-4 space-y-6">
                        <div className="h-1/2 bg-white/5 rounded-3xl border border-white/5"></div>
                        <div className="h-1/2 bg-opex-green/10 rounded-3xl border border-opex-green/10"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="features" className="py-44 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-32">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-opex-navy mb-8">
              Intelligence, <br /><span className="text-opex-green">Distilled</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              We've automated the friction out of high-stakes solo business. Our platform doesn't just track data—it architects your financial advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                icon: LayoutDashboard, 
                title: "Financial Command", 
                desc: "Institutional-level cash flow analytics. Real-time yield monitoring and burn rate optimization for serious growth." 
              },
              { 
                icon: Calculator, 
                title: "Precision Compliance", 
                desc: "Lethal accuracy in tax liability modeling. Our autonomous buffer ensures you are always prepared, never surprised." 
              },
              { 
                icon: ReceiptText, 
                title: "Frictionless Ledger", 
                desc: "Automated transaction classification that respects your time. Minimal human input for maximum organizational clarity." 
              },
              { 
                icon: Lock, 
                title: "Fortress Sovereignty", 
                desc: "Banking-tier encryption and security protocols. Your data is protected by the same standards as global financial titans." 
              }
            ].map((feature, i) => (
              <Card key={i} className="p-16 border-none bg-white rounded-[3.5rem] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                <div className="w-14 h-14 bg-opex-navy rounded-2xl flex items-center justify-center text-opex-green mb-10 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-3xl font-black text-opex-navy mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Influence Section */}
      <section id="pricing" className="py-44 bg-opex-navy px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-opex-green rounded-full">
              <Sparkles size={14} className="fill-opex-green" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Equity in Influence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Pay nothing. <br /><span className="text-opex-green">Build everything.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              We aren't looking for customers. We're looking for partners. Join our inaugural cohort to architect the definitive platform for the next generation of professional soloists.
            </p>
            <div className="flex gap-12 pt-6">
               <div className="space-y-1">
                  <p className="text-white text-3xl font-black">€0</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Entry Fee</p>
               </div>
               <div className="space-y-1">
                  <p className="text-white text-3xl font-black">Full</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Control</p>
               </div>
               <div className="space-y-1">
                  <p className="text-white text-3xl font-black">Elite</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Tier Support</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <Card className="p-16 bg-white rounded-[4rem] border-none shadow-2xl relative overflow-visible">
              <div className="mb-12 border-b border-slate-100 pb-12">
                 <div className="w-16 h-16 bg-opex-green/10 rounded-[2rem] flex items-center justify-center text-opex-green mb-8">
                    <Gift size={32} />
                 </div>
                 <h3 className="text-3xl font-black text-opex-navy mb-4 tracking-tight">Founder Partnership</h3>
                 <p className="text-slate-500 font-medium text-lg leading-relaxed">Secure your seat in our exclusive 100-member cohort and influence the roadmap of high-end finance.</p>
              </div>
              
              <ul className="space-y-6 mb-16">
                {[
                  "Lifetime Beta Pricing (Free)", 
                  "Direct Access to Engineering", 
                  "Executive Board Voting Rights", 
                  "Concierge Migration Services"
                ].map((f, j) => (
                  <li key={j} className="flex items-center gap-5 text-opex-navy font-bold text-lg">
                    <CheckCircle2 size={22} className="text-opex-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onOpenModal}
                className="w-full py-7 bg-opex-navy text-white font-bold uppercase tracking-[0.2em] text-[15px] rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-opex-navy/20 active:scale-[0.98]"
              >
                Apply for Founder Partnership
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section id="testimonials" className="py-44 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-black text-opex-navy tracking-tight uppercase tracking-widest">Endorsed by Pioneers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { name: "Sarah van den Berg", role: "Creative Director", loc: "Amsterdam", text: "OPEX has brought institutional-level clarity to my studio. It's the first financial tool that doesn't feel like a chore to use." },
              { name: "Marco Rossi", role: "Infrastructure Lead", loc: "Milan", text: "The automated tax buffer is a masterclass in product design. I haven't worried about my quarterly obligations since I joined." },
              { name: "Thomas Müller", role: "Cinematographer", loc: "Munich", text: "Finally, a tool that respects the complexity of freelance income cycles. The insights are consistently actionable and high-value." },
              { name: "Chloe Dubois", role: "Principal Strategist", loc: "Paris", text: "Beyond the features, it's the reliability. OPEX feels like a permanent partner in my business growth." }
            ].map((t, i) => (
              <div key={i} className="flex flex-col border-l-2 border-opex-green pl-12 py-4">
                <Quote className="text-opex-green/30 mb-8" size={40} fill="currentColor" />
                <p className="text-2xl md:text-3xl text-opex-navy font-medium leading-snug mb-12 tracking-tight italic">
                  "{t.text}"
                </p>
                <div className="mt-auto">
                  <p className="text-xl font-black text-opex-navy uppercase tracking-tighter">{t.name}</p>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">{t.role} • {t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-44 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-opex-navy tracking-tighter mb-12 leading-none">
                Direct <br /><span className="text-opex-green">Concierge.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-medium max-w-xl mb-20 leading-relaxed">
                Connect with our team to discuss infrastructure, integration, or cohort application.
              </p>
              
              <div className="space-y-10">
                 {[
                   { icon: Mail, label: 'CEO Direct Email', value: 'andreacaruso@opes-capital.com' },
                   { icon: UserCircle, label: 'Andrea Caruso (CEO)', value: '+39 345 217 0836' },
                   { icon: UserCircle, label: 'Matteo Nardin (CFO)', value: '+39 348 442 0287' },
                   { icon: MapPin, label: 'Headquarters', value: 'Amsterdam, NL' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-8 group">
                     <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-opex-green shadow-sm group-hover:bg-opex-green group-hover:text-white transition-all duration-300">
                       <item.icon size={24} />
                     </div>
                     <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                       <p className="text-lg md:text-2xl font-bold text-opex-navy break-all">{item.value}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-slate-100">
              <form className="space-y-12" onSubmit={handleInquiry}>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50/50 border-b-2 border-slate-100 py-4 text-xl font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Direct Email</label>
                  <input required type="email" className="w-full bg-slate-50/50 border-b-2 border-slate-100 py-4 text-xl font-bold text-opex-navy outline-none focus:border-opex-green transition-all" placeholder="Enter your email" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Inquiry</label>
                  <textarea required rows={4} className="w-full bg-slate-50/50 border-b-2 border-slate-100 py-4 text-xl font-bold text-opex-navy outline-none focus:border-opex-green transition-all resize-none" placeholder="How can we assist?"></textarea>
                </div>
                <button 
                  disabled={inquiryStatus !== 'idle'}
                  className={`w-full py-7 font-bold uppercase tracking-[0.2em] rounded-full transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 ${
                    inquiryStatus === 'success' 
                      ? 'bg-opex-green text-opex-navy shadow-opex-green/20' 
                      : 'bg-opex-navy text-white hover:bg-slate-800 shadow-opex-navy/10'
                  }`}
                >
                  {inquiryStatus === 'idle' && 'Establish Connection'}
                  {inquiryStatus === 'sending' && 'Establishing...'}
                  {inquiryStatus === 'success' && <><Check size={20} strokeWidth={3} /> Connection Established</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-32 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-opex-navy rounded-full flex items-center justify-center">
               <div className="w-3.5 h-3.5 border-[3px] border-white rounded-full"></div>
            </div>
            <span className="text-xl font-black text-opex-navy tracking-tight">opex</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProductContent = () => (
  <div className="min-h-screen bg-slate-50 pt-44 pb-24 px-6 animate-in slide-in-from-bottom-8 duration-1000">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-3 space-y-10">
         <Card className="bg-white p-10 rounded-[3rem] border-none shadow-sm h-fit">
            <div className="space-y-6">
               {[
                 { icon: LayoutDashboard, label: 'Overview', active: true },
                 { icon: ReceiptText, label: 'Ledger' },
                 { icon: Calculator, label: 'Tax Reserves' },
                 { icon: CreditCard, label: 'Capital' },
                 { icon: Sparkles, label: 'Insights' }
               ].map((item, i) => (
                 <div key={i} className={`flex items-center gap-6 px-6 py-4 rounded-2xl cursor-pointer font-bold text-[14px] uppercase tracking-widest ${item.active ? 'bg-opex-green/10 text-opex-navy' : 'text-slate-400 hover:bg-slate-50 hover:text-opex-navy'}`}>
                    <item.icon size={20} /> {item.label}
                 </div>
               ))}
            </div>
         </Card>
         <Card className="bg-opex-navy text-white p-10 rounded-[3rem] border-none shadow-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3">Operating Balance</p>
            <p className="text-[38px] font-black tracking-tighter mb-10">€42,850.12</p>
            <button className="w-full py-4 bg-opex-green text-opex-navy font-black text-[12px] uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all">Capital Entry</button>
         </Card>
      </div>

      <div className="lg:col-span-9 space-y-12">
         <div className="flex justify-between items-end">
            <div>
               <h1 className="text-[44px] font-black text-opex-navy tracking-tight leading-none">Welcome, Marco.</h1>
               <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] mt-4">Fiscal Summary • June 2024</p>
            </div>
            <div className="flex gap-6">
               <button className="px-8 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-[13px] uppercase tracking-widest text-opex-navy shadow-sm hover:bg-slate-50 transition-all">Export Report</button>
               <button className="px-8 py-4 bg-opex-navy text-white rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 hover:bg-slate-800 shadow-lg shadow-opex-navy/10 transition-all">Disburse Capital <ArrowRight size={18}/></button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-10 bg-white rounded-[3rem] border-none shadow-sm">
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Reserved Capital</p>
               <p className="text-[34px] font-black text-opex-navy tracking-tighter">€12,450</p>
               <div className="mt-8 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-opex-green w-[85%]"></div>
               </div>
            </Card>
            <Card className="p-10 bg-white rounded-[3rem] border-none shadow-sm">
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Burn Coefficient</p>
               <p className="text-[34px] font-black text-opex-navy tracking-tighter">€3,120</p>
               <p className="text-[11px] text-rose-500 font-black mt-4 uppercase tracking-widest">↑ 8% Velocity</p>
            </Card>
            <Card className="p-10 bg-opex-green/10 rounded-[3rem] border-none shadow-sm">
               <p className="text-[11px] font-black text-opex-navy uppercase tracking-[0.2em] mb-3">AI Recommendation</p>
               <p className="text-[14px] font-bold text-opex-navy leading-relaxed">Transition to annual billing for Figma seats to realize €480 in annual efficiency.</p>
               <button className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-opex-navy border-b border-opex-navy pb-1">Optimize Ledger</button>
            </Card>
         </div>

         <Card className="p-12 bg-white rounded-[4rem] border-none shadow-sm h-[450px] flex items-center justify-center">
            <div className="text-center opacity-10">
               <BarChart3 size={80} className="text-opex-navy mx-auto mb-8" />
               <p className="text-opex-navy font-black uppercase tracking-[0.4em] text-[16px]">Generating Analytics Engine</p>
            </div>
         </Card>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeView, setActiveView] = useState<'MARKETING' | 'PRODUCT'>('MARKETING');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-opex-text selection:bg-opex-green selection:text-opex-navy antialiased">
      <Navigation 
        activeView={activeView} 
        onToggleView={setActiveView} 
        onOpenModal={() => setIsModalOpen(true)}
      />
      
      {activeView === 'MARKETING' ? (
        <MarketingContent onOpenModal={() => setIsModalOpen(true)} />
      ) : (
        <ProductContent />
      )}

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
