import './login.css'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import Header from '../header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    // const { createUserWithEmailAndPassword } = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword
    ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/'

    if (user) {
        navigate(form, { replace: true })
    }


    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <Header />
            <form className='loginForm' onSubmit={handleSubmit} >
                <input type="email" name="email" placeholder='Your Email' />

                <input type="password" name="password" placeholder='Your Password' />

                <button className='loginButton' type="submit">Log In</button>

                <p>You are new here? <Link to='/register'>Register Please !</Link> </p>
            </form>
        </div>

    );
};

export default Login;