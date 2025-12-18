export default function SubscriptionSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Confirmed!</h1>
          <p className="text-gray-700 mb-4">
            Thank you for subscribing. Your payment has been processed successfully.
          </p>
          <p className="text-gray-600">
            You now have full access to all features. Let's complete your profile!
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Create Your Profile
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
            View Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
