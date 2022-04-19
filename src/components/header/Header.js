import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './header.css';


const Header = () => {

    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <nav >
                <Link to="/">Logo</Link>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/#service">Foods</Link>
                    <Link to='/blog'> Blogs</Link>
                    <Link to='/aboutMe'> About Me</Link>
                    {
                        user ?

                            <button className='logoutButton' onClick={logOut}> Sign Out</button>
                            :
                            <Link to="/login">Login</Link>
                    }

                </div>

            </nav>
        </div>

    );
};

export default Header;