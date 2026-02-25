import { Users, UserPlus, Building2, Phone, Mail, ArrowUpRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Customers() {
  const { t } = useLanguage();
  const customers = [
    { id: 'CUST-001', name: 'ABC Transport Ltd', contact: 'Rajesh Kumar', phone: '+91 9876543210', email: 'rajesh@abctransport.com', totalOrders: 145, totalValue: '₹45,23,000', status: 'Active' },
    { id: 'CUST-002', name: 'XYZ Logistics', contact: 'Priya Sharma', phone: '+91 9876543211', email: 'priya@xyzlogistics.com', totalOrders: 98, totalValue: '₹32,15,000', status: 'Active' },
    { id: 'CUST-003', name: 'Quick Haul Services', contact: 'Amit Patel', phone: '+91 9876543212', email: 'amit@quickhaul.com', totalOrders: 76, totalValue: '₹28,90,000', status: 'Active' },
    { id: 'CUST-004', name: 'Express Freight Co', contact: 'Sunita Reddy', phone: '+91 9876543213', email: 'sunita@expressfreight.com', totalOrders: 112, totalValue: '₹41,50,000', status: 'Active' },
    { id: 'CUST-005', name: 'Metro Mining Supply', contact: 'Vikram Singh', phone: '+91 9876543214', email: 'vikram@metromining.com', totalOrders: 89, totalValue: '₹35,75,000', status: 'Active' },
  ];

  const recentActivity = [
    { customer: 'ABC Transport Ltd', action: t.newOrderPlaced, material: 'Coal Grade A', amount: '₹2,45,000', time: '2 hours ago' },
    { customer: 'XYZ Logistics', action: t.paymentReceived, material: 'Iron Ore', amount: '₹3,15,000', time: '4 hours ago' },
    { customer: 'Quick Haul Services', action: t.deliveryCompleted, material: 'Limestone', amount: '₹1,85,000', time: '6 hours ago' },
  ];

  const summaryCards = [
    { title: t.totalCustomers, value: customers.length, icon: Users, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { title: t.totalOrders, value: customers.reduce((sum, c) => sum + c.totalOrders, 0), icon: Phone, color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)' },
    { title: t.totalRevenue, value: '₹1.8Cr', icon: TrendingUp, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.customerManagement}</h1>
            <p className="text-gray-500 mt-1">{t.manageCustomerAccounts}</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)' }}>
            <UserPlus className="w-5 h-5" />
            {t.addCustomer}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="glass-card rounded-2xl p-6 card-hover-lift"
              style={{ borderTop: `3px solid ${card.color}`, animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: card.gradient }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6)' }} />
          {t.recentActivity}
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:scale-[1.005]"
              style={{ background: 'rgba(99, 102, 241, 0.03)', border: '1px solid rgba(99, 102, 241, 0.08)' }}>
              <div>
                <p className="font-bold text-gray-900">{activity.customer}</p>
                <p className="text-sm text-gray-500">{activity.action} • {activity.material}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{activity.amount}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer List */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.allCustomers}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full premium-table">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.customerId}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.company}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.contact}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.phone}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.orders}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.value}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.status}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{customer.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                        <Building2 className="w-5 h-5" style={{ color: '#6366f1' }} />
                      </div>
                      <span className="font-medium text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{customer.contact}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.phone}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{customer.totalOrders}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{customer.totalValue}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold badge-glow-green"
                      style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                      {t.active}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 font-medium text-sm transition-colors"
                      style={{ color: '#6366f1' }}>
                      {t.view} <ArrowUpRight className="w-3.5 h-3.5" />
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
