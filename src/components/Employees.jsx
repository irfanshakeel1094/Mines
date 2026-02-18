import { UserCog, UserPlus, Shield, DollarSign, Users } from 'lucide-react';

export function Employees() {
  const employees = [
    { id: 'EMP-001', name: 'Rajesh Kumar', role: 'Admin', department: 'Management', phone: '+91 9876543210', email: 'rajesh@smartmines.com', joinDate: 'Jan 2024', status: 'Active' },
    { id: 'EMP-002', name: 'Priya Sharma', role: 'Operator', department: 'Operations', phone: '+91 9876543211', email: 'priya@smartmines.com', joinDate: 'Feb 2024', status: 'Active' },
    { id: 'EMP-003', name: 'Amit Patel', role: 'Security', department: 'Security', phone: '+91 9876543212', email: 'amit@smartmines.com', joinDate: 'Mar 2024', status: 'Active' },
    { id: 'EMP-004', name: 'Sunita Reddy', role: 'Accounts', department: 'Finance', phone: '+91 9876543213', email: 'sunita@smartmines.com', joinDate: 'Jan 2024', status: 'Active' },
    { id: 'EMP-005', name: 'Vikram Singh', role: 'Operator', department: 'Operations', phone: '+91 9876543214', email: 'vikram@smartmines.com', joinDate: 'Apr 2024', status: 'Active' },
  ];

  const rolePermissions = {
    Admin: ['Full system access', 'User management', 'All reports', 'System settings', 'Data export'],
    Operator: ['Vehicle entry', 'Weighbridge', 'AI detection', 'Basic reports'],
    Security: ['Entry/exit verification', 'NFC scanning', 'Alert monitoring'],
    Accounts: ['Billing', 'Invoice generation', 'Payment tracking', 'Financial reports']};

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
            <p className="text-gray-600 mt-1">Manage staff members and role assignments</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-5 h-5" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Total Employees</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{employees.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <UserCog className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Operators</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{employees.filter(e => e.role === 'Operator').length}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Departments</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">4</p>
        </div>
      </div>

      {/* Role Permissions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Object.entries(rolePermissions).map(([role, permissions]) => (
          <div key={role} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{role}</h3>
            <ul className="space-y-2">
              {permissions.map((permission, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 mt-0.5">✓</span>
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Employee List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Employees</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{employee.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <UserCog className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{employee.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      employee.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                      employee.role === 'Operator' ? 'bg-blue-100 text-blue-700' :
                      employee.role === 'Security' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {employee.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{employee.department}</td>
                  <td className="px-6 py-4 text-gray-700">{employee.phone}</td>
                  <td className="px-6 py-4 text-gray-700">{employee.email}</td>
                  <td className="px-6 py-4 text-gray-700">{employee.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
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
