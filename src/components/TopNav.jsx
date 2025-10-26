import React from 'react';
import { Menu, Settings, LogIn, User, Wallet, Search, Plus } from 'lucide-react';

const TopNav = ({ onMenuClick, onOpenAuth, credits, onGoSettings, current, onQuickCreate }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={onMenuClick}
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">WM</span>
              <span>WhatsMark</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 truncate">
              <span className="px-2">/</span>
              <span className="truncate capitalize">{current}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <div className="relative hidden sm:block w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search campaigns, templates, contacts..."
                className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Credits: {credits}</span>
            </div>
            <button
              onClick={onQuickCreate}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4" /> New Campaign
            </button>
            <button
              onClick={onGoSettings}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700"
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700"
            >
              <LogIn className="w-4 h-4" /> <span className="hidden sm:inline">Login</span>
            </button>
            <div className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
