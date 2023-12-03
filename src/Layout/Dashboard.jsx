

const Dashboard = ()=> {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-2xl font-bold">Dashboard</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Sidebar links */}
          <ul className="py-4">
            <li className="px-6 py-2 hover:bg-gray-700">
              <a href="#" className="block">Home</a>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700">
              <a href="#" className="block">Analytics</a>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700">
              <a href="#" className="block">Settings</a>
            </li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
        <div className="h-16 flex items-center justify-center border-t border-gray-700">
          <a href="#" className="text-gray-400 hover:text-white">Logout</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Your main content here */}
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  );
}

export default Dashboard;
