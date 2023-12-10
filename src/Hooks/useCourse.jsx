import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourse = (id) => {
  const axiosPublic = useAxiosPublic();
  const { data: course, isPending: courseLoading, refetch: courseRefetch} = useQuery({
    queryKey: ['courseId', id],
    queryFn: async () => {
        const res = await axiosPublic.get(`/courses/${id}`);
        return res.data;
    }
  });

  return { course , courseLoading, courseRefetch };
};

export default useCourse;
