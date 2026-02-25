import { useState } from 'react';
import { Truck, Camera, CheckCircle, AlertTriangle, Scan, Eye, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function VehicleEntry() {
  const { t } = useLanguage();
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [aiDetectionActive, setAiDetectionActive] = useState(false);
  const [detectionResults, setDetectionResults] = useState(null);
  const [vehicleAiDetecting, setVehicleAiDetecting] = useState(false);
  const [vehicleDetectionResult, setVehicleDetectionResult] = useState(null);

  const activeVehicles = [
    { id: 'TRK-001', driver: 'John Smith', material: 'Coal', weight: '28.5T', status: 'In Transit' },
    { id: 'TRK-045', driver: 'Sarah Johnson', material: 'Iron Ore', weight: '45.2T', status: 'Loading' },
    { id: 'TRK-023', driver: 'Mike Wilson', material: 'Limestone', weight: '32.1T', status: 'Weighing' },
    { id: 'TRK-087', driver: 'Emily Davis', material: 'Coal', weight: '29.8T', status: 'Unloading' },
  ];

  const vehicles = [
    { id: 'TRK-001', driver: 'John Smith', driverPhone: '+91 9876543210', company: 'ABC Transport Ltd', nfcTag: 'NFC-A1B2C3', status: 'Active', lastEntry: '2 hours ago' },
    { id: 'TRK-045', driver: 'Sarah Johnson', driverPhone: '+91 9876543211', company: 'XYZ Logistics', nfcTag: 'NFC-D4E5F6', status: 'Active', lastEntry: '30 mins ago' },
    { id: 'TRK-023', driver: 'Mike Wilson', driverPhone: '+91 9876543212', company: 'Quick Haul Services', nfcTag: 'NFC-G7H8I9', status: 'Active', lastEntry: '1 hour ago' },
    { id: 'TRK-087', driver: 'Emily Davis', driverPhone: '+91 9876543213', company: 'Express Freight Co', nfcTag: 'NFC-J1K2L3', status: 'Active', lastEntry: '45 mins ago' },
  ];

  const recentEntries = [
    { id: 'TRK-001', driver: 'John Smith', time: '10:45 AM', type: 'Manual', status: 'In Mine', material: 'Coal' },
    { id: 'TRK-045', driver: 'Sarah Johnson', time: '10:32 AM', type: 'Manual', status: 'Loading', material: 'Iron Ore' },
    { id: 'TRK-023', driver: 'Mike Wilson', time: '10:18 AM', type: 'Manual', status: 'Weighing', material: 'Limestone' },
    { id: 'TRK-087', driver: 'Emily Davis', time: '10:05 AM', type: 'Manual', status: 'Exited', material: 'Coal' },
  ];

  const handleManualEntry = () => { setIsManualEntry(true); setVehicleDetectionResult(null); };

  const handleStartVehicleAIDetection = () => {
    setVehicleAiDetecting(true);
    setTimeout(() => {
      setVehicleDetectionResult({
        vehicleId: 'TRK-045', licensePlate: 'MH-12-AB-3456', driver: 'Sarah Johnson',
        company: 'XYZ Logistics', vehicleType: 'Dump Truck', confidence: 96.5,
        registered: true, lastVisit: '2 days ago', status: 'success',
        timestamp: new Date().toLocaleTimeString(),
        details: { model: 'Tata Prima 2530.K', capacity: '25 Tons', fuelType: 'Diesel' }
      });
      setVehicleAiDetecting(false);
    }, 2500);
  };

  const handleAcceptVehicleDetection = () => { setIsManualEntry(true); };
  const handleRetryVehicleDetection = () => { setVehicleDetectionResult(null); handleStartVehicleAIDetection(); };

  const handleStartAIDetection = () => {
    setAiDetectionActive(true);
    setTimeout(() => {
      setDetectionResults({
        material: 'Coal', confidence: 94.7, quality: 'Grade A', quantity: '28.5 tons',
        status: 'success', timestamp: new Date().toLocaleTimeString(),
        details: { purity: '92%', moisture: '3.2%', particleSize: 'Medium' }
      });
      setAiDetectionActive(false);
    }, 3000);
  };

  const handleResetDetection = () => { setDetectionResults(null); setAiDetectionActive(false); };

  const handleAuthorizeEntry = () => {
    alert('Vehicle entry authorized! Proceeding to loading area.');
    setIsManualEntry(false); setDetectionResults(null);
    setAiDetectionActive(false); setVehicleDetectionResult(null); setVehicleAiDetecting(false);
  };

  const statusStyles = {
    'In Transit': { bg: 'rgba(59,130,246,0.1)', color: '#2563eb' },
    'Loading': { bg: 'rgba(34,197,94,0.1)', color: '#16a34a' },
    'Weighing': { bg: 'rgba(139,92,246,0.1)', color: '#7c3aed' },
    'Unloading': { bg: 'rgba(245,158,11,0.1)', color: '#d97706' },
    'In Mine': { bg: 'rgba(34,197,94,0.1)', color: '#16a34a' },
    'Exited': { bg: 'rgba(100,116,139,0.1)', color: '#64748b' },
  };

  const inputStyle = {
    background: 'rgba(99,102,241,0.04)',
    border: '2px solid rgba(0,0,0,0.08)',
    transition: 'all 0.2s',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.vehicleEntry}</h1>
        <p className="text-gray-500 mt-1">AI-powered vehicle entry and management</p>
      </div>

      {/* Workflow Steps */}
      <div className="glass-card rounded-2xl p-6 mb-8" style={{ animation: 'fade-in-up 0.5s ease-out both' }}>
        <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6)' }} />
          End-to-End Workflow
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { num: '1', label: 'Vehicle Entry', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
            { num: '2', label: 'Loading', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
            { num: '3', label: 'AI Detection', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
            { num: '4', label: 'Weighbridge', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
            { num: '5', label: 'Billing', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' },
            { num: '6', label: 'Exit', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
          ].map((step, i) => (
            <div key={i} className="text-center" style={{ animation: `fade-in-up 0.4s ease-out ${i * 0.08}s both` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-2 card-hover-lift"
                style={{ background: step.gradient, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                {step.num}
              </div>
              <p className="text-sm font-bold text-gray-700">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Vehicles */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
          {t.activeVehicles}
          <span className="ml-auto flex items-center gap-1.5"><span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} /><span className="text-xs font-medium text-gray-400">{activeVehicles.length} active</span></span>
        </h2>
        <div className="space-y-3">
          {activeVehicles.map((v, i) => {
            const ss = statusStyles[v.status] || statusStyles['Unloading'];
            return (
              <div key={v.id} className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:scale-[1.003]"
                style={{ background: 'rgba(99,102,241,0.02)', border: '1px solid rgba(99,102,241,0.08)', animation: `fade-in-up 0.4s ease-out ${i * 0.06}s both` }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)' }}>
                    <Truck className="w-5 h-5" style={{ color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{v.id}</p>
                    <p className="text-sm text-gray-500">{v.driver}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{v.weight}</p>
                  <p className="text-xs text-gray-400">{v.material}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: ss.bg, color: ss.color }}>
                  {v.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Entry Selection / AI Detection */}
        {!isManualEntry && !vehicleDetectionResult && !vehicleAiDetecting && (
          <div className="glass-card rounded-2xl p-6">
            <div className="text-center py-6 mb-4">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.vehicleEntry}</h2>
              <p className="text-gray-500 mt-1">Choose your entry method</p>
            </div>
            <div className="space-y-4">
              {/* AI Option */}
              <div className="rounded-2xl p-6 relative overflow-hidden card-hover-lift cursor-pointer"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(99,102,241,0.06))', border: '2px solid rgba(139,92,246,0.15)' }}>
                <div className="relative rounded-2xl p-5 mb-4" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ background: '#a855f7' }} />
                  <div className="flex items-center justify-center gap-4">
                    <Camera className="w-10 h-10 text-white animate-pulse" />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" /><div className="w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }} /><div className="w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                  AI Vehicle Detection
                  <span className="px-2 py-0.5 text-white text-[10px] font-bold rounded-full" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>Recommended</span>
                </h3>
                <p className="text-sm text-gray-500 mb-4">Instantly detect vehicle details with AI-powered camera recognition</p>
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  {['Instant Recognition', '96%+ Accuracy', 'Auto Database Match', 'Fast Processing'].map((f, fi) => (
                    <div key={fi} className="flex items-center gap-1.5 p-2 rounded-lg" style={{ background: 'rgba(139,92,246,0.06)' }}>
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: '#22c55e' }} /><span className="text-gray-600 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={handleStartVehicleAIDetection}
                  className="w-full rounded-xl font-bold text-white px-6 py-3.5 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 25px rgba(124,58,237,0.3)' }}>
                  <Camera className="w-5 h-5" />{t.startScanning}<Zap className="w-5 h-5" />
                </button>
              </div>

              {/* Manual Option */}
              <div className="rounded-2xl p-5 card-hover-lift cursor-pointer"
                style={{ background: 'rgba(59,130,246,0.04)', border: '2px solid rgba(59,130,246,0.12)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{t.manual} {t.vehicleEntry}</h3>
                    <p className="text-sm text-gray-500 mb-3">Manually enter vehicle info and driver details</p>
                    <button onClick={handleManualEntry}
                      className="w-full rounded-xl font-bold text-white px-6 py-3 transition-all duration-300 hover:scale-[1.02]"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 4px 15px rgba(59,130,246,0.3)' }}>
                      {t.manual} Entry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Detection In Progress */}
        {vehicleAiDetecting && (
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="py-4">
              <div className="relative w-full h-48 mb-8 flex items-center justify-center">
                <div className="absolute w-56 h-56 border-2 rounded-full animate-ping opacity-10" style={{ borderColor: '#8b5cf6' }} />
                <div className="absolute w-40 h-40 border-2 rounded-full animate-ping opacity-20" style={{ borderColor: '#8b5cf6', animationDelay: '0.3s' }} />
                <div className="absolute w-28 h-28 border-2 rounded-full animate-ping opacity-30" style={{ borderColor: '#8b5cf6', animationDelay: '0.6s' }} />
                <div className="relative z-10 rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 20px 40px rgba(124,58,237,0.3)' }}>
                  <Camera className="w-16 h-16 text-white animate-pulse" />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full animate-pulse"
                    style={{ background: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.6)' }} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2 flex items-center justify-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <Scan className="w-5 h-5 animate-spin" style={{ color: '#8b5cf6' }} />AI Detection in Progress
              </h2>
              <p className="text-gray-500 text-center mb-6">Scanning vehicle and analyzing details...</p>
              <div className="glass-card rounded-xl p-5 space-y-4">
                {[
                  { label: 'Reading license plate', pct: 100, done: true, color: '#22c55e' },
                  { label: 'Identifying vehicle type', pct: 75, done: false, color: '#8b5cf6' },
                  { label: 'Matching with database', pct: 50, done: false, color: '#3b82f6' },
                ].map((step, si) => (
                  <div key={si} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center animate-pulse"
                      style={{ background: step.color }}>
                      {step.done ? <CheckCircle className="w-4 h-4 text-white" /> : <Eye className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-gray-700">{step.label}</span>
                        <span className="text-xs font-bold" style={{ color: step.color }}>{step.done ? 'Complete' : `${step.pct}%`}</span>
                      </div>
                      <div className="rounded-full h-2 overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${step.pct}%`, background: `linear-gradient(90deg, ${step.color}, ${step.color}90)` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Detection Results */}
        {vehicleDetectionResult && !isManualEntry && (
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Vehicle Detected!</h2>
                <p className="text-sm text-gray-400">at {vehicleDetectionResult.timestamp}</p>
              </div>
            </div>
            <div className="rounded-2xl p-5 mb-5" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { l: 'Vehicle ID', v: vehicleDetectionResult.vehicleId },
                  { l: 'License Plate', v: vehicleDetectionResult.licensePlate },
                  { l: 'Driver', v: vehicleDetectionResult.driver },
                  { l: 'Company', v: vehicleDetectionResult.company },
                ].map((d, di) => (
                  <div key={di}><p className="text-xs text-gray-400 uppercase font-bold mb-0.5">{d.l}</p><p className="text-base font-bold text-gray-900">{d.v}</p></div>
                ))}
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl mb-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="flex items-center gap-2"><Eye className="w-4 h-4" style={{ color: '#8b5cf6' }} /><span className="text-sm font-bold text-gray-700">Confidence</span></div>
                <span className="text-lg font-black" style={{ color: '#16a34a' }}>{vehicleDetectionResult.confidence}%</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                {[
                  { l: 'Type', v: vehicleDetectionResult.vehicleType },
                  { l: 'Model', v: vehicleDetectionResult.details.model },
                  { l: 'Capacity', v: vehicleDetectionResult.details.capacity },
                ].map((d, di) => (
                  <div key={di} className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.7)' }}>
                    <p className="text-xs text-gray-400">{d.l}</p><p className="font-bold text-gray-900">{d.v}</p>
                  </div>
                ))}
              </div>
            </div>
            {vehicleDetectionResult.registered && (
              <div className="flex items-center gap-2 p-3 rounded-xl mb-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.12)' }}>
                <CheckCircle className="w-4 h-4" style={{ color: '#3b82f6' }} />
                <p className="text-sm text-gray-700"><span className="font-bold">Registered</span> — Last visit: {vehicleDetectionResult.lastVisit}</p>
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={handleAcceptVehicleDetection}
                className="flex-1 rounded-xl font-bold text-white px-6 py-3 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', boxShadow: '0 4px 15px rgba(34,197,94,0.3)' }}>
                <CheckCircle className="w-5 h-5" />Accept & Continue
              </button>
              <button onClick={handleRetryVehicleDetection}
                className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
                style={{ background: 'rgba(0,0,0,0.04)', color: '#64748b' }}>
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Manual Entry Form */}
        {isManualEntry && (
          <div className="glass-card rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
              Manual Entry Form
            </h2>
            <div className="space-y-4 flex-1">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Vehicle ID</label>
                <input type="text" placeholder="TRK-XXX" className="w-full px-4 py-3 rounded-xl focus:outline-none" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 15px rgba(99,102,241,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.boxShadow = 'none'; }} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl focus:outline-none" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 15px rgba(99,102,241,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.08)'; e.target.style.boxShadow = 'none'; }} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Customer Type</label>
                <select className="w-full px-4 py-3 rounded-xl focus:outline-none cursor-pointer" style={inputStyle}>
                  <option>Favourite</option><option>Normal</option>
                </select>
              </div>
              <button onClick={handleAuthorizeEntry}
                className="w-full rounded-xl font-bold text-white px-6 py-3.5 transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 25px rgba(79,70,229,0.3)' }}>
                Authorize Entry
              </button>
              <button onClick={() => { setIsManualEntry(false); setVehicleDetectionResult(null); setVehicleAiDetecting(false); }}
                className="w-full rounded-xl font-bold px-6 py-3 transition-all hover:scale-[1.02]"
                style={{ background: 'rgba(0,0,0,0.04)', color: '#64748b' }}>
                Cancel
              </button>

              {/* AI Material Detection */}
              <div className="pt-6 mt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #8b5cf6, #7c3aed)' }} />
                    AI Material Detection
                  </h3>
                  <Camera className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                </div>
                {!detectionResults && !aiDetectionActive && (
                  <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(139,92,246,0.04)', border: '2px dashed rgba(139,92,246,0.2)' }}>
                    <Scan className="w-14 h-14 mx-auto mb-3" style={{ color: '#8b5cf6' }} />
                    <h4 className="text-base font-bold text-gray-900 mb-1">Ready for Detection</h4>
                    <p className="text-sm text-gray-500 mb-4">Start AI-powered material detection and quality analysis</p>
                    <button onClick={handleStartAIDetection}
                      className="rounded-xl font-bold text-white px-6 py-3 inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
                      style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', boxShadow: '0 4px 15px rgba(139,92,246,0.3)' }}>
                      <Eye className="w-5 h-5" />Start AI Detection
                    </button>
                  </div>
                )}
                {aiDetectionActive && (
                  <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(139,92,246,0.04)', border: '2px solid rgba(139,92,246,0.15)' }}>
                    <Camera className="w-14 h-14 mx-auto mb-3 animate-pulse" style={{ color: '#8b5cf6' }} />
                    <h4 className="text-base font-bold text-gray-900 mb-2">AI Detection in Progress...</h4>
                    <div className="rounded-full h-2 overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                      <div className="h-full rounded-full animate-pulse" style={{ width: '70%', background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)' }} />
                    </div>
                  </div>
                )}
                {detectionResults && (
                  <div className="rounded-2xl p-5" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div><h4 className="font-bold text-gray-900">Detection Successful</h4><p className="text-xs text-gray-400">at {detectionResults.timestamp}</p></div>
                      </div>
                      <button onClick={handleResetDetection} className="text-sm font-bold transition-colors" style={{ color: '#6366f1' }}>Rescan</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.7)' }}>
                        <p className="text-xs text-gray-400 uppercase">Material</p>
                        <p className="text-lg font-bold text-gray-900">{detectionResults.material}</p>
                        <p className="text-xs font-bold" style={{ color: '#16a34a' }}>{detectionResults.confidence}% Confidence</p>
                      </div>
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.7)' }}>
                        <p className="text-xs text-gray-400 uppercase">Quality</p>
                        <p className="text-lg font-bold text-gray-900">{detectionResults.quality}</p>
                        <p className="text-xs font-bold" style={{ color: '#3b82f6' }}>Premium</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {Object.entries(detectionResults.details).map(([k, v]) => (
                        <div key={k} className="p-2 rounded-lg text-center" style={{ background: 'rgba(255,255,255,0.7)' }}>
                          <p className="text-xs text-gray-400 capitalize">{k}</p><p className="text-sm font-bold text-gray-900">{v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(59,130,246,0.06)' }}>
                      <AlertTriangle className="w-4 h-4" style={{ color: '#3b82f6' }} />
                      <p className="text-sm text-gray-700">AI quantity: <span className="font-bold">{detectionResults.quantity}</span></p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Select */}
              <div className="pt-4 mt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">Quick Select Regular Customer</label>
                <select className="w-full px-4 py-3 rounded-xl cursor-pointer" style={inputStyle}>
                  <option value="">Select a registered vehicle...</option>
                  {vehicles.map(v => (<option key={v.id} value={v.id}>{v.id} - {v.driver} ({v.company})</option>))}
                </select>
                <p className="text-xs text-gray-400 mt-1.5">Select from registered vehicles to auto-fill</p>
              </div>
            </div>
          </div>
        )}

        {/* Recent Entries */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #10b981, #059669)' }} />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentEntries.map((entry, i) => {
              const es = statusStyles[entry.status] || statusStyles['Exited'];
              return (
                <div key={i} className="p-4 rounded-xl transition-all duration-200 hover:scale-[1.003]"
                  style={{ background: 'rgba(99,102,241,0.02)', border: '1px solid rgba(99,102,241,0.08)', animation: `fade-in-up 0.4s ease-out ${i * 0.06}s both` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)' }}>
                        <Truck className="w-5 h-5" style={{ color: '#3b82f6' }} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{entry.id}</p>
                        <p className="text-sm text-gray-500">{entry.driver}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold" style={{ background: 'rgba(0,0,0,0.04)', color: '#64748b' }}>Manual</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{entry.time} • {entry.material}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: es.bg, color: es.color }}>{entry.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Registered Vehicles Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Registered Vehicles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full premium-table">
            <thead>
              <tr>
                {['Vehicle ID', 'Driver', 'Phone', 'Company', 'NFC Tag', 'Status', 'Last Entry'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vehicles.map(v => (
                <tr key={v.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{v.id}</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{v.driver}</td>
                  <td className="px-6 py-4 text-gray-500">{v.driverPhone}</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{v.company}</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{v.nfcTag}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold badge-glow-green" style={{ background: 'rgba(34,197,94,0.1)', color: '#16a34a' }}>{v.status}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{v.lastEntry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
