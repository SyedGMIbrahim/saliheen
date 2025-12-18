export default function ActiveMatchesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Active Matches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Profile Photo</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Match {index}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  ✓ Active
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">28 • New York, USA</p>
              <p className="text-gray-600 text-sm mb-4">Software Engineer</p>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Open Chat
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
                  Start Video Call
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
