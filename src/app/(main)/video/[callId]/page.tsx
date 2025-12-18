export default function VideoCallPage({ params }: { params: { callId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-lg overflow-hidden h-[calc(100vh-8rem)]">
        {/* Video Grid */}
        <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
          {/* Participant 1 */}
          <div className="bg-gray-800 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">S</span>
              </div>
              <p className="text-white">Sarah</p>
              <p className="text-gray-400 text-sm">Participant</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded">
              <span className="text-white text-sm">🎤 Muted</span>
            </div>
          </div>

          {/* You */}
          <div className="bg-gray-800 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">You</span>
              </div>
              <p className="text-white">You</p>
              <p className="text-gray-400 text-sm">Active</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded">
              <span className="text-white text-sm">📹 Camera On</span>
            </div>
          </div>

          {/* Wali */}
          <div className="bg-gray-800 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">W</span>
              </div>
              <p className="text-white">Wali Ahmad</p>
              <p className="text-gray-400 text-sm">Guardian</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded">
              <span className="text-white text-sm">📹 Camera On</span>
            </div>
          </div>
        </div>

        {/* Call Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button className="w-14 h-14 bg-gray-700 rounded-full hover:bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xl">🎤</span>
          </button>
          <button className="w-14 h-14 bg-gray-700 rounded-full hover:bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xl">📹</span>
          </button>
          <button className="w-14 h-14 bg-red-600 rounded-full hover:bg-red-700 flex items-center justify-center">
            <span className="text-white text-xl">📞</span>
          </button>
          <button className="w-14 h-14 bg-gray-700 rounded-full hover:bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xl">⚙️</span>
          </button>
        </div>
      </div>

      {/* Call Info */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-4 text-center">
        <p className="text-sm text-gray-600">
          Three-party video call with wali supervision
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Call Duration: 15:32 • All participants present
        </p>
      </div>
    </div>
  );
}
