import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to ="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object  
}
export default PrivateRoute;