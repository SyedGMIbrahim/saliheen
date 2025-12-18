export default function AdminUsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 border rounded-lg px-4 py-2"
        />
        <select className="border rounded-lg px-4 py-2">
          <option>All Users</option>
          <option>Verified</option>
          <option>Pending</option>
          <option>Suspended</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-500" colSpan={6}>
                  No users found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
