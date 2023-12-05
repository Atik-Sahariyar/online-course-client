import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCourse = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };
  // course creation function
  const handleAddCourse = async (data) => {
    const courseTitle = data.title;
    const instructor = data.instructor;
    const syllabus = data.syllabus;
    const description = data.description;
    const duration = data.duration;
    const price = data.price;
    
    
    const imageFiile = { image: data.imageURL[0] };

    const url = await axios.post(image_hosting_api, imageFiile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (url?.data) {
      const imageURL = url.data?.data?.display_url;

      const courseInfo = {
        courseTitle,
        instructor,
        enrollmentStartDate: startDate,
        enrollmentLastDate: endDate,
        syllabus,
        description,
        duration,
        price,
        imageURL,
      };
 
         try{
          const res = await axiosSecure.post('/courses',courseInfo)
          if(res.data._id){
            Swal.fire("New Course added successfull");
            reset();
            setStartDate('');
            setEndDate('')
          }

         }catch(error){
          console.log(error);
         }
    }
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a new course</h2>
      <form onSubmit={handleSubmit(handleAddCourse)}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Course title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("title")}
                placeholder="Course Title"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("instructor")}
                placeholder="Instructor Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Enrollment start date</span>
            </label>
            <label className="input-group">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy" // Date format example: DD/MM/YYYY
                className="input input-bordered w-full"
                placeholderText="Enrollment start date"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Enrollment last date</span>
            </label>
            <label className="input-group">
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="dd/MM/yyyy" // Date format example: DD/MM/YYYY
                className="input input-bordered w-full"
                placeholderText="Enrollment last date"
                required
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Syllabus</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("syllabus")}
                placeholder="syllabus"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("description")}
                placeholder="Description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form  url row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Course duration</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("duration")}
                placeholder="Course duration"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("price")}
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("imageURL")}
              type="file"
              className=" file-input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Course" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCourse;
