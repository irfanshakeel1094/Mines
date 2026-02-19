import { useState } from 'react';
import { Truck } from 'lucide-react';

export function VehicleEntry() {
  const [isManualEntry, setIsManualEntry] = useState(false);

  const vehicles = [
    { id: 'TRK-001', driver: 'John Smith', driverPhone: '+91 9876543210', company: 'ABC Transport Ltd', nfcTag: 'NFC-A1B2C3', status: 'Active', lastEntry: '2 hours ago' },
    { id: 'TRK-045', driver: 'Sarah Johnson', driverPhone: '+91 9876543211', company: 'XYZ Logistics', nfcTag: 'NFC-D4E5F6', status: 'Active', lastEntry: '30 mins ago' },
    { id: 'TRK-023', driver: 'Mike Wilson', driverPhone: '+91 9876543212', company: 'Quick Haul Services', nfcTag: 'NFC-G7H8I9', status: 'Active', lastEntry: '1 hour ago' },
    { id: 'TRK-087', driver: 'Emily Davis', driverPhone: '+91 9876543213', company: 'Express Freight Co', nfcTag: 'NFC-J1K2L3', status: 'Active', lastEntry: '45 mins ago' },
  ];

  const recentEntries = [
    { id: 'TRK-001', driver: 'John Smith', time: '10:45 AM', type: 'Manual', status: 'In Mine', material: 'Coal' },
    { id: 'TRK-045', driver: 'Sarah Johnson', time: '10:32 AM', type: 'Manual', status: 'Loading', material: 'Iron Ore' },
    { id: 'TRK-023', driver: 'Mike Wilson', time: '10:18 AM', type: 'Manual', status: 'Weighing', material: 'Limestone' },
    { id: 'TRK-087', driver: 'Emily Davis', time: '10:05 AM', type: 'Manual', status: 'Exited', material: 'Coal' },
  ];

  const handleManualEntry = () => {
    setIsManualEntry(true);
  };

  const handleAuthorizeEntry = () => {
    alert('Vehicle entry authorized! Proceeding to loading area.');
    setIsManualEntry(false);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Vehicle Entry System</h1>
        <p className="text-gray-600 mt-1">Manual vehicle entry and management</p>
      </div>

      {/* Workflow Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">End-to-End Workflow</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { num: '1', label: 'Vehicle Entry', color: 'bg-blue-500' },
            { num: '2', label: 'Loading', color: 'bg-green-500' },
            { num: '3', label: 'AI Detection', color: 'bg-purple-500' },
            { num: '4', label: 'Weighbridge', color: 'bg-orange-500' },
            { num: '5', label: 'Billing', color: 'bg-pink-500' },
            { num: '6', label: 'Exit', color: 'bg-red-500' }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2`}>
                {step.num}
              </div>
              <p className="text-sm font-medium text-gray-700">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Manual Entry Form */}
        {!isManualEntry && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-center">
            <div className="text-center py-12">
              <Truck className="w-20 h-20 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Manual Vehicle Entry</h2>
              <p className="text-gray-600 mb-6">Click below to add a new vehicle entry</p>
              <button
                onClick={handleManualEntry}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Start Manual Entry
              </button>
            </div>
          </div>
        )}

        {isManualEntry && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Manual Entry Form</h2>
            <div className="space-y-4 flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
                <input
                  type="text"
                  placeholder="TRK-XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Favourite</option>
                  <option>Normal</option>
                </select>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleAuthorizeEntry}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Authorize Entry
                </button>
              </div>
              <button
                onClick={() => setIsManualEntry(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>

              {/* Quick Select Regular Customers */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quick Select Regular Customer</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50">
                  <option value="">Select a registered vehicle...</option>
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.id} - {vehicle.driver} ({vehicle.company})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-2">Select from registered vehicles to auto-fill the form</p>
              </div>
            </div>
          </div>
        )}

        {/* Recent Entries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Entry Activity</h2>
          <div className="space-y-3">
            {recentEntries.map((entry, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{entry.id}</p>
                      <p className="text-sm text-gray-600">{entry.driver}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      Manual
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">{entry.time}</span>
                    <span className="text-gray-600">• {entry.material}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    entry.status === 'In Mine' ? 'bg-green-100 text-green-700' :
                    entry.status === 'Loading' ? 'bg-blue-100 text-blue-700' :
                    entry.status === 'Weighing' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {entry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registered Vehicles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Registered Vehicles</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NFC Tag</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Entry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{vehicle.id}</td>
                  <td className="px-6 py-4 text-gray-700">{vehicle.driver}</td>
                  <td className="px-6 py-4 text-gray-700">{vehicle.driverPhone}</td>
                  <td className="px-6 py-4 text-gray-700">{vehicle.company}</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-700">{vehicle.nfcTag}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{vehicle.lastEntry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
