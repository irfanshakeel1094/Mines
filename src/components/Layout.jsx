import { Outlet, NavLink, useNavigate } from 'react-router';
import { LayoutDashboard, Camera, Scale, Package, BarChart3, Mountain, Radio, Users, UserCog, FileText, Network, Globe, LogOut } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState(() => localStorage.getItem('userRole') || 'admin');
  const [language, setLanguage] = useState('en');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/');
  };

  const translations = {
    en: {
      title: 'Smart Mines ERP',
      subtitle: 'AI & Automation',
      dashboard: 'Dashboard',
      vehicleEntry: 'Vehicle Entry',
      aiDetection: 'AI Detection',
      weighbridge: 'Weighbridge',
      inventory: 'Inventory',
      customers: 'Customers',
      employees: 'Employees',
      billing: 'Billing',
      reports: 'Reports',
      system: 'System',
      role: 'Role'},
    hi: {
      title: 'स्मार्ट माइन्स ERP',
      subtitle: 'AI और स्वचालन',
      dashboard: 'डैशबोर्ड',
      vehicleEntry: 'वाहन प्रवेश',
      aiDetection: 'AI पहचान',
      weighbridge: 'वेब्रिज',
      inventory: 'इन्वेंटरी',
      customers: 'ग्राहक',
      employees: 'कर्मचारी',
      billing: 'बिलिंग',
      reports: 'रिपोर्ट',
      system: 'सिस्टम',
      role: 'भूमिका'},
    te: {
      title: 'స్మార్ట్ మైన్స్ ERP',
      subtitle: 'AI & ఆటోమేషన్',
      dashboard: 'డాష్‌బోర్డ్',
      vehicleEntry: 'వాహన ప్రవేశం',
      aiDetection: 'AI గుర్తింపు',
      weighbridge: 'వెయిబ్రిడ్జ్',
      inventory: 'ఇన్వెంటరీ',
      customers: 'కస్టమర్లు',
      employees: 'ఉద్యోగులు',
      billing: 'బిల్లింగ్',
      reports: 'రిపోర్ట్లు',
      system: 'సిస్టమ్',
      role: 'పాత్ర'}};

  const t = translations[language];

  const roleColors = {
    admin: 'bg-purple-100 text-purple-700',
    operator: 'bg-blue-100 text-blue-700',
    security: 'bg-green-100 text-green-700',
    accounts: 'bg-orange-100 text-orange-700'};

  const navItems = [
    { path: '/dashboard', label: t.dashboard, icon: LayoutDashboard, roles: ['admin', 'operator', 'security', 'accounts'] },
    { path: '/dashboard/vehicle-entry', label: t.vehicleEntry, icon: Radio, roles: ['admin', 'operator', 'security'] },
    { path: '/dashboard/detection', label: t.aiDetection, icon: Camera, roles: ['admin', 'operator'] },
    { path: '/dashboard/weighbridge', label: t.weighbridge, icon: Scale, roles: ['admin', 'operator'] },
    { path: '/dashboard/inventory', label: t.inventory, icon: Package, roles: ['admin', 'operator', 'accounts'] },
    { path: '/dashboard/customers', label: t.customers, icon: Users, roles: ['admin', 'accounts'] },
    { path: '/dashboard/employees', label: t.employees, icon: UserCog, roles: ['admin'] },
    { path: '/dashboard/billing', label: t.billing, icon: FileText, roles: ['admin', 'operator', 'accounts'] },
    { path: '/dashboard/reports', label: t.reports, icon: BarChart3, roles: ['admin', 'accounts'] },
    { path: '/dashboard/system', label: t.system, icon: Network, roles: ['admin'] },
  ];

  const filteredNavItems = navItems.filter(item => item.roles.includes(currentRole));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Mountain className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="font-semibold text-lg">{t.title}</h1>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/dashboard'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-700 space-y-3">
          {/* Language Selector */}
          <div className="px-4 py-2 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400">Language</span>
            </div>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-slate-700 text-white text-sm px-2 py-1 rounded"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>

          {/* Role Selector */}
          <div className="px-4 py-2 bg-slate-800 rounded-lg">
            <p className="text-xs text-slate-400 mb-2">{t.role}</p>
            <select 
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className={`w-full text-sm px-2 py-1 rounded font-medium ${roleColors[currentRole]}`}
            >
              <option value="admin">Admin</option>
              <option value="operator">Operator</option>
              <option value="security">Security</option>
              <option value="accounts">Accounts</option>
            </select>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-white font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
