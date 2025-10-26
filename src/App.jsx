import React, { useMemo, useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms';
import { X } from 'lucide-react';

function App() {
  const [active, setActive] = useState('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [credits, setCredits] = useState(3200);

  const dashboardData = useMemo(() => ({
    totalSent: 12540,
    totalFailed: 320,
    credits,
    campaigns: 48,
    activity: [
      { title: 'Campaign "Diwali Promo" sent', time: '2 hours ago', count: '+2,100', type: 'success' },
      { title: '12 numbers failed to deliver', time: '2 hours ago', count: '-12', type: 'fail' },
      { title: 'New template approved', time: 'yesterday', count: '+1', type: 'success' },
      { title: 'Contacts imported', time: '2 days ago', count: '+850', type: 'success' },
    ],
    campaignPerf: [
      { name: 'Welcome Series', rate: 76 },
      { name: 'Holiday Blast', rate: 64 },
      { name: 'Cart Recovery', rate: 52 },
      { name: 'Reactivation', rate: 35 },
    ],
  }), [credits]);

  const handleUseCredits = (amount) => {
    setCredits((c) => Math.max(0, c - amount));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav
        onMenuClick={() => setMobileNavOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        credits={credits}
        onGoSettings={() => setActive('settings')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-6">
        <Sidebar
          active={active}
          onChange={setActive}
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />

        <main className="space-y-6">
          {active === 'dashboard' && (
            <>
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
                  <p className="text-gray-600 text-sm">Overview of your WhatsApp marketing performance</p>
                </div>
              </div>
              <Dashboard data={dashboardData} />
              <Forms onUseCredits={handleUseCredits} />
            </>
          )}

          {active === 'templates' && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Message Templates</h2>
              <p className="text-gray-600">Create and manage message templates for faster campaign setup.</p>
              <Forms />
            </section>
          )}

          {active === 'campaigns' && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Campaign Scheduler</h2>
              <p className="text-gray-600">Plan and schedule your campaigns with virtual numbers.</p>
              <Forms onUseCredits={handleUseCredits} />
            </section>
          )}

          {active === 'contacts' && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Contacts</h2>
              <p className="text-gray-600">Upload CSVs or paste numbers to build your audience lists.</p>
              <Forms />
            </section>
          )}

          {active === 'plans' && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Plans & Credits</h2>
              <p className="text-gray-600">Choose a plan and top-up credits. Payments are mocked in this prototype.</p>
              <Forms />
            </section>
          )}

          {active === 'settings' && (
            <section className="space-y-6 bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Settings</h2>
                <p className="text-gray-600 text-sm">Manage workspace, numbers, and preferences.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Workspace</h3>
                  <label className="block">
                    <span className="text-sm text-gray-700">Business Name</span>
                    <input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Acme Corp" />
                  </label>
                  <label className="block">
                    <span className="text-sm text-gray-700">Default Sender</span>
                    <select className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>Evolution Node #1</option>
                      <option>Evolution Node #2</option>
                    </select>
                  </label>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Preferences</h3>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4" defaultChecked />
                    <span className="text-sm text-gray-700">Email me campaign reports</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm text-gray-700">Enable 2FA</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={() => alert('Settings saved (dummy)!')} className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Save Changes</button>
              </div>
            </section>
          )}
        </main>
      </div>

      {authOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setAuthOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setAuthOpen(false)}>
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Login / Signup</h3>
              <p className="text-sm text-gray-600">Prototype-only authentication form</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setAuthOpen(false); alert('Logged in (dummy)'); }} className="space-y-3">
              <label className="block">
                <span className="text-sm text-gray-700">Email</span>
                <input type="email" required className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700">Password</span>
                <input type="password" required className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" />
              </label>
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Continue</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
