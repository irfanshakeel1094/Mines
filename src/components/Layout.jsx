import { Outlet, NavLink, useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, Camera, Scale, Package, BarChart3, Mountain, Radio, Users, UserCog, FileText, Network, Globe, LogOut, ChevronRight, Sparkles, Search, Bell, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentRole, setCurrentRole] = useState(() => localStorage.getItem('userRole') || 'admin');
  const { language, setLanguage, t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());
  const username = localStorage.getItem('username') || 'Admin';

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/');
  };

  const roleColors = {
    admin: { bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa', border: '#8b5cf6', label: 'Admin' },
    operator: { bg: 'rgba(59, 130, 246, 0.15)', text: '#93c5fd', border: '#3b82f6', label: 'Operator' },
    security: { bg: 'rgba(34, 197, 94, 0.15)', text: '#86efac', border: '#22c55e', label: 'Security' },
    accounts: { bg: 'rgba(249, 115, 22, 0.15)', text: '#fdba74', border: '#f97316', label: 'Accounts' },
  };

  const navItems = [
    { path: '/dashboard', label: t.dashboard, icon: LayoutDashboard, color: '#6366f1', roles: ['admin', 'operator', 'security', 'accounts'] },
    { path: '/dashboard/vehicle-entry', label: t.vehicleEntry, icon: Radio, color: '#3b82f6', roles: ['admin', 'operator', 'security'] },
    { path: '/dashboard/detection', label: t.aiDetection, icon: Camera, color: '#8b5cf6', roles: ['admin', 'operator'] },
    { path: '/dashboard/weighbridge', label: t.weighbridge, icon: Scale, color: '#f59e0b', roles: ['admin', 'operator'] },
    { path: '/dashboard/inventory', label: t.inventory, icon: Package, color: '#10b981', roles: ['admin', 'operator', 'accounts'] },
    { path: '/dashboard/customers', label: t.customers, icon: Users, color: '#06b6d4', roles: ['admin', 'accounts'] },
    { path: '/dashboard/employees', label: t.employees, icon: UserCog, color: '#ec4899', roles: ['admin'] },
    { path: '/dashboard/billing', label: t.billing, icon: FileText, color: '#f97316', roles: ['admin', 'operator', 'accounts'] },
    { path: '/dashboard/reports', label: t.reports, icon: BarChart3, color: '#14b8a6', roles: ['admin', 'accounts'] },
    { path: '/dashboard/system', label: t.system, icon: Network, color: '#6366f1', roles: ['admin'] },
  ];

  const filteredNavItems = navItems.filter(item => item.roles.includes(currentRole));
  const rc = roleColors[currentRole] || roleColors.admin;

  // Get current page title for the header
  const currentPageTitle = (() => {
    const active = navItems.find(item =>
      item.path === '/dashboard'
        ? location.pathname === '/dashboard'
        : location.pathname.startsWith(item.path)
    );
    return active?.label || t.dashboard;
  })();

  const formattedDate = currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex h-screen">
      {/* Premium Sidebar */}
      <aside className="w-72 sidebar-gradient text-white flex flex-col relative overflow-hidden flex-shrink-0">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

        {/* Logo Section */}
        <div className="p-6 relative" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center animate-breathing"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full animate-pulse"
                style={{ background: '#22c55e', boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }} />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.title} <span className="text-xs font-medium px-1.5 py-0.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', fontSize: '10px' }}>ERP</span>
              </h1>
              <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(148, 163, 184, 0.7)' }}>
                <Sparkles className="w-3 h-3 text-yellow-400" />
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* User Greeting */}
          <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                {username.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{username}</p>
                <p className="text-xs capitalize" style={{ color: rc.text }}>{currentRole}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {filteredNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.path} style={{ animation: `slide-in-left 0.3s ease-out ${index * 0.05}s both` }}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/dashboard'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative ${isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`
                    }
                    style={({ isActive }) => isActive ? {
                      background: 'rgba(99, 102, 241, 0.15)',
                      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.1)',
                    } : {}}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                            style={{ background: item.color }} />
                        )}
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                          style={{
                            background: isActive ? `${item.color}25` : 'transparent',
                          }}
                        >
                          <Icon className="w-[18px] h-[18px] transition-colors" style={{ color: isActive ? item.color : undefined }} />
                        </div>
                        <span className="text-sm font-medium flex-1">{item.label}</span>
                        {isActive && <ChevronRight className="w-4 h-4 opacity-60" />}
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-3 space-y-2 relative" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          {/* Language Selector */}
          <div className="px-3 py-2.5 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
            <div className="flex items-center gap-2 mb-1.5">
              <Globe className="w-3.5 h-3.5" style={{ color: 'rgba(148, 163, 184, 0.6)' }} />
              <span className="text-xs font-medium" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>{t.language}</span>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full text-sm px-3 py-1.5 rounded-lg text-white cursor-pointer"
              style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <option value="en" style={{ background: '#1e293b' }}>English</option>
              <option value="hi" style={{ background: '#1e293b' }}>हिंदी</option>
              <option value="te" style={{ background: '#1e293b' }}>తెలుగు</option>
              <option value="ta" style={{ background: '#1e293b' }}>தமிழ்</option>
            </select>
          </div>

          {/* Role Selector */}
          <div className="px-3 py-2.5 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
            <p className="text-xs font-medium mb-1.5" style={{ color: 'rgba(148, 163, 184, 0.6)' }}>{t.role}</p>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className="w-full text-sm px-3 py-1.5 rounded-lg font-medium cursor-pointer"
              style={{
                background: rc.bg,
                color: rc.text,
                border: `1px solid ${rc.border}40`,
              }}
            >
              <option value="admin" style={{ background: '#1e293b', color: '#fff' }}>Admin</option>
              <option value="operator" style={{ background: '#1e293b', color: '#fff' }}>Operator</option>
              <option value="security" style={{ background: '#1e293b', color: '#fff' }}>Security</option>
              <option value="accounts" style={{ background: '#1e293b', color: '#fff' }}>Accounts</option>
            </select>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              boxShadow: '0 4px 15px rgba(239, 68, 68, 0.25)',
            }}
          >
            <LogOut className="w-4 h-4" />
            <span>{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 flex items-center justify-between px-8 flex-shrink-0"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          }}>
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{currentPageTitle}</h2>
            <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-400">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
              <span className="mx-1">•</span>
              <span className="font-medium text-gray-500">{formattedTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder={t.search}
                className="pl-9 pr-4 py-2 rounded-xl text-sm w-56 focus:outline-none transition-all duration-200"
                style={{ background: 'rgba(0, 0, 0, 0.03)', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 12px rgba(99,102,241,0.08)'; e.target.style.width = '280px'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.06)'; e.target.style.boxShadow = 'none'; e.target.style.width = '224px'; }}
              />
            </div>
            {/* Notification */}
            <button className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-gray-100"
              style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
              <Bell className="w-[18px] h-[18px] text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ background: '#ef4444', boxShadow: '0 0 6px rgba(239, 68, 68, 0.4)' }} />
            </button>
            {/* Mini Avatar */}
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer transition-transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto main-gradient-bg">
          <div key={location.pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
