import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const { user, isLoading } = useAuth();
    const {isAdmin, isPending} = useAdmin();
    const location = useLocation();
    
    if (isLoading || isPending) {
        return <progress className="progress w-56"></progress>
    }
  
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state = {{ from: location }} replace></Navigate>
};

export default AdminRoute;