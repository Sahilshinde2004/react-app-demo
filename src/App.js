import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import DeleteStudent from './pages/DeleteStudent';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterStudent from './pages/RegisterStudent';
import UpdateStudent from './pages/UpdateStudent';
import ViewStudent from './pages/ViewStudent';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/blogs'element={<Blogs/>}/>
    <Route path='/student/register'element={<RegisterStudent/>}/>
    <Route path='/student/update'element={<UpdateStudent/>}/>
    <Route path='/student/delete'element={<DeleteStudent/>}/>
    <Route path='/student/view'element={<ViewStudent/>}/>
    <Route path='/student/view/:id'element={<ViewStudent/>}/>
    <Route path='*' element={<NotFound/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
