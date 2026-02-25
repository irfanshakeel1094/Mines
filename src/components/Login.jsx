import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, User, Lock, Eye, EyeOff, LogIn, Sparkles, Check, Zap, Globe, ArrowRight, Mountain, KeyRound, TrendingUp, Activity, Database } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => clearTimeout(t);
  }, []);

  /* ─── Color Theory: Split-complementary palette ─── 
     Primary:     Indigo #6366f1 / Violet #8b5cf6
     Warm accent:  Amber/Gold #f59e0b / #fbbf24
     Cool accent:  Cyan/Teal #06b6d4
     Success:      Emerald #10b981
     Danger/Weak:  Rose #f43f5e
  */

  const roles = [
    { id: 'admin', name: 'Administrator', icon: Shield, color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { id: 'operator', name: 'Operator', icon: Zap, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { id: 'security', name: 'Security', icon: Globe, color: '#06b6d4', gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('userRole', selectedRole);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
      navigate('/dashboard');
    }, 1400);
  };

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 10,
    opacity: Math.random() * 0.35 + 0.15,
  }));

  const getPasswordStrength = () => {
    if (!password) return { level: 0, label: '', color: 'transparent' };
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return { level: 1, label: 'Weak', color: '#f43f5e' };
    if (score <= 3) return { level: 2, label: 'Medium', color: '#f59e0b' };
    return { level: 3, label: 'Strong', color: '#10b981' };
  };
  const pwStrength = getPasswordStrength();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0a1e 0%, #1a1040 25%, #0d1a35 50%, #0a1628 75%, #12102e 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 20s ease infinite',
      }}
    >
      {/* ═══ Animated Background ═══ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary indigo blob — top right */}
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)', top: '-18%', right: '-8%', animation: 'float 14s ease-in-out infinite' }}
        />
        {/* Warm amber blob — bottom left (complementary warmth) */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', bottom: '-12%', left: '-6%', animation: 'float 18s ease-in-out infinite reverse' }}
        />
        {/* Violet blob — center */}
        <div className="absolute w-[450px] h-[450px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)', top: '45%', left: '35%', animation: 'float 22s ease-in-out infinite 3s' }}
        />
        {/* Cyan accent blob — top left (split-complementary) */}
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', top: '10%', left: '15%', animation: 'float 16s ease-in-out infinite 2s' }}
        />
        {/* Rose accent blob — subtle pop */}
        <div className="absolute w-[250px] h-[250px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%)', bottom: '25%', right: '20%', animation: 'float 20s ease-in-out infinite 5s' }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.4
        }} />
        {/* Radial overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }} />

        {/* Particles — mix of indigo, amber, cyan */}
        {particles.map((p) => {
          const colors = ['rgba(139,92,246,', 'rgba(245,158,11,', 'rgba(6,182,212,'];
          const c = colors[p.id % 3];
          return (
            <div key={p.id} className="absolute rounded-full"
              style={{
                width: p.size + 'px', height: p.size + 'px',
                left: p.x + '%', top: p.y + '%',
                background: `${c}${p.opacity})`,
                boxShadow: `0 0 ${p.size * 4}px ${c}0.2)`,
                animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* ═══ Main Content ═══ */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-10 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT — Branding ── */}
          <div className="hidden lg:flex flex-col justify-center pr-10 xl:pr-16 relative">
            {/* Decorative separator — gradient uses both primary and warm accent */}
            <div className="absolute right-0 top-[8%] bottom-[8%] w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.2), rgba(245,158,11,0.08), rgba(6,182,212,0.12), transparent)' }}
            />

            {/* Logo */}
            <div className="relative inline-block mb-10 group/logo cursor-default" style={{ animation: 'fade-in-up 0.6s ease-out 0.1s both' }}>
              <div className="relative w-[76px] h-[76px] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/logo:scale-105 group-hover/logo:rotate-3"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                  boxShadow: '0 10px 36px rgba(99,102,241,0.35)',
                  animation: 'float 6s ease-in-out infinite, glow-pulse 3s ease-in-out infinite',
                }}
              >
                <Mountain className="w-9 h-9 text-white transition-transform duration-500 group-hover/logo:scale-110" />
                {/* Online indicator — using success emerald */}
                <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-300 group-hover/logo:scale-125"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 2px 8px rgba(16,185,129,0.45)', animation: 'breathing 3s ease-in-out infinite' }}
                >
                  <div className="w-[7px] h-[7px] bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div className="absolute -inset-3 rounded-2xl border border-white/[0.05] transition-all duration-500 group-hover/logo:border-white/[0.12] group-hover/logo:-inset-4" />
            </div>

            {/* Title */}
            <div className="mb-10" style={{ animation: 'fade-in-up 0.6s ease-out 0.2s both' }}>
              <h1 className="text-[3.5rem] leading-[1.08] font-black tracking-tight mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <span className="text-white">Smart</span>
                <span className="text-gradient">Mine</span>
                <span className="text-white/70 ml-3">ERP</span>
              </h1>
              <p className="text-[17px] font-medium flex items-center gap-3" style={{ color: 'rgba(167,139,250,0.75)' }}>
                <Sparkles className="w-[18px] h-[18px] animate-pulse" style={{ color: '#fbbf24' }} />
                <span>AI-Powered Mining Management</span>
              </p>
            </div>

            {/* Features — each uses a different color from the palette */}
            <div className="space-y-6 mb-12">
              {[
                { title: 'Real-time Monitoring', desc: 'Track all operations with AI-powered analytics', color: '#06b6d4', icon: Activity },
                { title: 'Enterprise Security', desc: 'Role-based access with 256-bit encryption', color: '#8b5cf6', icon: Shield },
                { title: 'Smart Automation', desc: 'Streamline from entry to billing seamlessly', color: '#f59e0b', icon: Zap },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="flex items-center gap-5 group cursor-default transition-all duration-400 hover:translate-x-2"
                    style={{ animation: `fade-in-up 0.5s ease-out ${0.35 + i * 0.1}s both` }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                      style={{
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}25`,
                        boxShadow: `0 0 0 0 ${item.color}00`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}25, 0 0 8px ${item.color}15`}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${item.color}00`}
                    >
                      <IconComponent className="w-5 h-5 transition-all duration-400 group-hover:scale-125 group-hover:rotate-12" style={{ color: item.color, filter: `drop-shadow(0 2px 8px ${item.color}40)` }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[16px] text-white/95 group-hover:text-white transition-all duration-300 leading-snug group-hover:tracking-wide">{item.title}</h3>
                      <p className="text-[14px] leading-relaxed transition-colors duration-300 group-hover:text-indigo-200/70" style={{ color: 'rgba(165,180,252,0.5)' }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats — color-coded: emerald for uptime, indigo for mines, amber for vehicles */}
            <div className="flex gap-10 xl:gap-12 mb-10" style={{ animation: 'fade-in-up 0.5s ease-out 0.7s both' }}>
              {[
                { value: '99.9%', label: 'Uptime', color: '#10b981', icon: TrendingUp },
                { value: '500+', label: 'Mines', color: '#6366f1', icon: Mountain },
                { value: '50K+', label: 'Vehicles', color: '#f59e0b', icon: Database },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} className="group cursor-default transition-all duration-400 hover:scale-110 hover:-translate-y-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <p className="text-[32px] font-black tracking-tight tabular-nums transition-all duration-400"
                        style={{ 
                          color: stat.color, 
                          textShadow: `0 0 30px ${stat.color}35, 0 2px 4px ${stat.color}20`,
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                        }}
                      >{stat.value}</p>
                      <StatIcon className="w-5 h-5 opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12" style={{ color: stat.color, filter: `drop-shadow(0 2px 6px ${stat.color}40)` }} />
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 group-hover:text-indigo-300/60 group-hover:tracking-[0.22em]" style={{ color: 'rgba(148,163,184,0.5)' }}>{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-3.5" style={{ animation: 'fade-in-up 0.5s ease-out 0.85s both' }}>
              <div className="flex -space-x-2.5">
                {['#6366f1', '#06b6d4', '#10b981', '#f59e0b'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-[2.5px] flex items-center justify-center text-[10px] font-bold text-white transition-all duration-300 hover:scale-125 hover:z-10 hover:-translate-y-1 cursor-default"
                    style={{ 
                      background: `linear-gradient(135deg, ${c}, ${c}dd)`, 
                      borderColor: '#0f0a1e', 
                      boxShadow: `0 0 12px ${c}40, 0 4px 8px ${c}25` 
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-[13px] transition-colors duration-300 hover:text-indigo-300/60" style={{ color: 'rgba(165,180,252,0.45)' }}>
                Trusted by <span className="font-semibold text-indigo-300/70">500+</span> mining operations
              </p>
            </div>
          </div>

          {/* ── RIGHT — Login Card ── */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-10" style={{ animation: 'fade-in-up 0.5s ease-out both' }}>
              <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl mb-5 relative"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                  boxShadow: '0 10px 32px rgba(99,102,241,0.35)',
                  animation: 'float 6s ease-in-out infinite, glow-pulse 3s ease-in-out infinite',
                  width: '72px', height: '72px',
                }}
              >
                <Mountain className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 2px 8px rgba(16,185,129,0.4)', animation: 'breathing 3s ease-in-out infinite' }}
                >
                  <div className="w-[7px] h-[7px] bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
                <span>Smart</span>
                <span className="text-gradient">Mine</span>
                <span className="text-white/70"> ERP</span>
              </h1>
              <p className="text-sm flex items-center justify-center gap-2" style={{ color: 'rgba(167,139,250,0.65)' }}>
                <Sparkles className="w-4 h-4 animate-pulse" style={{ color: '#fbbf24' }} />
                <span>AI-Powered Mining Management</span>
              </p>
            </div>

            {/* ── Glassmorphism Card ── */}
            <div className="w-full max-w-md mx-auto">
              <div
                className="rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-700 hover:scale-[1.015]"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 18, 55, 0.75) 0%, rgba(15, 23, 61, 0.85) 50%, rgba(18, 16, 46, 0.75) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  boxShadow: '0 32px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(139,92,246,0.2), inset 0 2px 0 rgba(255, 255, 255, 0.1), 0 0 100px rgba(99,102,241,0.12)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 40px 100px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139,92,246,0.4), inset 0 2px 0 rgba(255, 255, 255, 0.15), 0 0 140px rgba(99,102,241,0.2), 0 0 80px rgba(168,85,247,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 32px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(139,92,246,0.2), inset 0 2px 0 rgba(255, 255, 255, 0.1), 0 0 100px rgba(99,102,241,0.12)'}
              >
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(160deg, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.06) 30%, transparent 55%, rgba(168,85,247,0.08) 100%)',
                    opacity: 0.6
                  }}
                />
                {/* Animated shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
                  style={{ 
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.04) 35%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 65%, transparent 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 8s linear infinite'
                  }}
                />
                {/* Top accent bar — gradient uses all 3 palette colors */}
                <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full"
                  style={{ 
                    background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.7), rgba(139,92,246,0.8), rgba(168,85,247,0.7), transparent)',
                    boxShadow: '0 0 24px rgba(139,92,246,0.5)'
                  }}
                />

                <div className="relative z-10 space-y-8">

                  {/* ── Header ── */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:scale-110 hover:rotate-6 group/icon"
                      style={
 {                        background: 'linear-gradient(135deg, rgba(99,102,241,0.30), rgba(139,92,246,0.28), rgba(168,85,247,0.25))',
                        border: '1px solid rgba(139,92,246,0.35)',
                        boxShadow: '0 8px 24px rgba(99,102,241,0.25), 0 0 40px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
                        animation: 'breathing 4s ease-in-out infinite, glow-pulse 3s ease-in-out infinite',
                      }}
                    >
                      <KeyRound className="w-5 h-5 transition-all duration-500 group-hover/icon:rotate-12 group-hover/icon:scale-110" style={{ color: '#c7d2fe', filter: 'drop-shadow(0 2px 10px rgba(139,92,246,0.6))' }} />
                    </div>
                    <div>
                      <h2 className="text-[26px] font-extrabold leading-tight transition-all duration-300 hover:tracking-wide" 
                        style={{ 
                          fontFamily: 'Outfit, sans-serif', 
                          letterSpacing: '-0.02em',
                          background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 45%, #c7d2fe 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 0 30px rgba(199,210,254,0.4))'
                        }}>
                        Welcome Back
                      </h2>
                      <p className="text-[14px] mt-1 transition-colors duration-300 hover:text-indigo-300/80" style={{ color: 'rgba(165,180,252,0.65)' }}>Sign in to your dashboard</p>
                    </div>
                  </div>

                  {/* ── Role Selection ── */}
                  <div>
                    <label className="block text-[11px] font-bold mb-4 tracking-[0.18em] uppercase flex items-center gap-2 transition-all duration-300 hover:text-indigo-300/80" style={{ color: 'rgba(199,210,254,0.5)' }}>
                      <Shield className="w-3.5 h-3.5 transition-transform duration-300 hover:scale-110" style={{ color: 'rgba(139,92,246,0.6)' }} />
                      Select Role
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {roles.map((role, ri) => {
                        const RoleIcon = role.icon;
                        const isSelected = selectedRole === role.id;
                        return (
                          <button
                            key={role.id}
                            type="button"
                            onClick={() => setSelectedRole(role.id)}
                            aria-pressed={isSelected}
                            className="relative flex flex-col items-center justify-center py-5 px-2 rounded-xl transition-all duration-500 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group"
                            style={{
                              background: isSelected ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.02)',
                              border: `1.5px solid ${isSelected ? `${role.color}60` : 'rgba(255,255,255,0.08)'}`,
                              boxShadow: isSelected ? `0 12px 36px ${role.color}35, inset 0 1px 0 rgba(255,255,255,0.10), 0 0 40px ${role.color}15` : 'none',
                              transform: isSelected ? 'translateY(-5px) scale(1.03)' : 'translateY(0) scale(1)',
                              animation: `fade-in-up 0.4s ease-out ${0.1 + ri * 0.07}s both`,
                            }}
                            onMouseEnter={e => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = `${role.color}40`;
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = `0 10px 28px ${role.color}25, 0 0 20px ${role.color}10`;
                              }
                            }}
                            onMouseLeave={e => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                              }
                            }}
                          >
                            {isSelected && (
                              <>
                                <div className="absolute -top-2 -right-2 w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all duration-500"
                                  style={{ 
                                    background: 'linear-gradient(135deg, #10b981, #059669)', 
                                    boxShadow: '0 4px 12px rgba(16,185,129,0.6), 0 0 0 3px rgba(16,185,129,0.2)',
                                    animation: 'breathing 3s ease-in-out infinite'
                                  }} 
                                >
                                  <Check className="w-3.5 h-3.5 text-white" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
                                </div>
                                {/* Selection glow ring */}
                                <div className="absolute -inset-1 rounded-xl pointer-events-none"
                                  style={{
                                    border: `1px solid ${role.color}30`,
                                    boxShadow: `0 0 20px ${role.color}20, inset 0 0 20px ${role.color}10`,
                                    animation: 'border-glow 3s ease-in-out infinite'
                                  }}
                                />
                              </>
                            )}
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-115 group-hover:rotate-12"
                              style={{
                                background: isSelected ? role.gradient : `${role.color}12`,
                                boxShadow: isSelected ? `0 8px 24px ${role.color}45, inset 0 2px 0 rgba(255,255,255,0.20)` : 'none',
                              }}
                            >
                              <RoleIcon className="w-5 h-5 text-white transition-all duration-300"
                                style={{ transform: isSelected ? 'scale(1.05)' : 'scale(1)' }}
                              />
                            </div>
                            <span className="text-[10px] font-bold leading-none transition-colors duration-200"
                              style={{ color: isSelected ? '#fff' : 'rgba(255,255,255,0.32)', letterSpacing: '0.02em' }}
                            >
                              {role.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── Form ── */}
                  <form onSubmit={handleLogin} className="space-y-5">

                    {/* Username Input */}
                    <div>
                      <label htmlFor="login-username" className="block text-[11px] font-bold mb-3 tracking-[0.18em] uppercase flex items-center gap-2 transition-all duration-500"
                        style={{ color: usernameFocused ? '#c7d2fe' : 'rgba(199,210,254,0.40)' }}
                      >
                        <User className="w-3.5 h-3.5 transition-all duration-500" 
                          style={{ 
                            transform: usernameFocused ? 'scale(1.15) rotate(-6deg)' : 'scale(1)',
                            filter: usernameFocused ? 'drop-shadow(0 0 6px rgba(199,210,254,0.5))' : 'none'
                          }} 
                        />
                        Username
                      </label>
                      <div className="relative group/input">
                        {/* Animated border glow */}
                        {usernameFocused && (
                          <div className="absolute -inset-[2px] rounded-xl pointer-events-none z-0"
                            style={{
                              background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.5), rgba(168,85,247,0.4))',
                              filter: 'blur(8px)',
                              animation: 'glow-pulse 2s ease-in-out infinite'
                            }}
                          />
                        )}
                        <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center pointer-events-none z-10">
                          <div className="relative">
                            <User className="w-[18px] h-[18px] transition-all duration-500"
                              style={{ 
                                color: usernameFocused ? '#c7d2fe' : 'rgba(255,255,255,0.25)',
                                transform: usernameFocused ? 'scale(1.15) rotate(-3deg)' : 'scale(1)',
                                filter: usernameFocused ? 'drop-shadow(0 0 12px rgba(199,210,254,0.6))' : 'none'
                              }}
                            />
                            {usernameFocused && (
                              <div className="absolute inset-0 animate-ping"
                                style={{
                                  opacity: 0.3,
                                  color: '#a78bfa'
                                }}
                              >
                                <User className="w-[18px] h-[18px]" />
                              </div>
                            )}
                          </div>
                        </div>
                        <input
                          id="login-username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter your username"
                          required
                          autoComplete="username"
                          className="w-full pl-12 pr-4 py-4 rounded-xl text-[15px] font-medium text-white bg-transparent transition-all duration-500 outline-none relative z-[1]"
                          style={{
                            background: usernameFocused 
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(139,92,246,0.08) 100%)' 
                              : 'rgba(255,255,255,0.04)',
                            border: `2px solid ${usernameFocused ? 'rgba(139,92,246,0.60)' : 'rgba(255,255,255,0.10)'}`,
                            boxShadow: usernameFocused
                              ? '0 0 0 4px rgba(99,102,241,0.20), 0 8px 24px rgba(99,102,241,0.20), 0 0 50px rgba(139,92,246,0.15), inset 0 2px 4px rgba(255,255,255,0.10)'
                              : '0 2px 8px rgba(0,0,0,0.20), inset 0 2px 4px rgba(255,255,255,0.04)',
                            transform: usernameFocused ? 'translateY(-3px)' : 'translateY(0)',
                            letterSpacing: '0.02em',
                          }}
                          onFocus={() => setUsernameFocused(true)}
                          onBlur={() => setUsernameFocused(false)}
                        />
                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-500"
                          style={{
                            background: usernameFocused 
                              ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.8), rgba(99,102,241,0.8), transparent)' 
                              : 'transparent',
                            opacity: usernameFocused ? 1 : 0,
                            boxShadow: usernameFocused ? '0 0 16px rgba(139,92,246,0.6)' : 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div>
                      <label htmlFor="login-password" className="block text-[11px] font-bold mb-3 tracking-[0.18em] uppercase flex items-center gap-2 transition-all duration-500"
                        style={{ color: passwordFocused ? '#c7d2fe' : 'rgba(199,210,254,0.40)' }}
                      >
                        <Lock className="w-3.5 h-3.5 transition-all duration-500" 
                          style={{ 
                            transform: passwordFocused ? 'scale(1.15) rotate(-6deg)' : 'scale(1)',
                            filter: passwordFocused ? 'drop-shadow(0 0 6px rgba(199,210,254,0.5))' : 'none'
                          }} 
                        />
                        Password
                      </label>
                      <div className="relative group/input">
                        {/* Animated border glow */}
                        {passwordFocused && (
                          <div className="absolute -inset-[2px] rounded-xl pointer-events-none z-0"
                            style={{
                              background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.5), rgba(168,85,247,0.4))',
                              filter: 'blur(8px)',
                              animation: 'glow-pulse 2s ease-in-out infinite'
                            }}
                          />
                        )}
                        <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center pointer-events-none z-10">
                          <div className="relative">
                            <Lock className="w-[18px] h-[18px] transition-all duration-500"
                              style={{ 
                                color: passwordFocused ? '#c7d2fe' : 'rgba(255,255,255,0.25)',
                                transform: passwordFocused ? 'scale(1.15) rotate(-3deg)' : 'scale(1)',
                                filter: passwordFocused ? 'drop-shadow(0 0 12px rgba(199,210,254,0.6))' : 'none'
                              }}
                            />
                            {passwordFocused && (
                              <div className="absolute inset-0 animate-ping"
                                style={{
                                  opacity: 0.3,
                                  color: '#a78bfa'
                                }}
                              >
                                <Lock className="w-[18px] h-[18px]" />
                              </div>
                            )}
                          </div>
                        </div>
                        <input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          autoComplete="current-password"
                          className="w-full pl-12 py-4 rounded-xl text-[15px] font-medium text-white bg-transparent transition-all duration-500 outline-none relative z-[1]"
                          style={{
                            paddingRight: '3rem',
                            background: passwordFocused 
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(139,92,246,0.08) 100%)' 
                              : 'rgba(255,255,255,0.04)',
                            border: `2px solid ${passwordFocused ? 'rgba(139,92,246,0.60)' : 'rgba(255,255,255,0.10)'}`,
                            boxShadow: passwordFocused
                              ? '0 0 0 4px rgba(99,102,241,0.20), 0 8px 24px rgba(99,102,241,0.20), 0 0 50px rgba(139,92,246,0.15), inset 0 2px 4px rgba(255,255,255,0.10)'
                              : '0 2px 8px rgba(0,0,0,0.20), inset 0 2px 4px rgba(255,255,255,0.04)',
                            transform: passwordFocused ? 'translateY(-3px)' : 'translateY(0)',
                            letterSpacing: '0.02em',
                          }}
                          onFocus={() => setPasswordFocused(true)}
                          onBlur={() => setPasswordFocused(false)}
                        />
                        {/* Eye toggle button - inside the input field */}
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          className="absolute h-10 w-10 flex items-center justify-center transition-all duration-500 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 z-[25] group/eye"
                          style={{ 
                            top: '50%',
                            right: '0.25rem',
                            transform: 'translateY(-50%)',
                            color: showPassword ? '#e0e7ff' : (passwordFocused ? '#c7d2fe' : 'rgba(199,210,254,0.50)'),
                            background: showPassword 
                              ? 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(99,102,241,0.30))' 
                              : 'rgba(15,15,30,0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: `1px solid ${showPassword ? 'rgba(139,92,246,0.40)' : 'rgba(255,255,255,0.10)'}`,
                            boxShadow: showPassword 
                              ? '0 4px 12px rgba(139,92,246,0.30), inset 0 1px 2px rgba(255,255,255,0.15)' 
                              : '0 2px 6px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.05)'
                          }}
                          onMouseEnter={(e) => { 
                            e.currentTarget.style.color = '#ffffff'; 
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.50), rgba(99,102,241,0.45))';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,92,246,0.50), inset 0 2px 4px rgba(255,255,255,0.20)';
                            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.60)';
                          }}
                          onMouseLeave={(e) => { 
                            e.currentTarget.style.color = showPassword ? '#e0e7ff' : (passwordFocused ? '#c7d2fe' : 'rgba(199,210,254,0.50)');
                            e.currentTarget.style.background = showPassword 
                              ? 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(99,102,241,0.30))' 
                              : 'rgba(15,15,30,0.35)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            e.currentTarget.style.boxShadow = showPassword 
                              ? '0 4px 12px rgba(139,92,246,0.30), inset 0 1px 2px rgba(255,255,255,0.15)' 
                              : '0 2px 6px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.05)';
                            e.currentTarget.style.borderColor = showPassword ? 'rgba(139,92,246,0.40)' : 'rgba(255,255,255,0.10)';
                          }}
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5 transition-all duration-500 group-hover/eye:rotate-12 group-hover/eye:scale-110" 
                              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
                            />
                          ) : (
                            <Eye className="w-5 h-5 transition-all duration-500 group-hover/eye:scale-125" 
                              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
                            />
                          )}
                        </button>
                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-500"
                          style={{
                            background: passwordFocused 
                              ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.8), rgba(99,102,241,0.8), transparent)' 
                              : 'transparent',
                            opacity: passwordFocused ? 1 : 0,
                            boxShadow: passwordFocused ? '0 0 16px rgba(139,92,246,0.6)' : 'none'
                          }}
                        />
                      </div>

                      {/* Strength Bar — uses rose/amber/emerald for feedback */}
                      {password && (
                        <div className="mt-3.5 flex items-center gap-3">
                          <div className="flex-1 flex gap-2">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-[5px] rounded-full flex-1 transition-all duration-700"
                                style={{
                                  background: i <= pwStrength.level 
                                    ? `linear-gradient(90deg, ${pwStrength.color}, ${pwStrength.color}dd)` 
                                    : 'rgba(255,255,255,0.06)',
                                  boxShadow: i <= pwStrength.level 
                                    ? `0 0 12px ${pwStrength.color}40, 0 2px 0 ${pwStrength.color}20, inset 0 1px 0 rgba(255,255,255,0.15)` 
                                    : 'inset 0 1px 2px rgba(0,0,0,0.2)',
                                  transform: i <= pwStrength.level ? 'scaleY(1.2)' : 'scaleY(1)',
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-[0.14em] flex items-center gap-2 transition-all duration-500"
                            style={{ 
                              color: pwStrength.color,
                              filter: `drop-shadow(0 0 8px ${pwStrength.color}40)`
                            }}
                          >
                            {pwStrength.label && (
                              <>
                                <div className="w-2 h-2 rounded-full transition-all duration-500"
                                  style={{ 
                                    background: pwStrength.color, 
                                    boxShadow: `0 0 10px ${pwStrength.color}80, 0 0 20px ${pwStrength.color}40`,
                                    animation: 'glow-pulse 2s ease-in-out infinite'
                                  }}
                                />
                                {pwStrength.label}
                              </>
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between py-1.5">
                      <label className="flex items-center cursor-pointer group select-none gap-3"
                        onClick={() => setRememberMe(!rememberMe)}
                      >
                        <div className="relative w-10 flex-shrink-0 rounded-full transition-all duration-500"
                          style={{
                            height: '22px',
                            background: rememberMe 
                              ? 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)' 
                              : 'rgba(255,255,255,0.07)',
                            boxShadow: rememberMe 
                              ? '0 0 16px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)' 
                              : 'inset 0 2px 4px rgba(0,0,0,0.25)',
                            border: `1.5px solid ${rememberMe ? 'rgba(139,92,246,0.50)' : 'rgba(255,255,255,0.10)'}`,
                          }}
                        >
                          <div className="absolute top-[3px] w-4 h-4 rounded-full transition-all duration-500"
                            style={{
                              left: rememberMe ? 'calc(100% - 19px)' : '3px',
                              background: rememberMe 
                                ? 'linear-gradient(135deg, #ffffff, #f0f9ff)' 
                                : 'rgba(255,255,255,0.40)',
                              boxShadow: rememberMe 
                                ? '0 2px 6px rgba(0,0,0,0.25), 0 0 12px rgba(139,92,246,0.3)' 
                                : '0 1px 3px rgba(0,0,0,0.2)',
                              transform: rememberMe ? 'scale(1.1)' : 'scale(1)',
                            }}
                          />
                        </div>
                        <span className="text-[13px] font-medium transition-all duration-500 group-hover:text-indigo-300/70"
                          style={{ 
                            color: rememberMe ? 'rgba(199,210,254,0.70)' : 'rgba(255,255,255,0.35)',
                            filter: rememberMe ? 'drop-shadow(0 0 8px rgba(199,210,254,0.2))' : 'none'
                          }}
                        >
                          Remember me
                        </span>
                      </label>
                      <button type="button"
                        className="text-[13px] font-semibold transition-all duration-500 relative group/forgot px-3 py-1.5 rounded-lg hover:bg-white/[0.06] outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 hover:scale-105"
                        style={{ color: 'rgba(129,140,248,0.70)' }}
                        onMouseEnter={(e) => { 
                          e.target.style.color = '#e0e7ff'; 
                          e.target.style.filter = 'drop-shadow(0 0 8px rgba(129,140,248,0.3))';
 }}
                        onMouseLeave={(e) => { 
                          e.target.style.color = 'rgba(129,140,248,0.70)';
                          e.target.style.filter = 'none';
                        }}
                      >
                        Forgot password?
                        <span className="absolute left-3 right-3 bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo-400/60 via-violet-400/70 to-indigo-400/60 origin-left scale-x-0 group-hover/forgot:scale-x-100 transition-transform duration-500"
                          style={{ boxShadow: '0 0 8px rgba(129,140,248,0.4)' }}
                        />
                      </button>
                    </div>

                    {/* ── Submit Button — warm-to-cool gradient for energy ── */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full mt-2 relative overflow-hidden group rounded-xl transition-all duration-700 outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${isLoading
                          ? 'cursor-not-allowed opacity-75'
                          : 'hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl'
                        }`}
                      style={{
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)',
                        boxShadow: isLoading
                          ? '0 4px 14px rgba(99,102,241,0.15)'
                          : '0 10px 36px rgba(99,102,241,0.45), inset 0 2px 0 rgba(255,255,255,0.15), 0 0 80px rgba(139,92,246,0.15)',
                      }}
                      onMouseEnter={e => { 
                        if (!isLoading) {
                          e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.65), 0 0 64px rgba(139,92,246,0.25), 0 0 100px rgba(168,85,247,0.15), inset 0 2px 0 rgba(255,255,255,0.20)';
                          e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        }
                      }}
                      onMouseLeave={e => { 
                        e.currentTarget.style.boxShadow = isLoading ? '0 4px 14px rgba(99,102,241,0.15)' : '0 10px 36px rgba(99,102,241,0.45), inset 0 2px 0 rgba(255,255,255,0.15), 0 0 80px rgba(139,92,246,0.15)'; 
                        if (!isLoading) e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      {/* Shimmer */}
                      {!isLoading && (
                        <>
                          <div className="absolute inset-0"
                            style={{ 
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.20) 40%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.20) 60%, transparent 100%)', 
                              backgroundSize: '200% 100%',
                              animation: 'shimmer 3.5s linear infinite',
                              filter: 'blur(8px)'
                            }}
                          />
                          {/* Animated border glow */}
                          <div className="absolute -inset-[1px] rounded-xl pointer-events-none opacity-75"
                            style={{ 
                              background: 'linear-gradient(90deg, rgba(168,85,247,0.6), rgba(139,92,246,0.7), rgba(99,102,241,0.6), rgba(139,92,246,0.7), rgba(168,85,247,0.6))',
                              backgroundSize: '200% 100%',
                              WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                              WebkitMaskComposite: 'xor',
                              maskComposite: 'exclude',
                              padding: '1.5px',
                              animation: 'shimmer 3s linear infinite reverse',
                              filter: 'blur(1px)'
                            }}
                          />
                        </>
                      )}
                      {/* Top highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[4px] rounded-t-xl"
                        style={{ 
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.60) 50%, rgba(255,255,255,0.45) 75%, transparent)',
                          boxShadow: '0 0 24px rgba(255,255,255,0.35), 0 2px 0 rgba(255,255,255,0.10)'
                        }}
                      />
                      <div className="relative flex items-center justify-center gap-3 py-[14px] px-6">
                        {isLoading ? (
                          <>
                            <div className="w-[18px] h-[18px] border-2 border-white/70 border-t-transparent rounded-full animate-spin" 
                              style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' }}
                            />
                            <span className="text-white font-bold text-[14px] tracking-wide" 
                              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                            >
                              Signing In...
                            </span>
                          </>
                        ) : (
                          <>
                            <LogIn className="w-[17px] h-[17px] text-white transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" 
                              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                            />
                            <span className="text-white font-bold text-[14px] tracking-wide" 
                              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                            >
                              Sign In to Dashboard
                            </span>
                            <ArrowRight className="w-[17px] h-[17px] text-white transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" 
                              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                            />
                          </>
                        )}
                      </div>
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="pt-6" style={{ borderTop: '1px solid rgba(139,92,246,0.10)' }}>
                    <div className="flex items-center justify-center gap-3 text-[12px] cursor-default transition-all duration-500 group/footer"
                      style={{ color: 'rgba(199,210,254,0.35)' }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 group-hover/footer:scale-110 group-hover/footer:rotate-6"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.10))', 
                          border: '1px solid rgba(16,185,129,0.20)',
                          boxShadow: '0 4px 12px rgba(16,185,129,0.10), inset 0 1px 0 rgba(255,255,255,0.10)',
                          animation: 'breathing 4s ease-in-out infinite'
                        }}
                      >
                        <Shield className="w-4 h-4 transition-all duration-500" 
                          style={{ 
                            color: '#10b981',
                            filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.4))'
                          }} 
                        />
                      </div>
                      <span className="tracking-wide transition-colors duration-500 group-hover/footer:text-indigo-300/50">
                        Secured with 256-bit SSL Encryption
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-center text-[10px] mt-7 tracking-wider cursor-default flex items-center justify-center gap-3 transition-all duration-500 hover:tracking-widest"
                style={{ color: 'rgba(199,210,254,0.20)' }}
              >
                <span className="transition-colors duration-500 hover:text-indigo-300/30">© 2026 SmartMine ERP</span>
                <span className="w-1.5 h-1.5 rounded-full transition-all duration-500 hover:scale-150" 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(99,102,241,0.20))',
                    boxShadow: '0 0 10px rgba(139,92,246,0.15)'
                  }} 
                />
                <span className="transition-colors duration-500 hover:text-indigo-300/30">All Rights Reserved</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}