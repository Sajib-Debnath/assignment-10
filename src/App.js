
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CheckOut from './components/checkOut/CheckOut';
import RequireAuth from './components/login/requireAuth/RequireAuth';
import Blogs from './components/blogs/Blogs';
import AboutMe from './components/aboutMe/AboutMe';
import Footer from './components/footer/Footer';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blogs />} />
        <Route path='aboutMe' element={<AboutMe />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
