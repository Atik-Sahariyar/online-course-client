import CourseCard from "./CourseCard";
import useCourses from "../../../Hooks/useCourses";


const Courses = () => {
    const { courses, coursesLoading } = useCourses();

    if(coursesLoading){
        return <div className=" text-center h-screen my-auto">Loading...</div>
    }
    

    return (
        <div className="my-10">
            <h3 className=" text-5xl text-center font-bold mb-8">Our Courses</h3>
           <div className=" flex justify-center items-center">
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    courses.map(course => <CourseCard key={course._id} course ={course}></CourseCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Courses;