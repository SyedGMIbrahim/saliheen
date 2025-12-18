export default function VerificationPendingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Verification Pending</h1>
          <p className="text-gray-700 mb-4">
            Thank you for submitting your verification documents. Our team is reviewing your submission.
          </p>
          <p className="text-gray-600">
            This process typically takes 24-48 hours. We'll notify you via email once your verification is complete.
          </p>
        </div>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            You'll receive an email notification once your account is verified.
          </p>
        </div>
      </div>
    </div>
  );
}
