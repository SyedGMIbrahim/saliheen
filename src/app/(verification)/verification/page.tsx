export default function VerificationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Identity Verification</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6">
          To ensure the safety and authenticity of our community, please upload a live photo and a valid ID document.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Live Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400 mt-2">Please take a clear photo of yourself</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Government ID</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400 mt-2">Driver's license, passport, or national ID</p>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Submit for Verification
          </button>
        </form>
      </div>
    </div>
  );
}
