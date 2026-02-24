import { FileText, Download, CheckCircle, Clock, ArrowUpRight, Printer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Billing() {
  const { t } = useLanguage();
  const invoices = [
    { id: 'INV-2024-001', vehicle: 'TRK-001', customer: 'ABC Transport Ltd', material: 'Coal Grade A', netWeight: 28.5, rate: 8500, amount: 242250, status: 'Paid', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-002', vehicle: 'TRK-045', customer: 'XYZ Logistics', material: 'Iron Ore', netWeight: 45.2, rate: 12000, amount: 542400, status: 'Paid', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-003', vehicle: 'TRK-023', customer: 'Quick Haul Services', material: 'Limestone', netWeight: 32.1, rate: 7200, amount: 231120, status: 'Pending', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-004', vehicle: 'TRK-087', customer: 'Express Freight Co', material: 'Coal Grade B', netWeight: 29.8, rate: 7800, amount: 232440, status: 'Pending', date: '11 Feb 2026', dueDate: '18 Feb 2026' },
  ];

  const generateInvoice = (invoice) => {
    alert(`Generating invoice ${invoice.id} for ${invoice.customer}`);
  };

  const paidInvoices = invoices.filter(inv => inv.status === 'Paid');
  const pendingInvoices = invoices.filter(inv => inv.status === 'Pending');

  const summaryCards = [
    { title: t.totalInvoices, value: invoices.length, sub: `₹${(invoices.reduce((s, i) => s + i.amount, 0) / 100000).toFixed(2)}L`, subLabel: t.thisMonth, icon: FileText, color: '#6366f1', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
    { title: t.paidInvoices, value: paidInvoices.length, sub: `₹${(paidInvoices.reduce((s, i) => s + i.amount, 0) / 100000).toFixed(2)}L`, subLabel: t.collected, icon: CheckCircle, color: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #10b981)' },
    { title: t.pending, value: pendingInvoices.length, sub: `₹${(pendingInvoices.reduce((s, i) => s + i.amount, 0) / 100000).toFixed(2)}L`, subLabel: t.outstanding, icon: Clock, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.billingInvoicing}</h1>
            <p className="text-gray-500 mt-1">{t.manageInvoicesPayment}</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)' }}>
            <FileText className="w-5 h-5" />
            {t.createInvoice}
          </button>
        </div>
      </div>

      {/* Stats */}
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
              <p className="text-lg font-semibold mt-1" style={{ color: card.color }}>{card.sub}</p>
              <p className="text-sm text-gray-400 mt-1">{card.subLabel}</p>
            </div>
          );
        })}
      </div>

      {/* Invoice Sample */}
      <div className="glass-card rounded-2xl p-8 mb-8" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
        <div className="pb-6 mb-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>INVOICE</h2>
              <p className="text-gray-500">Smart Mines ERP System</p>
              <p className="text-gray-500">Mining Operations, Telangana</p>
              <p className="text-gray-500">Phone: +91 1234567890</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Invoice #: <span className="font-bold text-gray-900">INV-2024-001</span></p>
              <p className="text-gray-500">Date: <span className="font-bold text-gray-900">12 Feb 2026</span></p>
              <p className="text-gray-500">Due Date: <span className="font-bold text-gray-900">19 Feb 2026</span></p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2">Bill To:</h3>
          <p className="text-gray-700 font-medium">ABC Transport Ltd</p>
          <p className="text-gray-500">Rajesh Kumar</p>
          <p className="text-gray-500">Phone: +91 9876543210</p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full premium-table">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-600">{t.vehicle}</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-600">{t.material}</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-600">{t.weight} (Tons)</th>
                <th className="px-4 py-3 text-right text-sm font-bold text-gray-600">{t.rate}/Ton</th>
                <th className="px-4 py-3 text-right text-sm font-bold text-gray-600">{t.amount}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <td className="px-4 py-3 text-gray-900 font-medium">TRK-001</td>
                <td className="px-4 py-3 text-gray-900">Coal Grade A</td>
                <td className="px-4 py-3 text-gray-900">28.5</td>
                <td className="px-4 py-3 text-right text-gray-900">₹8,500</td>
                <td className="px-4 py-3 text-right text-gray-900 font-bold">₹2,42,250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <span className="text-gray-500">Subtotal:</span>
              <span className="text-gray-900 font-medium">₹2,42,250</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">GST (18%):</span>
              <span className="text-gray-900 font-medium">₹43,605</span>
            </div>
            <div className="flex justify-between py-3" style={{ borderTop: '2px solid rgba(99, 102, 241, 0.3)' }}>
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-gradient">₹2,85,855</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)' }}>
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-gray-50"
            style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
            <Printer className="w-4 h-4" />
            {t.print}
          </button>
        </div>
      </div>

      {/* Invoice List */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.allInvoices}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full premium-table">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.invoiceId}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.contact}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.amount}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.date}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.status}</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{invoice.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{invoice.customer}</p>
                    <p className="text-sm text-gray-400">{invoice.vehicle}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">₹{invoice.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{invoice.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${invoice.status === 'Paid'
                        ? 'badge-glow-green'
                        : 'badge-glow-orange'
                      }`} style={{
                        background: invoice.status === 'Paid' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                        color: invoice.status === 'Paid' ? '#16a34a' : '#ea580c',
                      }}>
                      {invoice.status === 'Paid' ? t.paid : t.pending}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => generateInvoice(invoice)}
                      className="flex items-center gap-1 font-medium text-sm transition-colors"
                      style={{ color: '#6366f1' }}
                    >
                      {t.generate} <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
