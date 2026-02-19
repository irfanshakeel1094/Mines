import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, User, Lock, Eye, EyeOff, LogIn, Sparkles, Check } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { 
      id: 'admin', 
      name: 'Administrator', 
      icon: Shield, 
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/50',
    },
    { 
      id: 'operator', 
      name: 'Operator', 
      icon: User, 
      gradient: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/50',
    },
    { 
      id: 'security', 
      name: 'Security', 
      icon: Shield, 
      gradient: 'from-green-500 to-emerald-500',
      shadow: 'shadow-green-500/50',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      localStorage.setItem('userRole', selectedRole);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative w-full max-w-5xl z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-white space-y-6 hidden lg:block">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-black tracking-tight mb-4">
              Smart<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mine</span> ERP
            </h1>
            <p className="text-xl text-blue-200 font-medium flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              Automated Mining Management System
            </p>
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Real-time Monitoring</h3>
                  <p className="text-blue-200/80">Track all mining operations in real-time with AI-powered analytics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Secure & Encrypted</h3>
                  <p className="text-blue-200/80">Enterprise-grade security with role-based access control</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Automated Workflows</h3>
                  <p className="text-blue-200/80">Streamline operations from entry to billing automatically</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="relative">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">SmartMine ERP</h1>
              <p className="text-blue-200">Automated Mining Management</p>
            </div>

            {/* Login Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white mb-2">Welcome Back!</h2>
                  <p className="text-blue-200">Sign in to access your dashboard</p>
                </div>

                {/* Role Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-white/90 mb-4 tracking-wider uppercase">Choose Your Role</label>
                  <div className="grid grid-cols-3 gap-3">
                    {roles.map((role) => {
                      const RoleIcon = role.icon;
                      const isSelected = selectedRole === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setSelectedRole(role.id)}
                          className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected
                              ? 'border-white bg-white/20 shadow-2xl scale-105'
                              : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 hover:scale-105'
                          }`}
                        >
                          {isSelected && (
                            <>
                              <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 animate-bounce">
                                <Check className="w-4 h-4 text-white font-bold" />
                              </div>
                              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-20 rounded-2xl blur-xl`}></div>
                            </>
                          )}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-3 ${isSelected ? `shadow-xl ${role.shadow}` : 'opacity-80 group-hover:opacity-100'} transition-all`}>
                            <RoleIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                            {role.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-bold text-white/90 mb-2 tracking-wider uppercase">Username</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
                      </div>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/20 focus:border-white/50 focus:outline-none transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-bold text-white/90 mb-2 tracking-wider uppercase">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        className="w-full pl-12 pr-12 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/20 focus:border-white/50 focus:outline-none transition-all backdrop-blur-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white/90 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-white/30 bg-white/10 checked:bg-gradient-to-br checked:from-blue-500 checked:to-purple-500 focus:ring-2 focus:ring-white/50 cursor-pointer"
                      />
                      <span className="ml-3 text-sm font-medium text-white/80 group-hover:text-white transition-colors">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-blue-300 hover:text-blue-200 font-semibold transition-colors hover:underline">
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-6 relative overflow-hidden group ${
                      isLoading ? 'cursor-not-allowed' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl transition-all duration-300 ${
                      isLoading ? 'opacity-75' : 'group-hover:scale-105'
                    }`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-xl opacity-75 transition-all duration-300 ${
                      isLoading ? '' : 'group-hover:opacity-100'
                    }`}></div>
                    <div className="relative flex items-center justify-center gap-3 py-4 px-6">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-white font-bold text-lg">Signing In...</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-lg">Sign In</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Secured with 256-bit SSL Encryption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-white/50 text-sm mt-6">
              © 2026 SmartMine ERP • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
