import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './header.css';
import logo from '../../img/download (1).png'


const Header = () => {

    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <nav >
                <Link to="/">
                    <img src={logo} width='25%' alt="" />
                </Link>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="#service">Foods</Link>
                    <Link to='/blog'> Blogs</Link>
                    <Link to='/aboutMe'> About Me</Link>
                    <a href="#detailed">Detailed</a>
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