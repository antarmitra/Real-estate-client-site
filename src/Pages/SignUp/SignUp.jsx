import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import signup from '../../assets/signup/signup.json'
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useAuth();
    const Provider = new GoogleAuthProvider()
    const auth = getAuth(app);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        // Create User
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile update info');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account Created Successfully",
                            showConfirmButton: false,
                            timer: 2500
                        });
                    })
                navigate('/')
            })
    }

    // sign in with google
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen login">
                <div className="hero-content flex-col lg:flex-row login shadow-2xl">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={signup}></Lottie>
                    </div>
                    <div className="card md:w-1/2 max-w-sm ">
                        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-base font-medium">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-base font-medium">Photo URL</span>
                                </label>
                                <input type="name" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-base font-medium">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 character</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, one lowercase, one number and one speciall character</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" value="Sign Up" />
                            </div>
                            {/* google sign in */}
                            <h2 className="text-center texl-lg font-medium">-------Sign Up with-------- </h2>
                            <div className=" mt-5 flex gap-6 mx-auto">
                                <div>
                                    <button className="btn btn-outline btn-primary ">
                                        <FcGoogle onClick={handleGoogleSingIn} className="lg:text-3xl md:text-lg"></FcGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-outline ">
                                        <FiGithub className="lg:text-3xl md:text-lg"></FiGithub>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className=" text-xl text-center"><small>Already have an account ? <Link className="text-sky-500 font-bold" to="/login">Go to login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;