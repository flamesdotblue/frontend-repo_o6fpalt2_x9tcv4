import React from 'react';
import { Rocket, LogIn, UserPlus } from 'lucide-react';

export default function Navbar({ onLogin, onSignup, onCTA }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 grid place-items-center text-white shadow">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">WhatsLaunch</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <button onClick={onLogin} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <LogIn size={16} />
            Login
          </button>
          <button onClick={onSignup} className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-800">
            <UserPlus size={16} />
            Sign up
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={onCTA} className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Get Started</button>
        </div>
      </div>
    </header>
  );
}
