import { Network, Server, Camera, Radio, Scale, Monitor, Database, Shield } from 'lucide-react';

export function SystemArchitecture() {
  const components = [
    { name: 'Frontend Dashboard', icon: Monitor, color: 'bg-blue-500', description: 'Web-based control panel' },
    { name: 'Backend APIs', icon: Server, color: 'bg-green-500', description: 'RESTful API services' },
    { name: 'Database Server', icon: Database, color: 'bg-purple-500', description: 'Centralized data storage' },
    { name: 'AI Server', icon: Camera, color: 'bg-orange-500', description: 'CCTV processing & ML models' },
  ];

  const hardware = [
    { name: 'CCTV Cameras', icon: Camera, description: 'AI-enabled material detection', status: 'Online' },
    { name: 'NFC Readers', icon: Radio, description: 'Vehicle identification', status: 'Online' },
    { name: 'Weighbridge', icon: Scale, description: 'Automated weight capture', status: 'Online' },
    { name: 'Network Gateway', icon: Network, description: 'Secure connectivity', status: 'Online' },
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
        <h1 className="text-3xl font-bold text-gray-900">System Architecture</h1>
        <p className="text-gray-600 mt-1">Complete system overview and infrastructure</p>
      </div>

      {/* Workflow Diagram */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">End-to-End Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {[
            { num: '1', label: 'Vehicle Entry', sublabel: 'NFC Scanning', icon: Radio, color: 'from-blue-500 to-blue-600' },
            { num: '2', label: 'Material Loading', sublabel: 'Loading Area', icon: Package, color: 'from-green-500 to-green-600' },
            { num: '3', label: 'AI Detection', sublabel: 'CCTV Analysis', icon: Camera, color: 'from-purple-500 to-purple-600' },
            { num: '4', label: 'Weighbridge', sublabel: 'Auto Weight', icon: Scale, color: 'from-orange-500 to-orange-600' },
            { num: '5', label: 'Billing', sublabel: 'Invoice Gen', icon: FileText, color: 'from-pink-500 to-pink-600' },
            { num: '6', label: 'Exit', sublabel: 'Permit Check', icon: CheckCircle, color: 'from-red-500 to-red-600' }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`absolute top-8 ${index < 5 ? 'left-16 w-full' : ''}`}>
                    {index < 5 && (
                      <div className="h-0.5 bg-gray-300 mt-8" />
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{step.num}. {step.label}</p>
                  <p className="text-xs text-gray-600">{step.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Software Components */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Software Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{component.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{component.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hardware Integration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Hardware Integration</h2>
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
          <h2 className="text-2xl font-bold">Data Security & Features</h2>
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

// Import required icons
import { Package, FileText, CheckCircle } from 'lucide-react';
