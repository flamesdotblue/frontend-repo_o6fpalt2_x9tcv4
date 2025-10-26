import React, { useState } from 'react';
import { Mail, Lock, Building2, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function AuthForm({ mode = 'login', onBack, onSubmit }) {
  const isSignup = mode === 'signup';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [business, setBusiness] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (isSignup && !business)) {
      alert('Please fill in all required fields.');
      return;
    }
    onSubmit?.({ email, password, business });
  };

  return (
    <div className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-white to-emerald-50">
      <div className="w-full max-w-md">
        <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mt-1 text-slate-600 text-sm">
            {isSignup ? 'Start your free trial — no credit card required.' : 'Sign in to access your dashboard.'}
          </p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Business name</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="Acme Inc."
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-9 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-9 outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-9 pr-9 outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" className="mt-2 w-full rounded-lg bg-slate-900 text-white py-2.5 hover:bg-slate-800">
              {isSignup ? 'Create account' : 'Sign in'}
            </button>
          </form>
          <div className="mt-4 text-sm text-slate-600">
            {isSignup ? (
              <p>
                Already have an account?{' '}
                <button onClick={() => onSubmit?.({ switch: 'login' })} className="text-emerald-700 hover:underline">Sign in</button>
              </p>
            ) : (
              <p>
                New here?{' '}
                <button onClick={() => onSubmit?.({ switch: 'signup' })} className="text-emerald-700 hover:underline">Create an account</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
