import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Teachers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: teachers, isPending } = useQuery({
    queryKey: ["teachers", 'teacher'],
    queryFn: async () => {
      const res = await axiosPublic.get("/teachers");
      return res.data;
    },
  });

  if (isPending) {
    return <div className=" text-center">Loading...</div>;
  }

 
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Meet Our Teachers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Teacher Card */}
          {teachers?.map((teacher) =>  <div  key={teacher._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-700 mb-2">{teacher.designation}</p>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
