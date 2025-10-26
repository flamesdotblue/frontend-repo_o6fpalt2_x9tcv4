import React from 'react';
import { Home, MessageSquare, Calendar, Users, CreditCard, Settings } from 'lucide-react';

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'templates', label: 'Templates', icon: MessageSquare },
  { key: 'campaigns', label: 'Campaigns', icon: Calendar },
  { key: 'contacts', label: 'Contacts', icon: Users },
  { key: 'plans', label: 'Plans', icon: CreditCard },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar = ({ active, onChange, open, onClose }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:static z-50 h-full md:h-auto top-0 left-0 w-72 md:w-60 bg-white border-r border-gray-200 transform transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        aria-label="Sidebar Navigation"
      >
        <div className="p-3 border-b border-gray-200">
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Menu</div>
        </div>
        <nav className="p-2 space-y-1">
          {items.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => {
                  onChange(key);
                  onClose?.();
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto hidden md:block p-3 text-xs text-gray-500">
          Tips: Use the New Campaign button for a faster flow.
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
