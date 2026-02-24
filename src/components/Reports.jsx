import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Calendar, FileText, TrendingUp, TrendingDown, Activity, BarChart3, PieChart as PieChartIcon, Target, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Reports() {
  const { t } = useLanguage();
  const productionData = [
    { month: 'Jan', coal: 2400, iron: 1800, limestone: 2200 },
    { month: 'Feb', coal: 2100, iron: 2100, limestone: 2400 },
    { month: 'Mar', coal: 2800, iron: 1900, limestone: 2100 },
    { month: 'Apr', coal: 2600, iron: 2300, limestone: 2500 },
    { month: 'May', coal: 3100, iron: 2200, limestone: 2300 },
    { month: 'Jun', coal: 2900, iron: 2600, limestone: 2700 },
  ];
  const detectionAccuracy = [
    { day: 'Mon', accuracy: 92 }, { day: 'Tue', accuracy: 89 }, { day: 'Wed', accuracy: 94 },
    { day: 'Thu', accuracy: 91 }, { day: 'Fri', accuracy: 93 }, { day: 'Sat', accuracy: 90 }, { day: 'Sun', accuracy: 88 },
  ];
  const materialDistribution = [
    { name: 'Coal', value: 45, color: '#6366f1' }, { name: 'Iron Ore', value: 25, color: '#3b82f6' },
    { name: 'Limestone', value: 15, color: '#10b981' }, { name: 'Copper', value: 10, color: '#f59e0b' }, { name: 'Others', value: 5, color: '#8b5cf6' },
  ];
  const weighbridgeData = [
    { time: '6 AM', vehicles: 12 }, { time: '9 AM', vehicles: 28 }, { time: '12 PM', vehicles: 35 },
    { time: '3 PM', vehicles: 42 }, { time: '6 PM', vehicles: 31 }, { time: '9 PM', vehicles: 18 },
  ];
  const keyInsights = [
    { title: 'Peak Production', value: '12-3 PM', trend: '+18%', improved: true, icon: Target, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { title: 'Top Material', value: 'Coal', trend: '+5%', improved: true, icon: BarChart3, color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { title: 'AI Accuracy', value: '91.2%', trend: '+2.3%', improved: true, icon: Zap, color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
    { title: 'Process Speed', value: '18 mins', trend: '-12%', improved: true, icon: Activity, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  ];
  const monthlyTrends = [
    { metric: 'Production Volume', current: '14,520 tons', previous: '12,340 tons', change: '+17.7%', improved: true },
    { metric: 'Vehicle Count', current: '2,341 trucks', previous: '2,156 trucks', change: '+8.6%', improved: true },
    { metric: 'AI Accuracy', current: '91.2%', previous: '88.9%', change: '+2.3%', improved: true },
    { metric: 'Efficiency Rate', current: '94.5%', previous: '92.7%', change: '+1.8%', improved: true },
    { metric: 'Avg Process Time', current: '18 mins', previous: '22 mins', change: '-18.2%', improved: true },
    { metric: 'Revenue', current: '₹145.2L', previous: '₹123.4L', change: '+17.7%', improved: true },
  ];
  const performanceBreakdown = [
    { category: 'Material Quality', score: 94, color: '#22c55e' }, { category: 'Detection Speed', score: 88, color: '#3b82f6' },
    { category: 'Processing Time', score: 91, color: '#8b5cf6' }, { category: 'Equipment Uptime', score: 96, color: '#f59e0b' },
    { category: 'Safety Compliance', score: 99, color: '#ef4444' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '12px 16px', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
          <p style={{ color: '#a5b4fc', fontWeight: 600, marginBottom: 4, fontSize: 12 }}>{label}</p>
          {payload.map((p, i) => (
            <p key={i} style={{ color: p.color || '#fff', fontSize: 13, fontWeight: 500 }}>{p.name}: {p.value}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.productionReports}</h1>
            <p className="text-gray-500 mt-1">{t.analyticsInsights}</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all hover:bg-gray-50"
              style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
              <Calendar className="w-4 h-4" />Date Range
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 4px 15px rgba(79,70,229,0.3)' }}>
              <Download className="w-4 h-4" />{t.downloadReport}
            </button>
          </div>
        </div>
      </div>

      {/* Key Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {keyInsights.map((insight, i) => {
          const Icon = insight.icon;
          return (
            <div key={i} className="glass-card rounded-2xl p-6 card-hover-lift"
              style={{ borderTop: `3px solid ${insight.color}`, animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: insight.gradient }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: 'rgba(34,197,94,0.1)' }}>
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: '#16a34a' }} />
                  <span className="text-xs font-bold" style={{ color: '#16a34a' }}>{insight.trend}</span>
                </div>
              </div>
              <h3 className="text-gray-500 text-sm mb-1 font-medium">{insight.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{insight.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
            Production by Material
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
              <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="coal" fill="#6366f1" name="Coal" radius={[6, 6, 0, 0]} />
              <Bar dataKey="iron" fill="#3b82f6" name="Iron Ore" radius={[6, 6, 0, 0]} />
              <Bar dataKey="limestone" fill="#10b981" name="Limestone" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #8b5cf6, #7c3aed)' }} />
            Material Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={materialDistribution} cx="50%" cy="50%" outerRadius={100} innerRadius={50} dataKey="value"
                label={(e) => `${e.name} ${e.value}%`} stroke="rgba(255,255,255,0.8)" strokeWidth={2}>
                {materialDistribution.map((entry, index) => (<Cell key={index} fill={entry.color} />))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #a855f7, #8b5cf6)' }} />
            AI Detection Accuracy
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={detectionAccuracy}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
              <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
              <YAxis stroke="#9ca3af" domain={[80, 100]} style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={3} name="Accuracy %"
                dot={{ fill: '#8b5cf6', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#8b5cf6', stroke: '#fff', strokeWidth: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #10b981, #059669)' }} />
            Weighbridge Traffic
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weighbridgeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
              <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="vehicles" stroke="#10b981" strokeWidth={3} name="Vehicles"
                dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, fill: '#10b981', stroke: '#fff', strokeWidth: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e, #10b981)' }} />
            Monthly Trends
          </h3>
          <div className="space-y-4">
            {monthlyTrends.map((trend, i) => (
              <div key={i} className="pb-4 last:pb-0 last:border-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-gray-700">{trend.metric}</span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)' }}>
                    <TrendingUp className="w-3 h-3" style={{ color: '#16a34a' }} />
                    <span className="text-xs font-bold" style={{ color: '#16a34a' }}>{trend.change}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-gray-900">{trend.current}</span>
                  <span className="text-gray-400">vs {trend.previous}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 card-hover-lift">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #8b5cf6, #a855f7)' }} />
            Performance Breakdown
          </h3>
          <div className="space-y-5">
            {performanceBreakdown.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-700">{item.category}</span>
                  <span className="text-sm font-bold text-gray-900">{item.score}%</span>
                </div>
                <div className="rounded-full h-2.5 overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.score}%`, background: `linear-gradient(90deg, ${item.color}, ${item.color}90)` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <p className="text-3xl font-bold text-gradient">
                {Math.round(performanceBreakdown.reduce((s, i) => s + i.score, 0) / performanceBreakdown.length)}%
              </p>
              <p className="text-sm text-gray-400 mt-1">Overall Performance Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Reports */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6)' }} />
          Generated Reports
        </h2>
        <div className="space-y-3">
          {[
            { name: 'Monthly Production Report - June 2026', date: 'Jun 30, 2026', size: '2.4 MB' },
            { name: 'Weighbridge Summary - Week 24', date: 'Jun 28, 2026', size: '1.8 MB' },
            { name: 'AI Detection Analysis - Q2 2026', date: 'Jun 25, 2026', size: '3.1 MB' },
            { name: 'Inventory Report - June 2026', date: 'Jun 20, 2026', size: '1.5 MB' },
          ].map((report, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:scale-[1.003]"
              style={{ background: 'rgba(99,102,241,0.03)', border: '1px solid rgba(99,102,241,0.08)' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.1)' }}>
                  <FileText className="w-5 h-5" style={{ color: '#6366f1' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-400">{report.date} • {report.size}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all hover:bg-indigo-50"
                style={{ color: '#6366f1' }}>
                <Download className="w-4 h-4" />Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
