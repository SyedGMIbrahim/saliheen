export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Pending Verifications</h3>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Active Matches</h3>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Revenue (MTD)</h3>
          <p className="text-3xl font-bold">$12,345</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a href="/admin/verifications" className="block w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">Review Verifications</p>
              <p className="text-sm text-gray-500">42 pending approvals</p>
            </a>
            <a href="/admin/users" className="block w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">Manage Users</p>
              <p className="text-sm text-gray-500">View and manage all users</p>
            </a>
            <a href="/admin/reports" className="block w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">View Reports</p>
              <p className="text-sm text-gray-500">Check user reports and issues</p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-4 border-b">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 pb-4 border-b">
              <div className="w-10 h-10 bg-green-100 rounded-full"></div>
              <div>
                <p className="font-medium">Verification approved</p>
                <p className="text-sm text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
              <div>
                <p className="font-medium">New subscription</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
