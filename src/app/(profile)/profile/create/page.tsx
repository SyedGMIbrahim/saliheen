export default function ProfileCreatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Age</label>
            <input type="number" className="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="City, Country" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Education</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Profession</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">About Me</label>
            <textarea className="w-full border rounded-lg px-4 py-2" rows={5} placeholder="Tell us about yourself..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Islamic Practice Level</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Practicing</option>
              <option>Very Practicing</option>
              <option>Moderately Practicing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Profile Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500">Click to upload or drag and drop</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Preview Profile
          </button>
        </form>
      </div>
    </div>
  );
}
