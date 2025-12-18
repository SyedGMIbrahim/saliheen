export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Plan</h1>
      <p className="text-center text-gray-600 mb-12">Select a subscription plan that works best for you</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border rounded-lg p-8 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg text-gray-600">/mo</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              View profiles
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Send interests
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Basic chat
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>

        <div className="border-2 border-blue-600 rounded-lg p-8 hover:shadow-xl transition-shadow relative">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm">
            Popular
          </div>
          <h2 className="text-2xl font-bold mb-4">Premium</h2>
          <p className="text-4xl font-bold mb-6">$19.99<span className="text-lg text-gray-600">/mo</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Everything in Basic
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Video calls
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Priority support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Advanced filters
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>

        <div className="border rounded-lg p-8 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Lifetime</h2>
          <p className="text-4xl font-bold mb-6">$199<span className="text-lg text-gray-600">/once</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Everything in Premium
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Lifetime access
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              No recurring fees
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              VIP support
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}
