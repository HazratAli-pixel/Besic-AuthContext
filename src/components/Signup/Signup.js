import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Signup = () => {

    const {createUser, signinWithGoogle}= useContext(AuthContext)
    
    const handlesubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            form.reset();
        })
        .catch(error => {
            console.error(error);
        })
        
    }




    const googlelogin = () => {
        signinWithGoogle()
        .then( result => {
        })
        .catch(error => console.log(error))
    }


    return (
        <div className='bg-slate-300'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold'>Registar Now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='../passreset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control mt-6">
                            <button onClick={googlelogin} className="btn btn-primary">Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Facebook</button>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>                  	
    );
};

export default Signup;