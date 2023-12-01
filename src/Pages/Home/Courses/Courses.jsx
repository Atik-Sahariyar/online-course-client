import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const Courses = () => {
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {

        fetch('courses.json')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
        })
    },[])

    return (
        <div className="my-10">
            <h3 className=" text-5xl text-center font-bold mb-8">Our Courses</h3>
           <div className=" flex justify-center items-center">
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    courses.map(course => <CourseCard key={course.id} course ={course}></CourseCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Courses;