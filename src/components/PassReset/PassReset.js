import React from 'react';
import { Link } from 'react-router-dom';

const PassReset = () => {
    return (
        <div>
            <div className='bg-slate-300'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                            Have an acount? <Link to='../login' className="label-text-alt link link-hover">login</Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassReset;