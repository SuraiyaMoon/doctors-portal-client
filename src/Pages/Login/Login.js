import React, { useEffect } from 'react';
import {
    useSignInWithGoogle, useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { useNavigate, useLocation, Link } from "react-router-dom";
import useToken from '../../hooks/useToken';


const Login = () => {
    //form data
    const { register, formState: { errors }, handleSubmit } = useForm();

    //sign in with google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    //sign in with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || googleUser)
    //redirect user
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || '/';


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }

    }, [token, from, navigate])
    //loading
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    //error result
    let signInErrorMessage;
    if (error || googleError) {
        signInErrorMessage = <p className="text-red-500 text-center mb-4"><small>{error?.message || googleError?.message}</small></p>
    }
    //form submit
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Login</h2>
                    <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className='text-white btn w-full max-w-xs' value="Login" type="submit" />
                    </form>
                    <p>New to Doctors-Portal? <Link to="/signup" className='text-secondary'>Create New account</Link></p>
                    <div className="divider">OR</div>

                    <div
                        onClick={() => signInWithGoogle()} className="btn btn-accent btn-outline">Continue with Google</div>
                </div>
            </div>
        </div>

    );
};

export default Login;