import { TrendingUp, TrendingDown, Truck, Package, AlertCircle, CheckCircle, FileText, DollarSign, Clock, Users, Activity } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

export function Dashboard() {
  const { t } = useLanguage();
  
  const stats = [
    {
      label: t.totalVehicles,
      value: '87',
      unit: 'trucks',
      change: '+8.3%',
      trend: 'up',
      icon: Truck,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      cardClass: 'stat-card-green',
    },
    {
      label: t.activeOperations,
      value: '342',
      unit: 'scans',
      change: '+15.2%',
      trend: 'up',
      icon: CheckCircle,
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      cardClass: 'stat-card-purple',
    },
    {
      label: t.todayRevenue,
      value: '₹12.48L',
      unit: '',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      cardClass: 'stat-card-blue',
    },
    {
      label: t.pendingBills,
      value: '3',
      unit: 'items',
      change: '-2',
      trend: 'down',
      icon: AlertCircle,
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      cardClass: 'stat-card-orange',
    },
  ];

  const statisticalReports = {
    timeComparison: [
      { period: 'Today', production: 1248, vehicles: 87, revenue: '₹12.48L', change: '+12.5%', improved: true },
      { period: 'Yesterday', production: 1110, vehicles: 81, revenue: '₹11.10L', change: '+8.2%', improved: true },
      { period: 'This Week', production: 7738, vehicles: 542, revenue: '₹77.38L', change: '+15.3%', improved: true },
      { period: 'Last Week', production: 6710, vehicles: 468, revenue: '₹67.10L', change: '+9.8%', improved: true },
      { period: 'This Month', production: 32450, vehicles: 2301, revenue: '₹324.50L', change: '+18.7%', improved: true },
      { period: 'Last Month', production: 27340, vehicles: 1998, revenue: '₹273.40L', change: '+12.4%', improved: true },
    ],
    materialStats: [
      { material: 'Coal', totalTons: 562, vehicles: 39, avgWeight: 14.4, revenue: '₹5.62L', quality: '92%' },
      { material: 'Iron Ore', totalTons: 375, vehicles: 21, avgWeight: 17.9, revenue: '₹3.75L', quality: '95%' },
      { material: 'Limestone', totalTons: 187, vehicles: 15, avgWeight: 12.5, revenue: '₹1.87L', quality: '89%' },
      { material: 'Others', totalTons: 124, vehicles: 12, avgWeight: 10.3, revenue: '₹1.24L', quality: '87%' },
    ],
    operationalStats: [
      { metric: 'Total Vehicles Processed', value: '87', subtext: 'Today', icon: Truck, color: '#3b82f6' },
      { metric: 'Average Wait Time', value: '8.5', unit: 'mins', subtext: 'Per Vehicle', icon: Clock, color: '#f59e0b' },
      { metric: 'Active Drivers', value: '34', subtext: 'Currently Online', icon: Users, color: '#10b981' },
      { metric: 'Revenue Generated', value: '₹12.48L', subtext: 'Today', icon: DollarSign, color: '#8b5cf6' },
    ],
    qualityMetrics: [
      { grade: 'Grade A', count: 45, percentage: 52, color: '#22c55e' },
      { grade: 'Grade B', count: 32, percentage: 37, color: '#3b82f6' },
      { grade: 'Grade C', count: 10, percentage: 11, color: '#eab308' },
    ],
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          padding: '12px 16px',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
        }}>
          <p style={{ color: '#a5b4fc', fontWeight: 600, marginBottom: 4, fontSize: 12 }}>{label}</p>
          {payload.map((p, i) => (
            <p key={i} style={{ color: p.color || '#fff', fontSize: 13, fontWeight: 500 }}>
              {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Dashboard</h1>
          <span className="live-dot text-sm font-medium px-3 py-1 rounded-full"
            style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
            Live
          </span>
        </div>
        <p className="text-gray-500 flex items-center gap-2">
          <Activity className="w-4 h-4" style={{ color: '#6366f1' }} />
          Real-time mining operations overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isAlert = stat.label === 'Pending Alerts';
          const isPositive = isAlert ? stat.trend === 'down' : stat.trend === 'up';
          const trendColor = isPositive ? '#16a34a' : '#dc2626';

          return (
            <div key={index}
              className={`glass-card rounded-2xl p-6 card-hover-lift ${stat.cardClass}`}
              style={{
                animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: stat.gradient }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                  style={{ background: isPositive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-3.5 h-3.5" style={{ color: trendColor }} />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5" style={{ color: trendColor }} />
                  )}
                  <span className="text-xs font-bold" style={{ color: trendColor }}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <h3 className="text-gray-500 text-sm mb-1 font-medium">{stat.label}</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <span className="text-gray-400 text-sm font-medium">{stat.unit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Statistical Reports Header */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Statistical Reports</h2>
            <p className="text-sm text-gray-400">Comprehensive analytics overview</p>
          </div>
        </div>

        {/* Time-Based Comparison Report */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
            Time Period Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full premium-table">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Period</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Production</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Vehicles</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {statisticalReports.timeComparison.map((row, index) => (
                  <tr key={index} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-bold text-gray-900">{row.period}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-900 font-medium">{row.production.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm ml-1">tons</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-900 font-medium">{row.vehicles}</span>
                      <span className="text-gray-400 text-sm ml-1">trucks</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-bold text-gray-900">{row.revenue}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full w-fit"
                        style={{ background: row.improved ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}
                      >
                        {row.improved ? (
                          <TrendingUp className="w-3.5 h-3.5" style={{ color: '#16a34a' }} />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5" style={{ color: '#dc2626' }} />
                        )}
                        <span className="font-bold text-sm" style={{ color: row.improved ? '#16a34a' : '#dc2626' }}>
                          {row.change}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Production Trend Chart */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #06b6d4)' }} />
              Production Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={statisticalReports.timeComparison}>
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
                <XAxis dataKey="period" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="production"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorProduction)"
                  strokeWidth={3}
                  name="Production (tons)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Vehicle Count Chart */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #10b981, #059669)' }} />
              Vehicle Count Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={statisticalReports.timeComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
                <XAxis dataKey="period" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="vehicles"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, fill: '#10b981', stroke: '#fff', strokeWidth: 3 }}
                  name="Vehicles"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Material Stats Bar Chart */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #8b5cf6, #7c3aed)' }} />
              Material Production
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statisticalReports.materialStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
                <XAxis dataKey="material" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="totalTons" fill="#8b5cf6" name="Total Tons" radius={[8, 8, 0, 0]}>
                  {statisticalReports.materialStats.map((_, i) => (
                    <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quality Distribution Pie Chart */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e, #16a34a)' }} />
              Quality Grade Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statisticalReports.qualityMetrics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.grade + ': ' + entry.percentage + '%'}
                  outerRadius={100}
                  innerRadius={50}
                  fill="#8884d8"
                  dataKey="count"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={2}
                >
                  {statisticalReports.qualityMetrics.map((entry, index) => (
                    <Cell key={'cell-' + index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Comparison Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Vehicles vs Production Comparison */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #10b981)' }} />
              Vehicles & Production
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statisticalReports.materialStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
                <XAxis dataKey="material" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="vehicles" fill="#3b82f6" name="Vehicles" radius={[8, 8, 0, 0]} />
                <Bar dataKey="totalTons" fill="#10b981" name="Total Tons" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Average Weight Comparison */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #f59e0b, #d97706)' }} />
              Average Weight per Material
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statisticalReports.materialStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb50" />
                <XAxis dataKey="material" stroke="#9ca3af" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="avgWeight" fill="#f59e0b" name="Avg Weight (T)" radius={[8, 8, 0, 0]}>
                  {statisticalReports.materialStats.map((_, index) => (
                    <Cell key={'cell-' + index} fill={['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'][index % 4]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Material-Wise Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6)' }} />
              Material-Wise Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full premium-table">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Material</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Total Tons</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Vehicles</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Avg Weight</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {statisticalReports.materialStats.map((stat, index) => (
                    <tr key={index} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="px-4 py-3 font-bold text-gray-900">{stat.material}</td>
                      <td className="px-4 py-3 text-gray-700 font-medium">{stat.totalTons}</td>
                      <td className="px-4 py-3 text-gray-700 font-medium">{stat.vehicles}</td>
                      <td className="px-4 py-3 text-gray-700 font-medium">{stat.avgWeight}T</td>
                      <td className="px-4 py-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold badge-glow-green"
                          style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                          {stat.quality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Production:</span>
                <span className="font-bold text-gray-900">
                  {statisticalReports.materialStats.reduce((sum, s) => sum + s.totalTons, 0)} tons
                </span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">Total Revenue:</span>
                <span className="font-bold text-gradient">₹12.48L</span>
              </div>
            </div>
          </div>

          {/* Quality Distribution */}
          <div className="glass-card rounded-2xl p-6 card-hover-lift">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e, #10b981)' }} />
              Quality Distribution
            </h3>
            <div className="space-y-6">
              {statisticalReports.qualityMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ background: metric.color }} />
                      <span className="font-bold text-gray-900">{metric.grade}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">{metric.count}</span>
                      <span className="text-sm text-gray-400 ml-2">({metric.percentage}%)</span>
                    </div>
                  </div>
                  <div className="rounded-full h-3 overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: metric.percentage + '%', background: `linear-gradient(90deg, ${metric.color}, ${metric.color}90)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(34, 197, 94, 0.06)' }}>
                  <p className="text-2xl font-bold" style={{ color: '#16a34a' }}>
                    {statisticalReports.qualityMetrics[0].percentage}%
                  </p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#16a34a' }}>Premium Quality</p>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.06)' }}>
                  <p className="text-2xl font-bold" style={{ color: '#2563eb' }}>94%</p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#2563eb' }}>Overall Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticalReports.operationalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index}
                className="glass-card rounded-2xl p-6 card-hover-lift"
                style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">{stat.metric}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  {stat.unit && <span className="text-sm text-gray-400 font-medium">{stat.unit}</span>}
                </div>
                <p className="text-xs text-gray-400 font-medium">{stat.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
