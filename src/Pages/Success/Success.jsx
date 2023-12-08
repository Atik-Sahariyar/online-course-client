import {  useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Success = () => {
    const axiosPublic = useAxiosPublic();

    const { data: successStudents, isPending} = useQuery({
        queryKey: ['successStudents'],
        queryFn: async() => {
            const res = await axiosPublic.get('/successStudents');
            return res.data;
        }
    });
    if(isPending){
        return  <div>Loading...</div>
    }
console.log(successStudents);
    return (
       <section className="bg-gray-100 py-12">
         <div className="container mx-auto">
             <h3 className=" text-3xl text-center">Our Success Students</h3>
             
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Teacher Card */}
          {successStudents?.map((student) =>  <div  key={student._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                <p className="text-gray-700 mb-2"> Achievement: {student.achievement}</p>
                <p className="text-gray-700 mb-2"> Feedback: {student.feedback}</p>
                <p className="text-gray-700 mb-2"> Course: {student.courseTitle}</p>
              </div>
            </div>
          )}
        </div>
        </div>
       </section>
    );
};

export default Success;