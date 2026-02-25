import { useState } from 'react';
import { Camera, Upload, Zap, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProductDetection() {
  const { t } = useLanguage();
  const [isScanning, setIsScanning] = useState(false);
  const [detectionResult, setDetectionResult] = useState(null);
  const [fraudAlert, setFraudAlert] = useState(false);

  const materialTypes = [
    { name: 'Coal Grade A', confidence: 95, color: 'bg-gray-800' },
    { name: 'Coal Grade B', confidence: 87, color: 'bg-gray-700' },
    { name: 'Iron Ore', confidence: 92, color: 'bg-red-800' },
    { name: 'Limestone', confidence: 88, color: 'bg-gray-400' },
    { name: 'Copper Ore', confidence: 90, color: 'bg-orange-600' },
  ];

  const recentDetections = [
    { id: 1, material: 'Coal Grade A', confidence: 95, timestamp: '10:45 AM', batch: 'B-2301', quality: 'High' },
    { id: 2, material: 'Iron Ore', confidence: 89, timestamp: '10:32 AM', batch: 'B-2302', quality: 'Medium' },
    { id: 3, material: 'Coal Grade B', confidence: 87, timestamp: '10:18 AM', batch: 'B-2303', quality: 'High' },
    { id: 4, material: 'Limestone', confidence: 92, timestamp: '10:05 AM', batch: 'B-2304', quality: 'High' },
    { id: 5, material: 'Copper Ore', confidence: 88, timestamp: '09:48 AM', batch: 'B-2305', quality: 'Medium' },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setDetectionResult(null);
    setFraudAlert(false);

    // Simulate AI detection process
    setTimeout(() => {
      const randomMaterial = materialTypes[Math.floor(Math.random() * materialTypes.length)];
      const isFraud = Math.random() > 0.8; // 20% chance of fraud detection
      const declaredMaterial = isFraud ? materialTypes[(materialTypes.findIndex(m => m.name === randomMaterial.name) + 1) % materialTypes.length].name : randomMaterial.name;
      
      setDetectionResult({
        material: randomMaterial.name,
        declaredMaterial: declaredMaterial,
        confidence: 85 + Math.floor(Math.random() * 15),
        color: randomMaterial.color,
        properties: {
          purity: `${85 + Math.floor(Math.random() * 15)}%`,
          size: `${10 + Math.floor(Math.random() * 20)}mm avg`,
          moisture: `${2 + Math.floor(Math.random() * 5)}%`,
          quality: Math.random() > 0.3 ? 'High' : 'Medium'
        },
        batch: `B-${2300 + Math.floor(Math.random() * 100)}`,
        isFraud: isFraud
      });
      setFraudAlert(isFraud);
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.aiProductDetection}</h1>
        <p className="text-gray-600 mt-1">{t.materialIdentification}</p>
      </div>

      {/* Fraud Alert */}
      {fraudAlert && detectionResult && (
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8 animate-pulse">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-900 mb-2">⚠️ {t.fraudAlert?.toUpperCase() || 'FRAUD DETECTED'}!</h3>
              <p className="text-red-800 font-medium mb-2">Material mismatch identified</p>
              <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4">
                <div>
                  <p className="text-xs text-red-600 font-medium">DECLARED MATERIAL</p>
                  <p className="text-lg font-bold text-gray-900">{detectionResult.declaredMaterial}</p>
                </div>
                <div>
                  <p className="text-xs text-red-600 font-medium">ACTUAL MATERIAL (AI DETECTED)</p>
                  <p className="text-lg font-bold text-red-600">{detectionResult.material}</p>
                </div>
              </div>
              <p className="text-red-700 text-sm mt-3">Admin has been notified. Vehicle flagged for inspection.</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Total Scans</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-gray-600 mt-1">Today</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Avg Confidence</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">91.2%</p>
          <p className="text-sm text-gray-600 mt-1">All materials</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-gray-900">Fraud Detected</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600 mt-1">Cases flagged today</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detection Scanner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Live CCTV Detection</h2>
          
          {/* Camera View */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg aspect-video mb-4 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {isScanning ? (
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
                  <p className="text-white font-medium">AI analyzing material...</p>
                  <p className="text-gray-400 text-sm mt-1">CCTV processing in progress</p>
                </div>
              ) : detectionResult ? (
                <div className="text-center p-6 w-full">
                  {detectionResult.isFraud ? (
                    <AlertTriangle className="w-16 h-16 text-red-400 mb-4 mx-auto animate-pulse" />
                  ) : (
                    <CheckCircle className="w-16 h-16 text-green-400 mb-4 mx-auto" />
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${detectionResult.isFraud ? 'text-red-400' : 'text-white'}`}>
                    {detectionResult.material}
                  </h3>
                  <p className="text-gray-300 mb-4">Confidence: {detectionResult.confidence}%</p>
                  <div className="grid grid-cols-2 gap-3 text-left bg-black/30 rounded-lg p-4">
                    <div>
                      <p className="text-gray-400 text-xs">Purity</p>
                      <p className="text-white font-medium">{detectionResult.properties.purity}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Size</p>
                      <p className="text-white font-medium">{detectionResult.properties.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Moisture</p>
                      <p className="text-white font-medium">{detectionResult.properties.moisture}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Quality</p>
                      <p className="text-white font-medium">{detectionResult.properties.quality}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="w-16 h-16 text-gray-600 mb-4 mx-auto" />
                  <p className="text-gray-400">CCTV feed ready</p>
                  <p className="text-gray-500 text-sm mt-1">Click scan to start AI detection</p>
                </div>
              )}
            </div>
            {isScanning && (
              <div className="absolute inset-0 border-4 border-blue-500 animate-pulse" />
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              {isScanning ? 'Scanning...' : 'Start AI Scan'}
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload
            </button>
          </div>

          {detectionResult && !detectionResult.isFraud && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ Detection Complete - Material Verified</p>
              <p className="text-green-700 text-sm mt-1">
                Batch {detectionResult.batch} • Quality: {detectionResult.properties.quality}
              </p>
            </div>
          )}
        </div>

        {/* Recent Detections */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Detections</h2>
          <div className="space-y-3">
            {recentDetections.map((detection) => (
              <div key={detection.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{detection.material}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    detection.quality === 'High' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {detection.quality}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Batch: {detection.batch}</span>
                    <span className="text-gray-600">{detection.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${detection.confidence}%` }}
                      />
                    </div>
                    <span className="text-gray-600">{detection.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}