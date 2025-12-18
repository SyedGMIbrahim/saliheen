export default function ChatPage({ params }: { params: { matchId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white rounded-lg shadow-md h-[calc(100vh-12rem)] flex flex-col">
        {/* Chat Header */}
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xs">Photo</span>
            </div>
            <div>
              <h2 className="font-semibold">Match Name</h2>
              <p className="text-sm text-gray-500">Active • Including Wali</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Video Call
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Profile
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 bg-gray-100 inline-block px-4 py-2 rounded-full">
              This is a three-party conversation including the wali
            </p>
          </div>

          {/* Sample Messages */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-200 rounded-full flex-shrink-0"></div>
            <div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                <p className="text-sm font-medium mb-1">Sarah</p>
                <p>Assalamu Alaikum! Nice to meet you.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 justify-end">
            <div>
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                <p className="text-sm font-medium mb-1">You</p>
                <p>Wa Alaikum Assalam! It's great to connect with you.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">10:32 AM</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-200 rounded-full flex-shrink-0"></div>
            <div>
              <div className="bg-green-50 rounded-lg p-3 max-w-md border border-green-200">
                <p className="text-sm font-medium mb-1 text-green-800">Wali (Ahmad)</p>
                <p>May Allah bless this conversation. Please feel free to get to know each other.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
