import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import FeatureGrid from './components/FeatureGrid';
import AuthForm from './components/AuthForm';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'login' | 'signup' | 'dashboard'
  const year = useMemo(() => new Date().getFullYear(), []);

  const handleLoginSubmit = (data) => {
    if (data?.switch === 'signup') {
      setView('signup');
      return;
    }
    alert('Signed in successfully. This is a demo — backend auth will be added later.');
    setView('dashboard');
  };

  const handleSignupSubmit = (data) => {
    if (data?.switch === 'login') {
      setView('login');
      return;
    }
    alert('Account created! This is a demo — verification and onboarding will be added later.');
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        onLogin={() => setView('login')}
        onSignup={() => setView('signup')}
        onCTA={() => setView('signup')}
      />

      {view === 'landing' && (
        <>
          <LandingHero onGetStarted={() => setView('signup')} onLearnMore={() => {
            const el = document.getElementById('features');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} />
          <FeatureGrid />
          <section id="pricing" className="py-16 md:py-24 bg-emerald-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Simple, usage-based pricing</h2>
                <p className="mt-2 text-slate-600">Start free and pay only for what you use. Upgrade or cancel anytime.</p>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{name:'Starter',price:'Free',desc:'Experiment and learn',items:['100 credits','Basic templates','Community support']},{name:'Growth',price:'$49/mo',desc:'For small teams',items:['5,000 credits','Scheduling & segments','Email support']},{name:'Scale',price:'$149/mo',desc:'For growing brands',items:['20,000 credits','Advanced analytics','Priority support']}].map(t => (
                  <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="font-semibold">{t.name}</h3>
                    <div className="mt-2 text-3xl font-bold">{t.price}</div>
                    <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {t.items.map(i => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-emerald-600" /> {i}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => setView('signup')} className="mt-6 w-full rounded-lg bg-slate-900 text-white py-2.5 hover:bg-slate-800">Choose {t.name}</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {view === 'login' && (
        <AuthForm mode="login" onBack={() => setView('landing')} onSubmit={handleLoginSubmit} />
      )}

      {view === 'signup' && (
        <AuthForm mode="signup" onBack={() => setView('landing')} onSubmit={handleSignupSubmit} />
      )}

      {view === 'dashboard' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold">You’re in!</h1>
          <p className="mt-2 text-slate-600">This demo focuses on the new landing and authentication screens. The full dashboard will appear here next.</p>
          <div className="mt-8">
            <button onClick={() => setView('landing')} className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">Back to landing</button>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {year} WhatsLaunch. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <button onClick={() => setView('login')} className="hover:text-slate-900">Login</button>
            <button onClick={() => setView('signup')} className="hover:text-slate-900">Sign up</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
