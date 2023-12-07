import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin, isPending } = useAdmin();

  if (isPending) {
    return <div className=" text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white lg:w-64 flex lg:flex-col lg:h-screen">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-2xl font-bold">Dashboard</span>
        </div>
        <div className="flex-1  overflow-y-auto">
          {/* Sidebar links */}
          <ul className="py-4 flex lg:flex-col gap-2 items-center">
            <Link to="/">
              <li className="md:px-6 md:py-2 px-2  text-white bg-gray-400  hover:bg-gray-700">
                <p className="block">Home</p>
              </li>
            </Link>
            {isAdmin ? (
              <>
                <Link to="/dashboard/addCourse">
                  <li className="md:px-6 md:py-2   px-1 bg-gray-400 hover:bg-gray-700">
                    <p className="block">Add New Course</p>
                  </li>
                </Link>
                <Link to="/dashboard/manageCourse">
                  <li className="md:px-6 md:py-2   px-1 bg-gray-400 hover:bg-gray-700">
                    <p className="block">Manage Courses</p>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/myClasses">
                  <li className="md:px-6 md:py-2   px-1 bg-gray-400 hover:bg-gray-700">
                    <p className="block">My Classes</p>
                  </li>
                </Link>
                <Link to="/dashboard/myCourse">
                  <li className="md:px-6 md:py-2   px-1 bg-gray-400 hover:bg-gray-700">
                    <p className="block">My Courses</p>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className="h-16 flex items-center justify-center border-t border-gray-700">
          <a className="text-gray-400 hover:text-white">Logout</a>
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
