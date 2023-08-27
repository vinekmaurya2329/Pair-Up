import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button, Modal } from 'antd';
import DisabledContext from 'antd/es/config-provider/DisabledContext';

function Login() {

    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [userinfo, setUserinfo] = useState([]);
    const [success,setSuccess]= useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    if(success){
      const userInfo = localStorage.setItem('currentUser',JSON.stringify(userinfo));
    }

    //  popup model -------|

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
   
async function submitLogin(){
  
    const loginData = {email,password}
    try {
        const user = await axios.post('http://localhost:4000/api/users/login',loginData)
        
        // console.log(userinfo)
        console.log(user.data.success)
        
        console.log(success)
        setUserinfo(user.data.user)
       Swal.fire(user.data.firstArg,user.data.message,user.data.lstArg);
       if(user.data.success){
         setIsModalOpen(true)
       } 
       setSuccess(user.data.success)
      
    } catch (error) {
       Swal.fire('Opps','Email is not registered','info')
    }
}

  return (
    <div className='main-bg'>
  <div className='container body-login'>
  <div className="h4 text-center  mt-3" style={{fontFamily:'cursive'}}>Login</div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" required className="form-control login-form"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" required className="form-control login-form" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' />
  </div>
  <div className="container reg-link">
    
  <button type="submit" onClick={submitLogin} className="btn btn-dark mb-3">Submit</button>
  <a href="/register" className=''> <small>if do't have any account</small> Register here →</a>
  </div>


{/*  popup model ---- */}

{/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="Why are you come here ?" className='login-model1'
 open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <a href="/getevent"> <button className='btn btn-outline-dark show-button' href='/getevent'>Events</button></a>
         <a href="/getpost"><button className='btn btn-outline-dark show-button'>Flat Mates</button></a>

        
      </Modal>
  
  
  </div>
  </div>
  )
}

export default Login