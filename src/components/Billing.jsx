import { FileText, Download, IndianRupee, CheckCircle, Clock } from 'lucide-react';

export function Billing() {
  const invoices = [
    { id: 'INV-2024-001', vehicle: 'TRK-001', customer: 'ABC Transport Ltd', material: 'Coal Grade A', netWeight: 28.5, rate: 8500, amount: 242250, status: 'Paid', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-002', vehicle: 'TRK-045', customer: 'XYZ Logistics', material: 'Iron Ore', netWeight: 45.2, rate: 12000, amount: 542400, status: 'Paid', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-003', vehicle: 'TRK-023', customer: 'Quick Haul Services', material: 'Limestone', netWeight: 32.1, rate: 7200, amount: 231120, status: 'Pending', date: '12 Feb 2026', dueDate: '19 Feb 2026' },
    { id: 'INV-2024-004', vehicle: 'TRK-087', customer: 'Express Freight Co', material: 'Coal Grade B', netWeight: 29.8, rate: 7800, amount: 232440, status: 'Pending', date: '11 Feb 2026', dueDate: '18 Feb 2026' },
  ];

  const generateInvoice = (invoice) => {
    alert(`Generating invoice ${invoice.id} for ${invoice.customer}`);
  };

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidInvoices = invoices.filter(inv => inv.status === 'Paid');
  const pendingInvoices = invoices.filter(inv => inv.status === 'Pending');

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Billing & Invoicing</h1>
            <p className="text-gray-600 mt-1">Manage invoices and payment tracking</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FileText className="w-5 h-5" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Total Invoices</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{invoices.length}</p>
          <p className="text-2xl font-semibold text-gray-700 mt-1">₹{(invoices.reduce((sum, inv) => sum + inv.amount, 0) / 100000).toFixed(2)}L</p>
          <p className="text-sm text-gray-600 mt-1">This month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Paid Invoices</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{paidInvoices.length}</p>
          <p className="text-sm text-gray-600 mt-1">₹{(paidInvoices.reduce((sum, inv) => sum + inv.amount, 0) / 100000).toFixed(2)}L</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Pending</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{pendingInvoices.length}</p>
          <p className="text-sm text-gray-600 mt-1">₹{(pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0) / 100000).toFixed(2)}L</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Total Invoices</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{invoices.length}</p>
          <p className="text-sm text-gray-600 mt-1">This month</p>
        </div>
      </div>

      {/* Invoice Sample */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
        <div className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">INVOICE</h2>
              <p className="text-gray-600">Smart Mines ERP System</p>
              <p className="text-gray-600">Mining Operations, Telangana</p>
              <p className="text-gray-600">Phone: +91 1234567890</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Invoice #: <span className="font-semibold text-gray-900">INV-2024-001</span></p>
              <p className="text-gray-600">Date: <span className="font-semibold text-gray-900">12 Feb 2026</span></p>
              <p className="text-gray-600">Due Date: <span className="font-semibold text-gray-900">19 Feb 2026</span></p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
          <p className="text-gray-700 font-medium">ABC Transport Ltd</p>
          <p className="text-gray-600">Rajesh Kumar</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Vehicle</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Material</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight (Tons)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Rate/Ton</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 text-gray-900">TRK-001</td>
                <td className="px-4 py-3 text-gray-900">Coal Grade A</td>
                <td className="px-4 py-3 text-gray-900">28.5</td>
                <td className="px-4 py-3 text-right text-gray-900">₹8,500</td>
                <td className="px-4 py-3 text-right text-gray-900 font-medium">₹2,42,250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-2 border-t border-gray-200">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-900 font-medium">₹2,42,250</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">GST (18%):</span>
              <span className="text-gray-900 font-medium">₹43,605</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-300">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-gray-900">₹2,85,855</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Print Invoice
          </button>
        </div>
      </div>

      {/* Invoice List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Invoices</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{invoice.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{invoice.customer}</p>
                    <p className="text-sm text-gray-600">{invoice.vehicle}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">₹{invoice.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{invoice.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => generateInvoice(invoice)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Generate
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
