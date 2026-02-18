import { useState } from 'react';
import { Scale, TrendingUp, Truck, Play, CheckCircle } from 'lucide-react';

export function Weighbridge() {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [isWeighing, setIsWeighing] = useState(false);
  const [weighingComplete, setWeighingComplete] = useState(false);

  const todayStats = [
    { label: 'Vehicles Today', value: '87', icon: Truck, color: 'bg-blue-500' },
    { label: 'Total Weight', value: '2,845T', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Avg Weight', value: '32.7T', icon: Scale, color: 'bg-purple-500' },
  ];

  const recentWeighings = [
    { id: 'TRK-001', driver: 'John Smith', material: 'Coal', tareWeight: 16.5, grossWeight: 45.0, netWeight: 28.5, time: '10:45 AM', status: 'Complete' },
    { id: 'TRK-045', driver: 'Sarah Johnson', material: 'Iron Ore', tareWeight: 14.8, grossWeight: 60.0, netWeight: 45.2, time: '10:32 AM', status: 'Complete' },
    { id: 'TRK-023', driver: 'Mike Wilson', material: 'Limestone', tareWeight: 15.9, grossWeight: 48.0, netWeight: 32.1, time: '10:18 AM', status: 'Complete' },
    { id: 'TRK-087', driver: 'Emily Davis', material: 'Coal', tareWeight: 16.2, grossWeight: 46.0, netWeight: 29.8, time: '10:05 AM', status: 'Complete' },
  ];

  const handleStartWeighing = () => {
    setIsWeighing(true);
    setWeighingComplete(false);
    setCurrentWeight(0);

    // Simulate weight increase
    let weight = 0;
    const targetWeight = 25000 + Math.random() * 20000; // Random weight between 25-45 tons (in kg)
    const interval = setInterval(() => {
      weight += 1000 + Math.random() * 2000;
      if (weight >= targetWeight) {
        weight = targetWeight;
        setCurrentWeight(weight);
        setIsWeighing(false);
        setWeighingComplete(true);
        clearInterval(interval);
      } else {
        setCurrentWeight(weight);
      }
    }, 100);
  };

  const formatWeight = (kg) => {
    return (kg / 1000).toFixed(2);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Weighbridge Management</h1>
        <p className="text-gray-600 mt-1">Real-time vehicle weighing and tracking</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {todayStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Weighing */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Weighbridge</h2>
          
          {/* Weight Display */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-12 h-12 text-blue-400" />
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2 font-mono">
                {formatWeight(currentWeight)}
              </div>
              <div className="text-2xl text-gray-400">TONS</div>
              {isWeighing && (
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-300 animate-pulse" style={{ width: '75%' }} />
                  </div>
                </div>
              )}
              {weighingComplete && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Weighing Complete</span>
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Details Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
              <input
                type="text"
                placeholder="TRK-XXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Driver Name</label>
              <input
                type="text"
                placeholder="Enter driver name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Material Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Coal Grade A</option>
                <option>Coal Grade B</option>
                <option>Iron Ore</option>
                <option>Limestone</option>
                <option>Copper Ore</option>
              </select>
            </div>
            <button
              onClick={handleStartWeighing}
              disabled={isWeighing}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              {isWeighing ? 'Weighing...' : 'Start Weighing'}
            </button>
            {weighingComplete && (
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                Save Record
              </button>
            )}
          </div>
        </div>

        {/* Recent Weighings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Weighings</h2>
          <div className="space-y-4">
            {recentWeighings.map((record) => (
              <div key={record.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{record.id}</p>
                      <p className="text-sm text-gray-600">{record.driver}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {record.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">Material</p>
                    <p className="text-gray-900 font-medium">{record.material}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Tare</p>
                    <p className="text-gray-900 font-medium">{record.tareWeight}T</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Gross</p>
                    <p className="text-gray-900 font-medium">{record.grossWeight}T</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Net</p>
                    <p className="text-blue-600 font-bold">{record.netWeight}T</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">{record.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
