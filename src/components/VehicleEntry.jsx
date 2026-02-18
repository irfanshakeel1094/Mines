import { useState } from 'react';
import { Radio, Truck, CheckCircle, XCircle, AlertCircle, Scan } from 'lucide-react';

export function VehicleEntry() {
  const [nfcStatus, setNfcStatus] = useState('idle');
  const [vehicleData, setVehicleData] = useState(null);
  const [isManualEntry, setIsManualEntry] = useState(false);

  const vehicles = [
    { id: 'TRK-001', driver: 'John Smith', driverPhone: '+91 9876543210', company: 'ABC Transport Ltd', nfcTag: 'NFC-A1B2C3', status: 'Active', lastEntry: '2 hours ago' },
    { id: 'TRK-045', driver: 'Sarah Johnson', driverPhone: '+91 9876543211', company: 'XYZ Logistics', nfcTag: 'NFC-D4E5F6', status: 'Active', lastEntry: '30 mins ago' },
    { id: 'TRK-023', driver: 'Mike Wilson', driverPhone: '+91 9876543212', company: 'Quick Haul Services', nfcTag: 'NFC-G7H8I9', status: 'Active', lastEntry: '1 hour ago' },
    { id: 'TRK-087', driver: 'Emily Davis', driverPhone: '+91 9876543213', company: 'Express Freight Co', nfcTag: 'NFC-J1K2L3', status: 'Active', lastEntry: '45 mins ago' },
  ];

  const recentEntries = [
    { id: 'TRK-001', driver: 'John Smith', time: '10:45 AM', type: 'NFC', status: 'In Mine', material: 'Coal' },
    { id: 'TRK-045', driver: 'Sarah Johnson', time: '10:32 AM', type: 'NFC', status: 'Loading', material: 'Iron Ore' },
    { id: 'TRK-023', driver: 'Mike Wilson', time: '10:18 AM', type: 'Manual', status: 'Weighing', material: 'Limestone' },
    { id: 'TRK-087', driver: 'Emily Davis', time: '10:05 AM', type: 'NFC', status: 'Exited', material: 'Coal' },
  ];

  const handleNFCScan = () => {
    setNfcStatus('scanning');
    setVehicleData(null);

    setTimeout(() => {
      const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
      setVehicleData(randomVehicle);
      setNfcStatus('success');
    }, 2000);
  };

  const handleManualEntry = () => {
    setIsManualEntry(true);
    setNfcStatus('idle');
    setVehicleData(null);
  };

  const handleAuthorizeEntry = () => {
    alert('Vehicle entry authorized! Proceeding to loading area.');
    setNfcStatus('idle');
    setVehicleData(null);
    setIsManualEntry(false);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">NFC Vehicle Entry System</h1>
        <p className="text-gray-600 mt-1">Automated vehicle detection and entry management</p>
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
        {/* NFC Scanner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">NFC Entry Scanner</h2>
          
          {/* Scanner Display */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg aspect-video mb-6 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {nfcStatus === 'scanning' ? (
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-ping" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Radio className="w-16 h-16 text-blue-400 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-white font-medium text-lg">Scanning NFC Tag...</p>
                  <p className="text-gray-400 text-sm mt-1">Please hold tag near reader</p>
                </div>
              ) : nfcStatus === 'success' && vehicleData ? (
                <div className="text-center p-6 w-full">
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-white mb-4">Vehicle Detected</h3>
                  <div className="bg-black/30 rounded-lg p-6 space-y-3 text-left">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs">Vehicle ID</p>
                        <p className="text-white font-bold text-lg">{vehicleData.id}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">NFC Tag</p>
                        <p className="text-white font-medium">{vehicleData.nfcTag}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Driver</p>
                        <p className="text-white font-medium">{vehicleData.driver}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Phone</p>
                        <p className="text-white font-medium">{vehicleData.driverPhone}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-600">
                      <p className="text-gray-400 text-xs">Company</p>
                      <p className="text-white font-medium">{vehicleData.company}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Radio className="w-20 h-20 text-gray-600 mb-4 mx-auto" />
                  <p className="text-gray-400 text-lg">NFC Reader Ready</p>
                  <p className="text-gray-500 text-sm mt-1">Tap vehicle NFC tag to scan</p>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-3">
            {vehicleData ? (
              <>
                <button
                  onClick={handleAuthorizeEntry}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Authorize Entry
                </button>
                <button
                  onClick={() => {
                    setNfcStatus('idle');
                    setVehicleData(null);
                  }}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleNFCScan}
                  disabled={nfcStatus === 'scanning'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Scan className="w-5 h-5" />
                  {nfcStatus === 'scanning' ? 'Scanning...' : 'Scan NFC Tag'}
                </button>
                <button
                  onClick={handleManualEntry}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Manual Entry
                </button>
              </>
            )}
          </div>

          {/* Security Features */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-blue-900 font-medium text-sm">Security Features</p>
                <ul className="text-blue-700 text-xs mt-1 space-y-1">
                  <li>• Unique NFC tag per vehicle</li>
                  <li>• Prevents unauthorized entry</li>
                  <li>• Auto-fetch vehicle details</li>
                  <li>• Manual fallback option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Entry Form */}
        {isManualEntry ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 self-start">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Manual Entry Form</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Vehicle ID</label>
                <input
                  type="text"
                  placeholder="TRK-XXX"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Customer Type</label>
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Favourite</option>
                  <option>Normal</option>
                </select>
              </div>
              <button
                onClick={handleAuthorizeEntry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg font-medium transition-colors"
              >
                Authorize Entry
              </button>
              <button
                onClick={() => setIsManualEntry(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 text-sm rounded-lg font-medium transition-colors"
              >
                Back to NFC Scan
              </button>
            </div>
          </div>
        ) : (
          /* Recent Entries */
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
                      {entry.type === 'NFC' ? (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium flex items-center gap-1">
                          <Radio className="w-3 h-3" />
                          NFC
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          Manual
                        </span>
                      )}
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
        )}
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
