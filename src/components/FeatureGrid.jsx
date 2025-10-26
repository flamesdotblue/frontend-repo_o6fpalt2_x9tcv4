import React from 'react';
import { MessageSquare, Users, Clock, Zap, CreditCard, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Templates & Personalization',
    desc: 'Create reusable message templates with dynamic variables to personalize every send.'
  },
  {
    icon: Users,
    title: 'Contact Management',
    desc: 'Import CSVs, segment audiences, and keep lists clean with automatic deduplication.'
  },
  {
    icon: Clock,
    title: 'Campaign Scheduling',
    desc: 'Schedule broadcasts, drip sequences, and time zone–aware sends that fit your audience.'
  },
  {
    icon: BarChart2,
    title: 'Performance Insights',
    desc: 'Track deliveries, reads, and replies in a clean dashboard with exportable reports.'
  },
  {
    icon: CreditCard,
    title: 'Credits & Billing',
    desc: 'Transparent, usage-based pricing with secure payments and instant credit top-ups.'
  },
  {
    icon: Zap,
    title: 'Fast API Integration',
    desc: 'Connect your stack with our REST API and webhooks for end-to-end automation.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Everything you need to run WhatsApp campaigns</h2>
          <p className="mt-3 text-slate-600">From templates to payments, we built the essential toolkit so you can go from idea to launch in minutes.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
