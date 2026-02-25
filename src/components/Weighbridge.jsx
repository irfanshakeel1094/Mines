import { useState } from 'react';
import { Scale, TrendingUp, Truck, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Weighbridge() {
  const { t } = useLanguage();
  const [currentWeight, setCurrentWeight] = useState(0);
  const [isWeighing, setIsWeighing] = useState(false);
  const [weighingComplete, setWeighingComplete] = useState(false);

  const todayStats = [
    { label: t.vehiclesToday, value: '87', icon: Truck, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { label: t.totalWeight, value: '2,845T', icon: TrendingUp, color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { label: t.avgWeight, value: '32.7T', icon: Scale, color: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  ];

  const recentWeighings = [
    { id: 'TRK-001', driver: 'John Smith', material: 'Coal', tareWeight: 16.5, grossWeight: 45.0, netWeight: 28.5, time: '10:45 AM', status: 'Complete' },
    { id: 'TRK-045', driver: 'Sarah Johnson', material: 'Iron Ore', tareWeight: 14.8, grossWeight: 60.0, netWeight: 45.2, time: '10:32 AM', status: 'Complete' },
    { id: 'TRK-023', driver: 'Mike Wilson', material: 'Limestone', tareWeight: 15.9, grossWeight: 48.0, netWeight: 32.1, time: '10:18 AM', status: 'Complete' },
    { id: 'TRK-087', driver: 'Emily Davis', material: 'Coal', tareWeight: 16.2, grossWeight: 46.0, netWeight: 29.8, time: '10:05 AM', status: 'Complete' },
  ];

  const handleStartWeighing = () => {
    setIsWeighing(true);
    setWeighingComplete(false);
    setCurrentWeight(0);
    let weight = 0;
    const targetWeight = 25000 + Math.random() * 20000;
    const interval = setInterval(() => {
      weight += 1000 + Math.random() * 2000;
      if (weight >= targetWeight) {
        weight = targetWeight;
        setCurrentWeight(weight);
        setIsWeighing(false);
        setWeighingComplete(true);
        clearInterval(interval);
      } else {
        setCurrentWeight(weight);
      }
    }, 100);
  };

  const formatWeight = (kg) => (kg / 1000).toFixed(2);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.weighbridgeManagement}</h1>
        <p className="text-gray-500 mt-1">{t.realTimeWeighing}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {todayStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass-card rounded-2xl p-6 card-hover-lift"
              style={{ borderTop: `3px solid ${stat.color}`, animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: stat.gradient }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{stat.label}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6, #6366f1)' }} />
            Active Weighbridge
          </h2>
          <div className="rounded-2xl p-8 mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a)' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center animate-breathing" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center relative z-10">
              <div className="text-6xl font-black text-white mb-2" style={{ fontFamily: 'Outfit, monospace' }}>{formatWeight(currentWeight)}</div>
              <div className="text-xl font-medium" style={{ color: 'rgba(148, 163, 184, 0.8)' }}>TONS</div>
              {isWeighing && (
                <div className="mt-4">
                  <div className="w-full rounded-full h-2" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div className="h-2 rounded-full animate-pulse" style={{ width: '75%', background: 'linear-gradient(90deg, #3b82f6, #6366f1)' }} />
                  </div>
                </div>
              )}
              {weighingComplete && (
                <div className="mt-4 flex items-center justify-center gap-2" style={{ color: '#22c55e' }}>
                  <CheckCircle className="w-5 h-5" /><span className="font-bold">{t.complete}</span>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.vehicleId}</label>
              <input type="text" placeholder="TRK-XXX" className="w-full px-4 py-3 rounded-xl" style={{ background: 'rgba(99,102,241,0.04)', border: '2px solid rgba(0,0,0,0.08)' }} />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.driver}</label>
              <input type="text" placeholder="Enter driver name" className="w-full px-4 py-3 rounded-xl" style={{ background: 'rgba(99,102,241,0.04)', border: '2px solid rgba(0,0,0,0.08)' }} />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.material}</label>
              <select className="w-full px-4 py-3 rounded-xl" style={{ background: 'rgba(99,102,241,0.04)', border: '2px solid rgba(0,0,0,0.08)' }}>
                <option>Coal Grade A</option><option>Coal Grade B</option><option>Iron Ore</option><option>Limestone</option>
              </select>
            </div>
            <button onClick={handleStartWeighing} disabled={isWeighing}
              className="w-full rounded-xl font-bold text-white px-6 py-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)' }}>
              <Play className="w-5 h-5" />{isWeighing ? `${t.weighing || 'Weighing'}...` : t.startWeighing}
            </button>
            {weighingComplete && (
              <button className="w-full rounded-xl font-bold text-white px-6 py-3 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                <CheckCircle className="w-5 h-5" />{t.save || 'Save Record'}
              </button>
            )}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(180deg, #10b981, #059669)' }} />
            {t.recentWeighings}
          </h2>
          <div className="space-y-4">
            {recentWeighings.map((record, i) => (
              <div key={record.id} className="p-4 rounded-xl card-hover-lift"
                style={{ background: 'rgba(99,102,241,0.02)', border: '1px solid rgba(99,102,241,0.08)', animation: `fade-in-up 0.4s ease-out ${i * 0.08}s both` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      <Truck className="w-5 h-5" style={{ color: '#3b82f6' }} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{record.id}</p>
                      <p className="text-sm text-gray-500">{record.driver}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold badge-glow-green" style={{ background: 'rgba(34,197,94,0.1)', color: '#16a34a' }}>{record.status}</span>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm">
                  <div><p className="text-gray-400 text-xs">{t.material}</p><p className="text-gray-900 font-bold">{record.material}</p></div>
                  <div><p className="text-gray-400 text-xs">{t.tareWeight}</p><p className="text-gray-900 font-medium">{record.tareWeight}T</p></div>
                  <div><p className="text-gray-400 text-xs">{t.grossWeight}</p><p className="text-gray-900 font-medium">{record.grossWeight}T</p></div>
                  <div><p className="text-gray-400 text-xs">{t.netWeight}</p><p className="font-bold text-gradient">{record.netWeight}T</p></div>
                </div>
                <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}><p className="text-xs text-gray-400">{record.time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
