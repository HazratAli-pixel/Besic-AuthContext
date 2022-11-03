import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const {user, logout} = useContext(AuthContext)
    const handlelogout = () =>{
        logout()
        .then( () => {})
        .catch ( (error) => {
            console.log(error);
        })
    }
    return (

            <div className="navbar bg-neutral text-neutral-content text-white">
                <div className="flex-1">
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">Auth Context</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to= '/'>Home</Link></li>
                    <li><NavLink to= 'orders'>orders</NavLink></li>
                        <li><NavLink to= 'signup'>Sign Up</NavLink></li>
                    
                    <li>
                    {
                        user?.uid && <span>Welcome : {user.displayName}</span>
                    }
                    </li>
                    {
                        user?.email ? <li><button onClick={handlelogout}  className='btn'>logout</button></li>: <li><Link className='btn' to='login'>login</Link></li>
                    }
                    
                    </ul>
                </div>
            </div>

    );
};

export default Header;
