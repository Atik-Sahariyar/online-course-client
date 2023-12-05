import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
            <Link to ="/">
              <li className="px-6 py-2 hover:bg-gray-700">
                <p className="block">
                  Home
                </p>
              </li>
            </Link>
            <Link to= '/dashboard/addCourse'>
              <li className="px-6 py-2 hover:bg-gray-700">
                <p className="block"> Add New Course </p>
              </li>
            </Link>
            <Link>
              <li className="px-6 py-2 hover:bg-gray-700">
                <p className="block">
                  Manage Coures
                </p>
              </li>
            </Link>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
        <div className="h-16 flex items-center justify-center border-t border-gray-700">
          <a className="text-gray-400 hover:text-white">
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
