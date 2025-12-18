export default function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Browse Profiles</h1>
        <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Profile Photo</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Name {index}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  ✓ Verified
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">28 • New York, USA</p>
              <p className="text-gray-600 text-sm mb-4">Software Engineer</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                Practicing Muslim seeking a life partner who shares similar values...
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Previous</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
