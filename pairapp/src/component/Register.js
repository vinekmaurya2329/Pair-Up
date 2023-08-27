import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')
    const [bio,setBio] = useState('')
    const [image,setImage] = useState(null)
   const url = 'https://pair-up.onrender.com';
   
   async function submitHandler(e){
    e.preventDefault()
   
    if(!password){
    <p>please enter password</p>
      return 
    }
    
    const userData = {name,email,number,password,bio}
    
    
try {
  const result = await axios.post('https://pair-up.onrender.com/api/users/register',userData)
  console.log(result)
  Swal.fire('congrats',result.data.message,'success');
  window.location.href = '/login';
} catch (error) {
  console.log(error,'catch section')
  Swal.fire('opps!','Something went wrong','error')
}

    }
  return (
    <div className="main-bg">
    <div className=' container register-body mt-3'>
      <div className="h4 text-center" style={{fontFamily:'cursive'}}>Register</div>
 <div className="container m-3">
 <div className="  mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input type="name" value={name} required onChange={(e)=>setName(e.target.value)} placeholder='enter your name' className="form-control reg-input"   />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control reg-input" required placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
 
  <div className="mb-3">
    <label htmlFor="number" className="form-label">Number</label>
    <input type="text" className="form-control reg-input" required placeholder='enter your phone number'  value={number} onChange={(e)=>setNumber(e.target.value)} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control reg-input" placeholder='create password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="text" className="form-control reg-input" required value={cpassword} placeholder='confirm password' onChange={(e)=>setCpassword(e.target.value)} />
  </div>
  
{
   password && password.length  < 6 ? (<p style={{color:'red'}}>Please create Strong password</p>):<p style={{color:'green'}}>your password is strong ✓</p>
}
  

{ !name || !email || !number || password && password !== cpassword ? 
 <div><button type="submit" className="btn btn-outline-dark mb-3" disabled >Submit</button></div>

 :<button type="submit" className="btn btn-dark mb-3" onClick={submitHandler}>Submit</button>

}
<div className="login-option">
  <a href="/login"> if already have an account Login here →</a>
</div>
 


    
  </div>  
 
    </div>
    </div>
  )
}

export default Register