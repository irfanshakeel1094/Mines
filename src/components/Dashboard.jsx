import { TrendingUp, TrendingDown, Truck, Package, AlertCircle, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: 'Today\'s Production',
      value: '1,248',
      unit: 'tons',
      change: '+12.5%',
      trend: 'up',
      icon: Package,
      color: 'bg-blue-500'},
    {
      label: 'Vehicles Weighed',
      value: '87',
      unit: 'trucks',
      change: '+8.3%',
      trend: 'up',
      icon: Truck,
      color: 'bg-green-500'},
    {
      label: 'AI Detections',
      value: '342',
      unit: 'scans',
      change: '+15.2%',
      trend: 'up',
      icon: CheckCircle,
      color: 'bg-purple-500'},
    {
      label: 'Pending Alerts',
      value: '3',
      unit: 'items',
      change: '-2',
      trend: 'down',
      icon: AlertCircle,
      color: 'bg-orange-500'},
  ];

  const recentActivity = [
    { id: 1, type: 'weighbridge', message: 'Truck TRK-001 weighed out: 28.5 tons', time: '2 mins ago', status: 'success' },
    { id: 2, type: 'detection', message: 'Coal Grade A detected - 95% confidence', time: '5 mins ago', status: 'success' },
    { id: 3, type: 'weighbridge', message: 'Truck TRK-045 weighed in: 45.2 tons', time: '8 mins ago', status: 'success' },
    { id: 4, type: 'alert', message: 'Low quality material detected in Batch #234', time: '12 mins ago', status: 'warning' },
    { id: 5, type: 'detection', message: 'Iron Ore detected - 89% confidence', time: '15 mins ago', status: 'success' },
  ];

  const activeVehicles = [
    { id: 'TRK-001', driver: 'John Smith', material: 'Coal', weight: '28.5T', status: 'In Transit' },
    { id: 'TRK-045', driver: 'Sarah Johnson', material: 'Iron Ore', weight: '45.2T', status: 'Loading' },
    { id: 'TRK-023', driver: 'Mike Wilson', material: 'Limestone', weight: '32.1T', status: 'Weighing' },
    { id: 'TRK-087', driver: 'Emily Davis', material: 'Coal', weight: '29.8T', status: 'Unloading' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Real-time mining operations overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-600" />
                  )}
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <span className="text-gray-500 text-sm">{stat.unit}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' : activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Vehicles */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Vehicles</h2>
          <div className="space-y-3">
            {activeVehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{vehicle.id}</p>
                    <p className="text-sm text-gray-600">{vehicle.driver}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{vehicle.weight}</p>
                  <p className="text-xs text-gray-600">{vehicle.material}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    vehicle.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                    vehicle.status === 'Loading' ? 'bg-green-100 text-green-700' :
                    vehicle.status === 'Weighing' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
