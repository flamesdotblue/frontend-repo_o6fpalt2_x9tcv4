import React, { useState } from 'react';
import { Calendar, MessageSquarePlus, Upload, CreditCard } from 'lucide-react';

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

const Forms = ({ onUseCredits }) => {
  const [active, setActive] = useState('templates');

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="border-b border-gray-200 p-3 sm:p-4 flex flex-wrap gap-2">
        <TabButton active={active === 'templates'} onClick={() => setActive('templates')} icon={MessageSquarePlus}>
          Message Template
        </TabButton>
        <TabButton active={active === 'campaign'} onClick={() => setActive('campaign')} icon={Calendar}>
          Campaign Scheduling
        </TabButton>
        <TabButton active={active === 'contacts'} onClick={() => setActive('contacts')} icon={Upload}>
          Contact Upload
        </TabButton>
        <TabButton active={active === 'plans'} onClick={() => setActive('plans')} icon={CreditCard}>
          Plan Purchases
        </TabButton>
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

const Field = ({ label, children }) => (
  <label className="block space-y-1">
    <span className="text-sm text-gray-700">{label}</span>
    {children}
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
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Template Name">
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
        <Field label="Message Content">
          <Textarea rows={6} placeholder="Hey {name}, check out our latest offer..." required />
        </Field>
      </div>
      <div className="md:col-span-2 flex justify-end">
        <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Save Template</button>
      </div>
    </form>
  );
};

const CampaignForm = ({ onUseCredits }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUseCredits?.(25);
    alert('Campaign scheduled (dummy)! 25 credits used.');
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Campaign Name">
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
      <Field label="Sender Number (Virtual)">
        <Select defaultValue="evo-1">
          <option value="evo-1">Evolution Node #1</option>
          <option value="evo-2">Evolution Node #2</option>
        </Select>
      </Field>
      <Field label="Audience">
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
  );
};

const ContactsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contacts uploaded (dummy)!');
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Upload CSV">
          <input type="file" accept=".csv" className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
        </Field>
        <Field label="Group Name (optional)">
          <Input placeholder="VIP Customers" />
        </Field>
      </div>
      <Field label="Paste Numbers (one per line)">
        <Textarea rows={6} placeholder="+15551234567\n+15557654321" />
      </Field>
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Import Contacts</button>
      </div>
    </form>
  );
};

const PlansForm = () => {
  const plans = [
    { name: 'Starter', price: 5, credits: 500 },
    { name: 'Growth', price: 15, credits: 2000 },
    { name: 'Scale', price: 49, credits: 8000 },
  ];
  return (
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
  );
};

export default Forms;
