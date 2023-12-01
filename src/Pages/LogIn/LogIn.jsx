import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { googleSignIn, signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    const logInWithEmailAndPassword = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.log(error));
    }
    return (
      <div className="hero min-h-screen bg-base-200">
          <div  className="hero-content flex-col-reverse lg:flex-row  text-center">
            <div className=" w-1/2 mr-12">
            <img src="https://i.ibb.co/s6f1WZ6/login.png" className="" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div >
                    <h3 className="text-3xl my-8">Please LogIn</h3>
                    <form onSubmit={logInWithEmailAndPassword} className=" mx-auto w-1/2">
                        <p className=" text-red-600">{errorMessage ? errorMessage : ''}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <button className="btn btn-primary w-full">Sign In</button>
                        </div>

                    </form>
                </div>
                <div className=" text-center">
                    <p>---------- Or -----------</p>
                    <button type="button" onClick={() => handleGoogleSignIn()} className=" text-blue-600 underline border px-3 py-1 rounded-md hover:bg-gray-400">Google</button>
                </div>

                <p className=" my-2 text-center">Do not have an account <Link to="/signup" className=" text-blue-800 underline">Sign Up</Link></p>
            </div>
        </div>
      </div>
    );
};

export default LogIn;