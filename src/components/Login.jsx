import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, User, Lock, Eye, EyeOff, LogIn, ArrowRight, Mountain, Zap, Globe } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => clearTimeout(t);
  }, []);

  const roles = [
    { id: 'admin', name: 'Admin', icon: Shield, color: '#818cf8', bg: '#818cf820' },
    { id: 'operator', name: 'Operator', icon: Zap, color: '#fbbf24', bg: '#fbbf2420' },
    { id: 'security', name: 'Security', icon: Globe, color: '#22d3ee', bg: '#22d3ee20' },
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
      className="login-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        fontFamily: "'Inter', system-ui, sans-serif",
        background: '#050816',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ═══ Subtle Background ═══ */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)',
          top: '-20%', right: '-15%', filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)',
          bottom: '-15%', left: '-10%', filter: 'blur(80px)',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.3,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* ═══ Left Panel — Branding ═══ */}
      <div
        className="login-left"
        style={{
          flex: '1 1 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem 6rem',
          position: 'relative',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
          }}>
            <Mountain style={{ width: '28px', height: '28px', color: '#fff' }} />
          </div>
          <div>
            <h2 style={{
              fontSize: '22px', fontWeight: 800, color: '#fff',
              letterSpacing: '-0.02em', lineHeight: 1.2,
            }}>
              SmartMine<span style={{ color: '#818cf8' }}> ERP</span>
            </h2>
            <p style={{ fontSize: '12px', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>
              AI-Powered Mining Management
            </p>
          </div>
        </div>

        {/* Hero Text */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: '24px',
        }}>
          Manage your<br />
          mining operations<br />
          <span style={{
            background: 'linear-gradient(135deg, #818cf8, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>intelligently.</span>
        </h1>

        <p style={{
          fontSize: '16px', lineHeight: 1.7, color: '#64748b',
          maxWidth: '440px', marginBottom: '48px',
        }}>
          Real-time analytics, AI-powered detection, and seamless automation
          for modern mining enterprises.
        </p>

        {/* Stats Row */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '500+', label: 'Active Mines' },
            { value: '50K+', label: 'Vehicles Tracked' },
          ].map((stat, i) => (
            <div key={i}>
              <p style={{
                fontSize: '28px', fontWeight: 800, color: '#fff',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>{stat.value}</p>
              <p style={{
                fontSize: '12px', color: '#475569', fontWeight: 600,
                marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Right Panel — Login Form ═══ */}
      <div
        className="login-right"
        style={{
          flex: '1 1 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          position: 'relative',
        }}
      >
        {/* Subtle separator line */}
        <div style={{
          position: 'absolute', left: 0, top: '10%', bottom: '10%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.15), transparent)',
        }} />

        <div
          style={{
            width: '100%',
            maxWidth: '420px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
          }}
        >
          {/* Card */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(99, 102, 241, 0.12)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.5)',
          }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{
                fontSize: '24px', fontWeight: 800, color: '#fff',
                letterSpacing: '-0.02em', marginBottom: '8px',
              }}>
                Welcome back
              </h2>
              <p style={{ fontSize: '14px', color: '#64748b' }}>
                Sign in to access your dashboard
              </p>
            </div>

            {/* Role Selection */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{
                display: 'block', fontSize: '11px', fontWeight: 700,
                color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em',
                marginBottom: '12px',
              }}>Select Role</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {roles.map((role) => {
                  const RoleIcon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: '8px', padding: '16px 8px', borderRadius: '14px',
                        border: `1.5px solid ${isSelected ? role.color : 'rgba(255,255,255,0.06)'}`,
                        background: isSelected ? `${role.color}12` : 'rgba(255,255,255,0.02)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        transform: isSelected ? 'translateY(-2px)' : 'none',
                        boxShadow: isSelected ? `0 8px 24px ${role.color}20` : 'none',
                      }}
                    >
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isSelected ? role.bg : 'rgba(255,255,255,0.04)',
                        transition: 'all 0.25s ease',
                      }}>
                        <RoleIcon style={{
                          width: '18px', height: '18px',
                          color: isSelected ? role.color : '#475569',
                          transition: 'color 0.25s ease',
                        }} />
                      </div>
                      <span style={{
                        fontSize: '11px', fontWeight: 700,
                        color: isSelected ? '#e2e8f0' : '#475569',
                        letterSpacing: '0.02em',
                        transition: 'color 0.25s ease',
                      }}>{role.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin}>
              {/* Username */}
              <div style={{ marginBottom: '18px' }}>
                <label htmlFor="login-username" style={{
                  display: 'block', fontSize: '11px', fontWeight: 700,
                  color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}>Username</label>
                <div style={{ position: 'relative' }}>
                  <User style={{
                    position: 'absolute', left: '14px', top: '50%',
                    transform: 'translateY(-50%)', width: '16px', height: '16px',
                    color: '#475569', pointerEvents: 'none',
                  }} />
                  <input
                    id="login-username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                    autoComplete="username"
                    style={{
                      width: '100%', padding: '12px 14px 12px 42px',
                      borderRadius: '12px', fontSize: '14px', fontWeight: 500,
                      color: '#e2e8f0', background: 'rgba(255,255,255,0.04)',
                      border: '1.5px solid rgba(255,255,255,0.08)',
                      outline: 'none', transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#6366f1';
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.15)';
                      e.target.style.background = 'rgba(99,102,241,0.06)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: '8px' }}>
                <label htmlFor="login-password" style={{
                  display: 'block', fontSize: '11px', fontWeight: 700,
                  color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock style={{
                    position: 'absolute', left: '14px', top: '50%',
                    transform: 'translateY(-50%)', width: '16px', height: '16px',
                    color: '#475569', pointerEvents: 'none',
                  }} />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    autoComplete="current-password"
                    style={{
                      width: '100%', padding: '12px 48px 12px 42px',
                      borderRadius: '12px', fontSize: '14px', fontWeight: 500,
                      color: '#e2e8f0', background: 'rgba(255,255,255,0.04)',
                      border: '1.5px solid rgba(255,255,255,0.08)',
                      outline: 'none', transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#6366f1';
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.15)';
                      e.target.style.background = 'rgba(99,102,241,0.06)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    style={{
                      position: 'absolute', right: '4px', top: '50%',
                      transform: 'translateY(-50%)', width: '36px', height: '36px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '10px', border: 'none', cursor: 'pointer',
                      background: 'transparent', color: '#64748b',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {showPassword ? <EyeOff style={{ width: '16px', height: '16px' }} /> : <Eye style={{ width: '16px', height: '16px' }} />}
                  </button>
                </div>
              </div>

              {/* Password Strength */}
              {password && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
                    {[1, 2, 3].map(i => (
                      <div key={i} style={{
                        height: '3px', flex: 1, borderRadius: '4px',
                        background: i <= pwStrength.level ? pwStrength.color : 'rgba(255,255,255,0.06)',
                        transition: 'all 0.3s ease',
                      }} />
                    ))}
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, color: pwStrength.color,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{pwStrength.label}</span>
                </div>
              )}

              {/* Remember + Forgot */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '24px', marginTop: password ? '0' : '18px',
              }}>
                <label
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    cursor: 'pointer', userSelect: 'none',
                  }}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '5px',
                    border: `1.5px solid ${rememberMe ? '#6366f1' : 'rgba(255,255,255,0.12)'}`,
                    background: rememberMe ? '#6366f1' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}>
                    {rememberMe && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Remember me</span>
                </label>
                <button
                  type="button"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '13px', fontWeight: 600, color: '#818cf8',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = '#a5b4fc'}
                  onMouseLeave={e => e.target.style.color = '#818cf8'}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%', padding: '14px', borderRadius: '14px',
                  border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer',
                  background: isLoading
                    ? 'rgba(99,102,241,0.4)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: '#fff', fontSize: '14px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: isLoading ? 'none' : '0 8px 32px rgba(99,102,241,0.35)',
                  opacity: isLoading ? 0.7 : 1,
                  transform: 'translateY(0)',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  if (!isLoading) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.5)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isLoading ? 'none' : '0 8px 32px rgba(99,102,241,0.35)';
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%',
                      animation: 'spin 0.6s linear infinite',
                    }} />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <LogIn style={{ width: '16px', height: '16px' }} />
                    <span>Sign In</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div style={{
              marginTop: '28px', paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <Shield style={{ width: '12px', height: '12px', color: '#10b981' }} />
              <span style={{ fontSize: '11px', color: '#334155', fontWeight: 500 }}>
                Secured with 256-bit SSL Encryption
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p style={{
            textAlign: 'center', fontSize: '11px', color: '#1e293b',
            marginTop: '24px', fontWeight: 500,
          }}>
            © 2026 SmartMine ERP · All Rights Reserved
          </p>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .login-page input::placeholder { color: #334155; }
        @media (max-width: 1024px) {
          .login-page { flex-direction: column !important; }
          .login-left { display: none !important; }
          .login-right { flex: 1 !important; padding: 2rem !important; }
        }
      `}</style>
    </div>
  );
}