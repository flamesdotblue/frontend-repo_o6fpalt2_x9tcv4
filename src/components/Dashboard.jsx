import React from 'react';
import { MessageSquare, CheckCircle2, XCircle, Rocket } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="mt-1 text-2xl font-semibold text-gray-900">{value}</div>
      </div>
      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
);

const Dashboard = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Sent" value={data.totalSent} icon={CheckCircle2} color="bg-emerald-600" />
        <StatCard title="Total Not Sent" value={data.totalFailed} icon={XCircle} color="bg-rose-600" />
        <StatCard title="Total Credits" value={data.credits} icon={MessageSquare} color="bg-indigo-600" />
        <StatCard title="Campaigns" value={data.campaigns} icon={Rocket} color="bg-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            <span className="text-sm text-gray-500">Last 7 days</span>
          </div>
          <div className="space-y-3">
            {data.activity.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg ${item.type === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center`}>
                    {item.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.time}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <div className="space-y-3">
            {data.campaignPerf.map((c, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span className="font-medium">{c.name}</span>
                  <span>{c.rate}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${c.rate}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
