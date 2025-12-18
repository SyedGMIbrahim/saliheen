export default function AdminReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Reports</h1>

      <div className="mb-6 flex gap-4">
        <select className="border rounded-lg px-4 py-2">
          <option>All Reports</option>
          <option>Pending Review</option>
          <option>Under Investigation</option>
          <option>Resolved</option>
        </select>
        <select className="border rounded-lg px-4 py-2">
          <option>All Types</option>
          <option>Inappropriate Behavior</option>
          <option>Fake Profile</option>
          <option>Harassment</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Report #1234</h3>
              <p className="text-sm text-gray-500">Submitted 2 hours ago</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
              Pending Review
            </span>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-700"><strong>Reporter:</strong> User #5678</p>
            <p className="text-sm text-gray-700"><strong>Reported User:</strong> User #9012</p>
            <p className="text-sm text-gray-700"><strong>Type:</strong> Inappropriate Behavior</p>
          </div>
          <p className="text-gray-600 mb-4">
            Description of the reported issue...
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Investigate
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Dismiss
            </button>
          </div>
        </div>

        <div className="text-center text-gray-500 py-8">
          No more reports to display
        </div>
      </div>
    </div>
  );
}
