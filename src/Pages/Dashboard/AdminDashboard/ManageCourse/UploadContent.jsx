// import { useParams } from "react-router-dom";
// import useCourse from "../../../../Hooks/useCourse";
// import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// const UploadContent = () => {
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure()
//   const { register, handleSubmit, reset } = useForm();
//   const { course, courseLoading } = useCourse(id);

//   if (courseLoading) {
//     return <div className=" text-center">Loading...</div>;
//   }

//   const onSubmit = async (data) => {
//     const videoURL = data.videoURL;
//     const videoTitle = data.videoTitle;

//     const contentData = {
//       courseId: id,
//       videoURL,
//       videoTitle,
//     };

//     const res = await axiosSecure.post('/courseContents', contentData);
//     if(res.data){
//         Swal.fire("Video Upload successfull");
//         reset();
//     }
//   };
//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Upload {course.title} Video</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label
//             htmlFor="videoURL"
//             className="block text-gray-700 font-semibold mb-2"
//           >
//             Video Title
//           </label>
//           <input
//             type="text"
//             {...register("videoTitle")}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="Enter video  title"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="videoURL"
//             className="block text-gray-700 font-semibold mb-2"
//           >
//             Video URL
//           </label>
//           <input
//             type="text"
//             {...register("videoURL")}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="Enter video URL"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Upload Video
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadContent;
