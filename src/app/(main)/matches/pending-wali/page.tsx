export default function PendingWaliPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pending Wali Approval</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {[1, 2].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Match Name {index}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                    Pending Wali
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">28 • New York, USA</p>
                <p className="text-gray-600 text-sm mb-4">Software Engineer</p>
                <p className="text-gray-700 text-sm mb-4">
                  Waiting for wali approval to proceed with communication.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Your wali has been notified and will review this match soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
