import { Package, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

export function Inventory() {
  const inventory = [
    { id: 1, material: 'Coal Grade A', quantity: 2450, unit: 'tons', status: 'High', trend: 'up', change: '+12%', location: 'Warehouse A' },
    { id: 2, material: 'Coal Grade B', quantity: 1820, unit: 'tons', status: 'Medium', trend: 'down', change: '-5%', location: 'Warehouse A' },
    { id: 3, material: 'Iron Ore', quantity: 890, unit: 'tons', status: 'Low', trend: 'down', change: '-18%', location: 'Warehouse B' },
    { id: 4, material: 'Limestone', quantity: 3150, unit: 'tons', status: 'High', trend: 'up', change: '+8%', location: 'Warehouse C' },
    { id: 5, material: 'Copper Ore', quantity: 650, unit: 'tons', status: 'Low', trend: 'down', change: '-12%', location: 'Warehouse B' },
    { id: 6, material: 'Bauxite', quantity: 1950, unit: 'tons', status: 'Medium', trend: 'up', change: '+6%', location: 'Warehouse D' },
  ];

  const alerts = [
    { id: 1, message: 'Iron Ore stock below minimum threshold', severity: 'high', time: '2 hours ago' },
    { id: 2, message: 'Copper Ore requires restocking', severity: 'high', time: '5 hours ago' },
    { id: 3, message: 'Coal Grade B trending downward', severity: 'medium', time: '1 day ago' },
  ];

  const totalStock = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter(item => item.status === 'Low').length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
        <p className="text-gray-600 mt-1">Real-time stock levels and material tracking</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Stock</p>
              <p className="text-3xl font-bold text-gray-900">{totalStock.toLocaleString()}</p>
              <p className="text-sm text-gray-500">tons</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Material Types</p>
              <p className="text-3xl font-bold text-gray-900">{inventory.length}</p>
              <p className="text-sm text-gray-500">active items</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Low Stock Alerts</p>
              <p className="text-3xl font-bold text-gray-900">{lowStockItems}</p>
              <p className="text-sm text-gray-500">items need attention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-orange-900">Stock Alerts</h2>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Current Stock Levels</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-semibold text-gray-900">{item.material}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{item.quantity.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{item.unit}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'High' ? 'bg-green-100 text-green-700' :
                      item.status === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm font-medium ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
