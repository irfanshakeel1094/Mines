import { Network, Camera, Radio, Scale, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SystemArchitecture() {
  const { t } = useLanguage();
  const hardware = [
    { name: 'CCTV Cameras', icon: Camera, description: 'AI-enabled material detection', status: t.online || 'Online' },
    { name: 'NFC Readers', icon: Radio, description: 'Vehicle identification', status: t.online || 'Online' },
    { name: 'Weighbridge', icon: Scale, description: 'Automated weight capture', status: t.online || 'Online' },
    { name: 'Network Gateway', icon: Network, description: 'Secure connectivity', status: t.online || 'Online' },
  ];

  const securityFeatures = [
    'End-to-end encryption',
    'Role-based access control',
    'Audit logging & tracking',
    'Data backup & recovery',
    'Fraud detection system',
    'Secure API authentication',
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.systemArchitecture}</h1>
        <p className="text-gray-600 mt-1">{t.systemOverview}</p>
      </div>

      {/* Hardware Integration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.hardwareIntegration}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hardware.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Architecture Diagram */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">System Architecture Overview</h2>
        <div className="relative">
          {/* Central ERP */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-8 py-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Network className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Central ERP Dashboard</h3>
                  <p className="text-sm text-blue-100">Controls all systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'NFC Entry', icon: Radio, color: 'bg-blue-500' },
              { name: 'AI Detection', icon: Camera, color: 'bg-purple-500' },
              { name: 'Weighbridge', icon: Scale, color: 'bg-orange-500' },
              { name: 'Billing', icon: FileText, color: 'bg-green-500' },
            ].map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center">
                  <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{module.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-sm p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-green-400" />
          <h2 className="text-2xl font-bold">{t.securityFeatures}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
