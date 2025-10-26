import React from 'react';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';

export default function LandingHero({ onGetStarted, onLearnMore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Sparkles size={14} /> New: Quick Campaign Builder
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Grow your business with WhatsApp marketing that converts
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Launch targeted campaigns, manage contacts, and monitor results — all in one beautiful, intuitive dashboard. Pay-as-you-go credits keep costs predictable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onGetStarted} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                Get started free
                <ArrowRight size={18} />
              </button>
              <button onClick={onLearnMore} className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
                Learn more
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <Shield size={16} className="text-emerald-600" />
              No setup fees. Cancel anytime.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video md:aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                alt="Dashboard preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
