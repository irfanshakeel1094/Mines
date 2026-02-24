import { UserCog, UserPlus, Shield, DollarSign, Users, Check, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Employees() {
  const { t } = useLanguage();
  const employees = [
    { id: 'EMP-001', name: 'Rajesh Kumar', role: 'Admin', department: 'Management', phone: '+91 9876543210', email: 'rajesh@smartmines.com', joinDate: 'Jan 2024', status: 'Active' },
    { id: 'EMP-002', name: 'Priya Sharma', role: 'Operator', department: 'Operations', phone: '+91 9876543211', email: 'priya@smartmines.com', joinDate: 'Feb 2024', status: 'Active' },
    { id: 'EMP-003', name: 'Amit Patel', role: 'Security', department: 'Security', phone: '+91 9876543212', email: 'amit@smartmines.com', joinDate: 'Mar 2024', status: 'Active' },
    { id: 'EMP-004', name: 'Sunita Reddy', role: 'Accounts', department: 'Finance', phone: '+91 9876543213', email: 'sunita@smartmines.com', joinDate: 'Jan 2024', status: 'Active' },
    { id: 'EMP-005', name: 'Vikram Singh', role: 'Operator', department: 'Operations', phone: '+91 9876543214', email: 'vikram@smartmines.com', joinDate: 'Apr 2024', status: 'Active' },
  ];

  const rolePermissions = {
    Admin: { permissions: ['Full system access', 'User management', 'All reports', 'System settings', 'Data export'], color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
    Operator: { permissions: ['Vehicle entry', 'Weighbridge', 'AI detection', 'Basic reports'], color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    Security: { permissions: ['Entry/exit verification', 'NFC scanning', 'Alert monitoring'], color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    Accounts: { permissions: ['Billing', 'Invoice generation', 'Payment tracking', 'Financial reports'], color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  };

  const roleColorMap = {
    Admin: { bg: 'rgba(139, 92, 246, 0.1)', text: '#7c3aed', glow: 'badge-glow-purple' },
    Operator: { bg: 'rgba(59, 130, 246, 0.1)', text: '#2563eb', glow: 'badge-glow-blue' },
    Security: { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669', glow: 'badge-glow-green' },
    Accounts: { bg: 'rgba(245, 158, 11, 0.1)', text: '#d97706', glow: 'badge-glow-orange' },
  };

  const summaryCards = [
    { title: t.totalEmployees, value: employees.length, icon: Users, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { title: t.operators, value: employees.filter(e => e.role === 'Operator').length, icon: UserCog, color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { title: t.departments, value: 4, icon: DollarSign, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.employeeManagement}</h1>
            <p className="text-gray-500 mt-1">{t.manageStaffRoles}</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)' }}>
            <UserPlus className="w-5 h-5" />
            {t.addEmployee}
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

      {/* Role Permissions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Object.entries(rolePermissions).map(([role, data], i) => (
          <div key={role} className="glass-card rounded-2xl p-6 card-hover-lift"
            style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: data.gradient }}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{role}</h3>
            </div>
            <ul className="space-y-2.5">
              {data.permissions.map((permission, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: `${data.color}15` }}>
                    <Check className="w-3 h-3" style={{ color: data.color }} />
                  </div>
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Employee List */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.allEmployees || 'All Employees'}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full premium-table">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.name}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.role}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.department}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.contact}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.joinDate}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.status}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {employees.map((employee) => {
                const rc = roleColorMap[employee.role] || roleColorMap.Operator;
                return (
                  <tr key={employee.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ background: rolePermissions[employee.role]?.gradient || 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{employee.name}</p>
                          <p className="text-xs text-gray-400">{employee.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${rc.glow}`}
                        style={{ background: rc.bg, color: rc.text }}>
                        {employee.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{employee.department}</td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600 text-sm">{employee.phone}</p>
                      <p className="text-gray-400 text-xs">{employee.email}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{employee.joinDate}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold badge-glow-green"
                        style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-1 font-medium text-sm transition-colors"
                        style={{ color: '#6366f1' }}>
                        {t.view} <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
