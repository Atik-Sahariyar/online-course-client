import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();


 

    const links = <>

        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/teachers">Teachers</NavLink></li>
        <li> <NavLink to="/success">Success</NavLink></li>
        
        {
            user ? 
            <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
            :
           ''
        }
    

    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }



    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=" flex flex-col md:flex-row lg:flex-row items-center">
                    <img className=" w-16 h-16 rounded-full" src="https://i.ibb.co/F05kTXh/education-logo.webp" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Online Course</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <div className=" flex flex-col md:flex-row lg:flex-row gap-1 items-center">
                            <div className=" flex flex-col md:flex-row lg:flex-row items-center">
                                <img src={user?.photoURL} className=" w-12 h-12 rounded-full" alt="" />
                                <p>{user?.displayName}</p></div>
                            <button onClick={handleLogOut} className="btn">Sign Out</button>
                        </div>
                    )
                        :
                        <Link to="/login">
                            <button className="btn">LogIn</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;