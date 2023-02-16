import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../../contexts/AuthProvider';
import UseToken from '../../hooks/UseToken';
import logo from '../../assets/logo/logo.png';
import { useEffect } from 'react';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(StateContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();

    const [token] = UseToken(createdUserEmail);

    useEffect(() => {
        if (token) {
            navigate('/');
            toast.success('successfully create user')
        }
    }, [token]);


    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.accountType);
                    })
                    .catch(err => toast.error(err.message));
            })
            .catch(error => {
                toast.error(error.message)
                setSignUpError(error.message);
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://fg-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setCreatedUserEmail(email)
                    reset();
                }
            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <Link to='/'>
                    <img src={logo} className='w-[100px] mx-auto mb-2' alt="" />
                </Link>
                <h2 className='text-2xl font-semibold text-center mb-3'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 character long" }
                            })}
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-[#6a9333]" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Account Type</span>
                        </label>
                        <select className="select select-bordered w-full focus:outline-none focus:border focus:border-[#6a9333]"
                            {...register("accountType", { required: true })}>
                            <option value="buyer">buyer</option>
                            <option value="delivery man">delivery man</option>
                        </select>

                        {errors.name && <p className='text-red-500'>{errors.accountType.message}</p>}
                    </div>

                    <input className='btn w-full mt-4 bg-[#84b840] hover:bg-[#6a9333] border-none' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-600 text-sm'> * {signUpError}</p>
                    }
                </form>
                <p className='text-sm text-center my-3'>Already have an account? <Link className='text-[#84b840] hover:underline' to="/login">Please Login</Link></p>

            </div>
        </div>
    );
};

export default SignUp;