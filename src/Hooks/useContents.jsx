import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useContents = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: courseVideos, isPending: videoLoading } = useQuery({
        queryKey: ['courseVideos'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/contents/${user.email}`);

            return res.data;
        }
    })

    return {courseVideos, videoLoading}
};

export default useContents;