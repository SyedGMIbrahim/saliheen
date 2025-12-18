export default function WaliPendingMatchesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pending Matches to Review</h1>
      <p className="text-gray-600 mb-8">
        As a wali (guardian), please review these potential matches for your ward.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {[1, 2].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Potential Match {index}</h3>
                <p className="text-gray-600 mb-2">30 • Los Angeles, USA</p>
                <p className="text-gray-600 mb-2">Doctor at City Hospital</p>
                <p className="text-gray-700 mb-4">
                  Bachelor's in Medicine • Practicing Muslim • Family-oriented
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Match Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Your Ward:</span>
                  <span className="ml-2 font-medium">Sarah Ahmed</span>
                </div>
                <div>
                  <span className="text-gray-600">Matched On:</span>
                  <span className="ml-2 font-medium">Dec 14, 2025</span>
                </div>
                <div>
                  <span className="text-gray-600">Compatibility:</span>
                  <span className="ml-2 font-medium">85%</span>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <span className="ml-2 font-medium text-yellow-600">Awaiting Review</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
                View Full Profile
              </button>
              <button className="flex-1 border border-red-300 text-red-600 py-3 rounded-lg hover:bg-red-50">
                Decline
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Approve Match
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
