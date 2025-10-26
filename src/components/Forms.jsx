import React, { useMemo, useState } from 'react';
import { Calendar, MessageSquarePlus, Upload, CreditCard, Info } from 'lucide-react';

const TABS = [
  { key: 'templates', label: 'Message Templates', icon: MessageSquarePlus },
  { key: 'campaign', label: 'Campaign Scheduling', icon: Calendar },
  { key: 'contacts', label: 'Contact Upload', icon: Upload },
  { key: 'plans', label: 'Plan Purchases', icon: CreditCard },
];

const TabButton = ({ active, onClick, icon: Icon, children }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border transition ${
      active ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'text-gray-700 border-gray-200 hover:bg-gray-50'
    }`}
  >
    <Icon className="w-4 h-4" />
    {children}
  </button>
);

const Forms = ({ onUseCredits, initialTab = 'templates', visibleTabs }) => {
  const tabs = useMemo(() => {
    if (!visibleTabs || visibleTabs.length === 0) return TABS;
    return TABS.filter(t => visibleTabs.includes(t.key));
  }, [visibleTabs]);

  const [active, setActive] = useState(() => (tabs.some(t => t.key === initialTab) ? initialTab : tabs[0].key));

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="border-b border-gray-200 p-3 sm:p-4 flex flex-wrap gap-2">
        {tabs.map(({ key, label, icon }) => (
          <TabButton key={key} active={active === key} onClick={() => setActive(key)} icon={icon}>
            {label}
          </TabButton>
        ))}
      </div>

      <div className="p-4 sm:p-6">
        {active === 'templates' && <TemplatesForm />}
        {active === 'campaign' && <CampaignForm onUseCredits={onUseCredits} />}
        {active === 'contacts' && <ContactsForm />}
        {active === 'plans' && <PlansForm />}
      </div>
    </div>
  );
};

const Help = ({ title, children }) => (
  <div className="mb-4 flex items-start gap-3 rounded-md border border-emerald-100 bg-emerald-50/60 p-3 text-sm text-emerald-800">
    <Info className="mt-0.5 w-4 h-4" />
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-emerald-700/90">{children}</div>
    </div>
  </div>
);

const Field = ({ label, hint, children }) => (
  <label className="block space-y-1">
    <span className="text-sm text-gray-700">{label}</span>
    {children}
    {hint && <span className="text-xs text-gray-500">{hint}</span>}
  </label>
);

const Input = (props) => (
  <input {...props} className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
);

const Textarea = (props) => (
  <textarea {...props} className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
);

const Select = ({ children, ...props }) => (
  <select {...props} className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">{children}</select>
);

const TemplatesForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Template saved (dummy)!');
  };
  return (
    <>
      <Help title="What is a template?">
        Templates are reusable messages with placeholders. Use them to speed up campaign setup and keep your brand voice consistent.
      </Help>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Template Name" hint="Name it so your team can find it easily.">
          <Input placeholder="New Year Promo" required />
        </Field>
        <Field label="Category">
          <Select defaultValue="marketing">
            <option value="marketing">Marketing</option>
            <option value="transactional">Transactional</option>
            <option value="support">Support</option>
          </Select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Message Content" hint="Use {name} to personalize. Avoid shortened URLs.">
            <Textarea rows={6} placeholder="Hey {name}, check out our latest offer..." required />
          </Field>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Save Template</button>
        </div>
      </form>
    </>
  );
};

const CampaignForm = ({ onUseCredits }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUseCredits?.(25);
    alert('Campaign scheduled (dummy)! 25 credits used.');
  };
  return (
    <>
      <Help title="How scheduling works">
        Pick a template, choose your audience, then set date and time. We’ll send messages at the scheduled time using your selected virtual number.
      </Help>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Campaign Name" hint="Internal only; customers won’t see this.">
          <Input placeholder="Spring Blast #1" required />
        </Field>
        <Field label="Template">
          <Select defaultValue="ny-promo">
            <option value="ny-promo">New Year Promo</option>
            <option value="cart-abandon">Cart Abandon Reminder</option>
          </Select>
        </Field>
        <Field label="Schedule Date">
          <Input type="date" required />
        </Field>
        <Field label="Schedule Time">
          <Input type="time" required />
        </Field>
        <Field label="Sender Number (Virtual)" hint="Provided by your Evolution API instance.">
          <Select defaultValue="evo-1">
            <option value="evo-1">Evolution Node #1</option>
            <option value="evo-2">Evolution Node #2</option>
          </Select>
        </Field>
        <Field label="Audience" hint="Pick a saved segment or upload contacts.">
          <Select defaultValue="contacts-seg-a">
            <option value="contacts-seg-a">Segment A (1,200)</option>
            <option value="contacts-seg-b">Segment B (750)</option>
          </Select>
        </Field>
        <div className="md:col-span-2 flex justify-end gap-2">
          <button type="button" onClick={() => alert('Preview (dummy)')} className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">Preview</button>
          <button type="submit" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Schedule Campaign</button>
        </div>
      </form>
    </>
  );
};

const ContactsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contacts uploaded (dummy)!');
  };
  return (
    <>
      <Help title="Import contacts quickly">
        Upload a CSV with a single column of phone numbers (with country code) or paste numbers below. We’ll handle formatting.
      </Help>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Upload CSV" hint="Accepted: .csv only">
            <input type="file" accept=".csv" className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
          </Field>
          <Field label="Group Name (optional)" hint="Helps with segmentation later.">
            <Input placeholder="VIP Customers" />
          </Field>
        </div>
        <Field label="Paste Numbers (one per line)" hint="Example: +15551234567">
          <Textarea rows={6} placeholder={"+15551234567\n+15557654321"} />
        </Field>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Import Contacts</button>
        </div>
      </form>
    </>
  );
};

const PlansForm = () => {
  const plans = [
    { name: 'Starter', price: 5, credits: 500 },
    { name: 'Growth', price: 15, credits: 2000 },
    { name: 'Scale', price: 49, credits: 8000 },
  ];
  return (
    <>
      <Help title="Choose what fits your volume">
        Plans include all features. Pick credits based on your expected monthly sends. You can upgrade anytime.
      </Help>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl border border-gray-200 p-5 bg-gradient-to-br from-white to-gray-50">
            <div className="text-sm text-gray-500">{p.name}</div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">${p.price}<span className="text-sm text-gray-500">/mo</span></div>
            <div className="mt-2 text-sm text-gray-700">{p.credits.toLocaleString()} credits</div>
            <ul className="mt-4 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Unlimited templates</li>
              <li>Campaign scheduler</li>
              <li>Virtual numbers supported</li>
            </ul>
            <button
              onClick={() => alert(`Checkout (dummy): ${p.name}`)}
              className="mt-5 w-full px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forms;
