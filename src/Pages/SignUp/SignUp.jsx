import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}` || '';

const SignUp = () => {
  const { createUser, updateUserProfiole } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  // sign up function
  const handleSignUp = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // const imageFiile = { image: data.profilePic[0] };
    // const url = await axios.post(image_hosting_api, imageFiile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // }) ;
    // console.log( 'url:',url);
    let photoURL = "";
    // if (url?.data) {
    //   photoURL = url.data?.data?.display_url;
    // }
    createUser(email, password).then(async () => {
      updateUserProfiole(name, photoURL).then(async () => {
        const userInfo = {
          name,
          email,
          photo: photoURL,
          password,
        };
        reset();
        console.log("user info: ", userInfo);
        const res = await axiosPublic.post("/users", userInfo);
        if (res.data?._id) {
          console.log(res.data);
          Swal.fire("Sign up successfull");
          navigate("/");
          reset();
        }
      });
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src="https://i.ibb.co/s6f1WZ6/login.png" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className=" text-red-500">Name is required</span>
              )}
            </div>
            <div className="  form-control w-full my-6">
              <label className="label">
                <span className="label-text">Choose Photo</span>
              </label>
              <input
                {...register("profilePic")}
                type="file"
                className=" file-input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className=" text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div>
            <p className="text-center mb-4">
              Have an account?{" "}
              <Link className=" text-orange-600" to="/login">
                LogIn
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
