// import { FaUpload } from "react-icons/fa";
// import useCourses from "../../../../Hooks/useCourses";
// import { Link } from "react-router-dom";

// const ManageCourse = () => {
//   const { courses, coursesLoading } = useCourses();

//   if (coursesLoading) {
//     return <div className=" text-center"> Loading...</div>;
//   }

//   console.log(courses);
//   return (
//     <div>
//       <div className=" flex justify-evenly my-">
//         <h2 className=" text-3xl">All Courses</h2>
//         <h2 className=" text-3xl">Total Courses : {courses.length}</h2>
//       </div>
//       <div className="overflow-x-auto w-full">
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Teacher Name</th>
//               <th>Course Title</th>
//               <th>Last date</th>
//               <th>Content Upload</th>
//               <th>Update </th>
//               <th>Delete </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row  */}
//             {courses?.map((course, index) => (
//               <tr key={course._id}>
//                 <th>{index + 1}</th>
//                 <td>{course.instructor}</td>
//                 <td>{course.title}</td>
//                 <td>
//                   {course.enrollment_start_date || course.enrollmentLastDate}
//                 </td>

//                 <td>
//                   {
//                     <Link to={`/dashboard/uploadContent/${course._id}`}>
//                       <span className=" flex flex-col btn btn-sm  w-[150px] text-white bg-blue-500 ">
//                         <FaUpload className=" text-white text-2xl "></FaUpload>
//                         <button>Upload Content</button>
//                       </span>
//                     </Link>
//                   }
//                 </td>
//                 <td>
//                   <button className="btn btn-sm text-white bg-blue-500 ">
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button className="btn btn-sm text-white bg-red-500 ">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageCourse;
