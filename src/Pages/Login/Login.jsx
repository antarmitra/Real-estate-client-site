import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/login/login.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";


const Login = () => {
    const [disable, setDisable] = useState(true);

    const { singIn } = useAuth();
    const navigate = useNavigate();
    const Provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathName || '/';
    console.log('state in the location login page', location.state);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // create user
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successfully",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location?.state ? location.state : '/')
                    })

            })
            .catch(error => console.log(error))
    }


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }



    return (
        <div>
            <div className="hero min-h-screen login">
                <div className="hero-content flex-col lg:flex-row login shadow-2xl">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={login}></Lottie>
                    </div>
                    <div className="card md:w-1/2 max-w-sm ">
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} onSubmit={handleLogin} className="btn text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" value="Login" />
                            </div>

                            {/* google sign in */}
                            <h2 className="text-center texl-lg font-medium">-------Log in with-------- </h2>
                            <div className=" mt-5 flex gap-6 mx-auto">
                                <div>
                                    <button className="btn btn-outline btn-primary">
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
                        <p className="my-2 text-xl text-center"><small>Do not have an account?<Link className="text-sky-500 font-bold" to="/signup"> Sign Up</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;