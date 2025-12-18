export default function UserProfilePage({ params }: { params: { userId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start space-x-6 mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400">Photo</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">User Name</h2>
                <p className="text-gray-600">28 • New York, USA</p>
                <p className="text-gray-600">Software Engineer</p>
              </div>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                ✓ Verified
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              Practicing Muslim seeking a life partner who shares similar values and goals...
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-gray-700">Bachelor's in Computer Science</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Islamic Practice</h3>
            <p className="text-gray-700">Practicing - Prays 5 times daily, follows Islamic principles</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Looking For</h3>
            <p className="text-gray-700">Someone who is kind, practicing, and family-oriented</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            Not Interested
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Interest
          </button>
        </div>
      </div>
    </div>
  );
}
