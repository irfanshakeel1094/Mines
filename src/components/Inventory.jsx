import { Package, TrendingUp, TrendingDown, AlertTriangle, ArrowUpRight, Plus, Save, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Inventory() {
  const { t } = useLanguage();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    material: '',
    availableQty: '',
    shiftedQty: '',
    unit: 'tons',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New inventory entry:', formData);
    // Add your logic to save the data
    setFormData({
      material: '',
      availableQty: '',
      shiftedQty: '',
      unit: 'tons',
      location: ''
    });
    setShowAddForm(false);
  };

  const inventory = [
    { id: 1, material: 'Coal Grade A', quantity: 2450, unit: 'tons', status: 'High', trend: 'up', change: '+12%', location: 'Warehouse A', max: 3000 },
    { id: 2, material: 'Coal Grade B', quantity: 1820, unit: 'tons', status: 'Medium', trend: 'down', change: '-5%', location: 'Warehouse A', max: 3000 },
    { id: 3, material: 'Iron Ore', quantity: 890, unit: 'tons', status: 'Low', trend: 'down', change: '-18%', location: 'Warehouse B', max: 3000 },
    { id: 4, material: 'Limestone', quantity: 3150, unit: 'tons', status: 'High', trend: 'up', change: '+8%', location: 'Warehouse C', max: 4000 },
    { id: 5, material: 'Copper Ore', quantity: 650, unit: 'tons', status: 'Low', trend: 'down', change: '-12%', location: 'Warehouse B', max: 3000 },
    { id: 6, material: 'Bauxite', quantity: 1950, unit: 'tons', status: 'Medium', trend: 'up', change: '+6%', location: 'Warehouse D', max: 3000 },
  ];

  const alerts = [
    { id: 1, message: 'Iron Ore stock below minimum threshold', severity: 'high', time: '2 hours ago' },
    { id: 2, message: 'Copper Ore requires restocking', severity: 'high', time: '5 hours ago' },
    { id: 3, message: 'Coal Grade B trending downward', severity: 'medium', time: '1 day ago' },
  ];

  const totalStock = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter(item => item.status === 'Low').length;

  const statusConfig = {
    High: { bg: 'rgba(34, 197, 94, 0.1)', color: '#16a34a', barColor: 'linear-gradient(90deg, #22c55e, #10b981)' },
    Medium: { bg: 'rgba(245, 158, 11, 0.1)', color: '#d97706', barColor: 'linear-gradient(90deg, #f59e0b, #d97706)' },
    Low: { bg: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', barColor: 'linear-gradient(90deg, #ef4444, #dc2626)' },
  };

  const summaryCards = [
    { title: t.totalItems, value: totalStock.toLocaleString(), sub: 'tons', icon: Package, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { title: 'Material Types', value: inventory.length, sub: 'active items', icon: TrendingUp, color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { title: t.lowStock, value: lowStockItems, sub: 'items need attention', icon: AlertTriangle, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.inventory}</h1>
        <p className="text-gray-500 mt-1">Real-time stock levels and material tracking</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="glass-card rounded-2xl p-6 card-hover-lift"
              style={{ borderTop: `3px solid ${card.color}`, animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: card.gradient }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm text-gray-400 mt-1">{card.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="glass-card rounded-2xl p-6 mb-8"
          style={{ borderLeft: '4px solid #f59e0b', background: 'rgba(245, 158, 11, 0.03)' }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5" style={{ color: '#f59e0b' }} />
            <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Stock Alerts</h2>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:scale-[1.003]"
                style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${alert.severity === 'high' ? 'animate-pulse' : ''}`}
                    style={{ background: alert.severity === 'high' ? '#ef4444' : '#f59e0b' }} />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-400">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Input Section */}
      <div className="glass-card rounded-2xl p-6 mb-8"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.03))' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.manualEntry}
              </h2>
              <p className="text-xs text-gray-500">Add available and shifted items</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2"
            style={{
              background: showAddForm ? 'rgba(239,68,68,0.1)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: showAddForm ? '#dc2626' : 'white',
              boxShadow: showAddForm ? 'none' : '0 4px 12px rgba(99,102,241,0.3)'
            }}>
            {showAddForm ? (
              <>
                <X className="w-4 h-4" />
                {t.cancel}
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                {t.addEntry}
              </>
            )}
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in-50 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Material Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.materialName}
                </label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Coal Grade A"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-all duration-300 font-medium"
                  style={{ background: 'white' }}
                />
              </div>

              {/* Available Quantity */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.availableQuantity}
                </label>
                <input
                  type="number"
                  name="availableQty"
                  value={formData.availableQty}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 1500"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all duration-300 font-medium"
                  style={{ background: 'white' }}
                />
              </div>

              {/* Shifted Quantity */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.shiftedQuantity}
                </label>
                <input
                  type="number"
                  name="shiftedQty"
                  value={formData.shiftedQty}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 500"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all duration-300 font-medium"
                  style={{ background: 'white' }}
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.unit}
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-all duration-300 font-medium"
                  style={{ background: 'white' }}>
                  <option value="tons">Tons</option>
                  <option value="kg">Kilograms</option>
                  <option value="lbs">Pounds</option>
                  <option value="units">Units</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.location}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Warehouse A"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-all duration-300 font-medium"
                  style={{ background: 'white' }}
                />
              </div>

              {/* Summary Card */}
              <div className="flex items-center justify-center p-4 rounded-lg"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))' }}>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.remainingStock}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formData.availableQty && formData.shiftedQty 
                      ? (parseFloat(formData.availableQty) - parseFloat(formData.shiftedQty)).toFixed(2)
                      : '0.00'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{formData.unit || 'tons'}</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
                }}>
                <Save className="w-4 h-4" />
                {t.submit}
              </button>
            </div>
          </form>
        )}

        {/* Info Cards */}
        {!showAddForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg" style={{ background: 'rgba(16,185,129,0.1)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5" style={{ color: '#10b981' }} />
                <h3 className="font-bold text-gray-900">Available Items</h3>
              </div>
              <p className="text-sm text-gray-600">Track current stock levels and available inventory</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(245,158,11,0.1)' }}>
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpRight className="w-5 h-5" style={{ color: '#f59e0b' }} />
                <h3 className="font-bold text-gray-900">Shifted Items</h3>
              </div>
              <p className="text-sm text-gray-600">Record items moved or dispatched from inventory</p>
            </div>
          </div>
        )}
      </div>

      {/* Inventory Cards (visual stock bars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {inventory.map((item, i) => {
          const sc = statusConfig[item.status];
          const percentage = Math.min(100, (item.quantity / item.max) * 100);
          return (
            <div key={item.id} className="glass-card rounded-2xl p-6 card-hover-lift"
              style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.08}s both` }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">{item.material}</h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: sc.bg, color: sc.color }}>
                  {item.status}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-gray-900">{item.quantity.toLocaleString()}</span>
                <span className="text-sm text-gray-400">{item.unit}</span>
              </div>
              {/* Stock Level Bar */}
              <div className="mt-3 mb-3">
                <div className="rounded-full h-2.5 overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%`, background: sc.barColor }} />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-xs text-gray-400">{item.location}</span>
                  <span className="text-xs font-bold" style={{ color: sc.color }}>{Math.round(percentage)}%</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                {item.trend === 'up' ? (
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: '#16a34a' }} />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" style={{ color: '#dc2626' }} />
                )}
                <span className="text-sm font-bold"
                  style={{ color: item.trend === 'up' ? '#16a34a' : '#dc2626' }}>
                  {item.change}
                </span>
                <span className="text-xs text-gray-400 ml-1">vs last week</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
