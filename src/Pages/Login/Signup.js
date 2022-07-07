import React from 'react';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
}
    from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Signup = () => {
    //form data
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    //sign in with email and pass
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    //update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser)

    const navigate = useNavigate()


    let signInErrorMessage;
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    if (error || googleError || updateError) {
        signInErrorMessage = <p className="text-red-500 text-center mb-4"><small>{error?.message || googleError?.message}</small></p>
    }

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: data.name });

    };
    if (token) {
        navigate('/appointment')
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Signup</h2>
                    <form className='justify-center' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} type="text" placeholder="Write your name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                            </label>
                        </div>

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
                        <input className='text-white btn w-full max-w-xs' value="Signup" type="submit" />
                    </form>
                    <p>Already have an account? <Link to="/login" className='text-secondary'>Please login </Link></p>
                    <div className="divider">OR</div>

                    <div
                        onClick={() => signInWithGoogle()} className="btn btn-accent btn-outline">Continue with Google</div>
                </div>
            </div>
        </div>

    );
};

export default Signup;