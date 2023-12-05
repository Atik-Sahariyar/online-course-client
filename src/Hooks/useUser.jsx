import {  useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const email = user?.email;
    const { data: loggedInUser, isPending: userLoading } = useQuery({
    queryKey: ['loggedInUser'],
    queryFn: async () => {
        const res = await axiosSecure.get(`users/${email}`);
        return res?.data
    }
    });
    console.log(loggedInUser);
    const courseIds = loggedInUser?.courseIds
    console.log(courseIds);
    return {courseIds, loggedInUser, userLoading }
};

export default useUser;