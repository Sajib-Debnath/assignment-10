import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../header/Header';
import google from '../../img/google.png'


const Register = () => {


    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleRegister = e => {
        e.preventDefault()
        // const name = nameRef.current.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleRegister} className='loginForm'>

                <input type="text" name="name" placeholder='Your Name' />

                <input type="email" name="email" placeholder='Your Email' />

                <input type="password" name="password" placeholder='Your Password' />

                <button className='loginButton' type="submit">Register</button>

                <p>Already you have account? <Link to='/login'> Login Please</Link></p>

            </form>
            
            <div className='signGoogle' onClick={() => signInWithGoogle()}>
                <img src={google} alt="" width='25px' />
                Sign In With Google
            </div>
        </div>
    );
};

export default Register;