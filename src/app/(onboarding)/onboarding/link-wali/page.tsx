export default function LinkWaliPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Invite Your Wali (Guardian)</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6">
          As per Islamic tradition, please invite your wali (guardian) to oversee your matrimonial journey.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Wali's Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Enter wali's name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Wali's Email</label>
            <input type="email" className="w-full border rounded-lg px-4 py-2" placeholder="Enter wali's email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Relationship</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Father</option>
              <option>Brother</option>
              <option>Uncle</option>
              <option>Other Male Guardian</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Invitation
          </button>
        </form>
      </div>
    </div>
  );
}
