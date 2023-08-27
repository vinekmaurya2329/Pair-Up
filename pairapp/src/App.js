import logo from './logo.svg';
import './App.css';
import Register from './component/Register';
import Login from './component/Login';
import CreatePost from './component/CreatePost';
import Home from './component/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from './component/Chat';
import Navbar from './component/Navbar';
import PageNotFound from './component/PageNotFound';
import CreateEvent from './component/CreateEvent';
import GetEvent from './component/GetEvent';
import Profile from './component/Profile';
import Logout from './component/Logout';
import Landing from './component/Landing';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/getpost' element= {<Home/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/chat' element={<Chat/>}/>
       <Route path='/createpost' element={<CreatePost/>}/> 
       <Route path='/navbar' element={<Navbar/>}/>
       <Route path='*' element={<PageNotFound/>}/>
       <Route path='/createvent' element={<CreateEvent/>}/>
       <Route path='/getevent' element={<GetEvent/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/profile/:id' element={<Profile/>}/>
       <Route path='/logout' element={<Logout/>}/>
     <Route path='/' element={<Landing/>}/>

    </Routes>
    </BrowserRouter>
   
    // {/* <Register/> */}
    // {/* <Login/> */}
  //  <>
  //   {/* <CreatePost/>
  //   <Home/> */}
  //   </>
    
  );
}

export default App;
