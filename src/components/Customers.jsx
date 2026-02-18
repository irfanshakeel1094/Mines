import { Users, UserPlus, Building2, Phone, Mail } from 'lucide-react';

export function Customers() {
  const customers = [
    { id: 'CUST-001', name: 'ABC Transport Ltd', contact: 'Rajesh Kumar', phone: '+91 9876543210', email: 'rajesh@abctransport.com', totalOrders: 145, totalValue: '₹45,23,000', status: 'Active' },
    { id: 'CUST-002', name: 'XYZ Logistics', contact: 'Priya Sharma', phone: '+91 9876543211', email: 'priya@xyzlogistics.com', totalOrders: 98, totalValue: '₹32,15,000', status: 'Active' },
    { id: 'CUST-003', name: 'Quick Haul Services', contact: 'Amit Patel', phone: '+91 9876543212', email: 'amit@quickhaul.com', totalOrders: 76, totalValue: '₹28,90,000', status: 'Active' },
    { id: 'CUST-004', name: 'Express Freight Co', contact: 'Sunita Reddy', phone: '+91 9876543213', email: 'sunita@expressfreight.com', totalOrders: 112, totalValue: '₹41,50,000', status: 'Active' },
    { id: 'CUST-005', name: 'Metro Mining Supply', contact: 'Vikram Singh', phone: '+91 9876543214', email: 'vikram@metromining.com', totalOrders: 89, totalValue: '₹35,75,000', status: 'Active' },
  ];

  const recentActivity = [
    { customer: 'ABC Transport Ltd', action: 'New order placed', material: 'Coal Grade A', amount: '₹2,45,000', time: '2 hours ago' },
    { customer: 'XYZ Logistics', action: 'Payment received', material: 'Iron Ore', amount: '₹3,15,000', time: '4 hours ago' },
    { customer: 'Quick Haul Services', action: 'Delivery completed', material: 'Limestone', amount: '₹1,85,000', time: '6 hours ago' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
            <p className="text-gray-600 mt-1">Manage customer accounts and relationships</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-5 h-5" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Total Customers</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{customers.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Total Orders</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{customers.reduce((sum, c) => sum + c.totalOrders, 0)}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Total Revenue</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">₹1.8Cr</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{activity.customer}</p>
                <p className="text-sm text-gray-600">{activity.action} • {activity.material}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{activity.amount}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Customers</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{customer.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{customer.contact}</td>
                  <td className="px-6 py-4 text-gray-700">{customer.phone}</td>
                  <td className="px-6 py-4 text-gray-700">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-700">{customer.totalOrders}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{customer.totalValue}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
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
