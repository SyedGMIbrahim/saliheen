export default function ProfilePreviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Preview Your Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400">Photo</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Your Name</h2>
            <p className="text-gray-600">Age • Location</p>
            <p className="text-gray-600">Education • Profession</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-700">Your bio will appear here...</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Islamic Practice</h3>
            <p className="text-gray-700">Practice level will appear here...</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Looking For</h3>
            <p className="text-gray-700">Your preferences will appear here...</p>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            Edit Profile
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Publish Profile
          </button>
        </div>
      </div>
    </div>
  );
}
