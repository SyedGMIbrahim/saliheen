export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Profile Views</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Interests Sent</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Interests Received</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Active Matches</h3>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-4 border-b">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-medium">New interest received</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 pb-4 border-b">
              <div className="w-10 h-10 bg-green-100 rounded-full"></div>
              <div>
                <p className="font-medium">Match approved by wali</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
              <div>
                <p className="font-medium">Profile viewed</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">Browse Profiles</p>
              <p className="text-sm text-gray-500">Find your potential match</p>
            </button>
            <button className="w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">View Interests</p>
              <p className="text-sm text-gray-500">See who's interested in you</p>
            </button>
            <button className="w-full text-left border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <p className="font-medium">Edit Profile</p>
              <p className="text-sm text-gray-500">Update your information</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
