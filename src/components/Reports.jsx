import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Calendar, FileText } from 'lucide-react';

export function Reports() {
  const productionData = [
    { month: 'Jan', coal: 2400, iron: 1800, limestone: 2200 },
    { month: 'Feb', coal: 2100, iron: 2100, limestone: 2400 },
    { month: 'Mar', coal: 2800, iron: 1900, limestone: 2100 },
    { month: 'Apr', coal: 2600, iron: 2300, limestone: 2500 },
    { month: 'May', coal: 3100, iron: 2200, limestone: 2300 },
    { month: 'Jun', coal: 2900, iron: 2600, limestone: 2700 },
  ];

  const detectionAccuracy = [
    { day: 'Mon', accuracy: 92 },
    { day: 'Tue', accuracy: 89 },
    { day: 'Wed', accuracy: 94 },
    { day: 'Thu', accuracy: 91 },
    { day: 'Fri', accuracy: 93 },
    { day: 'Sat', accuracy: 90 },
    { day: 'Sun', accuracy: 88 },
  ];

  const materialDistribution = [
    { name: 'Coal', value: 45, color: '#3b82f6' },
    { name: 'Iron Ore', value: 25, color: '#ef4444' },
    { name: 'Limestone', value: 15, color: '#9ca3af' },
    { name: 'Copper Ore', value: 10, color: '#f59e0b' },
    { name: 'Others', value: 5, color: '#8b5cf6' },
  ];

  const weighbridgeData = [
    { time: '6 AM', vehicles: 12 },
    { time: '9 AM', vehicles: 28 },
    { time: '12 PM', vehicles: 35 },
    { time: '3 PM', vehicles: 42 },
    { time: '6 PM', vehicles: 31 },
    { time: '9 PM', vehicles: 18 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-1">Total Production</p>
          <p className="text-3xl font-bold text-gray-900">14,520</p>
          <p className="text-sm text-gray-500 mt-1">tons this month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-1">AI Accuracy</p>
          <p className="text-3xl font-bold text-gray-900">91.2%</p>
          <p className="text-sm text-green-600 mt-1">+2.3% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-1">Vehicles Processed</p>
          <p className="text-3xl font-bold text-gray-900">2,341</p>
          <p className="text-sm text-gray-500 mt-1">this month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-1">Efficiency Rate</p>
          <p className="text-3xl font-bold text-gray-900">94.5%</p>
          <p className="text-sm text-green-600 mt-1">+1.8% improvement</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Production by Material */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Production by Material</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="coal" fill="#3b82f6" name="Coal" />
              <Bar dataKey="iron" fill="#10b981" name="Iron Ore" />
              <Bar dataKey="copper" fill="#f59e0b" name="Copper" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Material Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Material Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={materialDistribution}
                cx="50%"
                cy="50%"
                label={(entry) => `${entry.name} ${(entry.value / materialDistribution.reduce((sum, item) => sum + item.value, 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {materialDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* AI Detection Accuracy */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Detection Accuracy</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={detectionAccuracy}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" domain={[80, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Accuracy %"
                dot={{ fill: '#8b5cf6', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weighbridge Traffic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weighbridge Traffic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weighbridgeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="vehicles" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Vehicles"
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generated Reports</h2>
        <div className="space-y-3">
          {[
            { name: 'Monthly Production Report - June 2026', date: 'Jun 30, 2026', size: '2.4 MB' },
            { name: 'Weighbridge Summary - Week 24', date: 'Jun 28, 2026', size: '1.8 MB' },
            { name: 'AI Detection Analysis - Q2 2026', date: 'Jun 25, 2026', size: '3.1 MB' },
            { name: 'Inventory Report - June 2026', date: 'Jun 20, 2026', size: '1.5 MB' },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-600">{report.date} • {report.size}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
