export default function UserTypePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Profile Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Male</h2>
          <p className="text-gray-600">Create a male profile</p>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Female</h2>
          <p className="text-gray-600">Create a female profile</p>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Wali</h2>
          <p className="text-gray-600">Register as a guardian</p>
        </div>
      </div>
    </div>
  );
}
