import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

function CreatePost() {
    const [image,setImage]= useState(null)
    const [description,setDescription]= useState('')
    const [rent,setRent]= useState('')
    const [address,setAddress]= useState('')
    const [name,setName]= useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    const [avaliblity,setAvaliblity] = useState('')
    const [profession,setProfession]= useState('')
  const user = JSON.parse(localStorage.getItem('currentUser'));

     const formdata = new FormData()
     formdata.append('image',image) 

// console.log(image)


//   function handleSubmit(){
//     const data = {description:description,rent:rent,address:address,formdata:formdata}
//     console.log(formdata)
//    axios.post('https://pair-up.onrender.com/api/posts/createpost',data)
//  .then((res)=>console.log(res))
//  .catch((err)=>console.log(err))
 
// }
if(user==null){
  window.location.href = '/login'
}
function handleSubmit(){
  // const formdata = new FormData();
    // formdata.append('image', image);
    formdata.append('description', description);
    formdata.append('rent', rent);
    formdata.append('address', address); 
    formdata.append('name',name);
    formdata.append('number',number);
    formdata.append('email',email);
    formdata.append('avaliblity',avaliblity)
    formdata.append('profession',profession)
       // console.log(formdata)
       const data  = formdata;
     axios.post('https://pair-up.onrender.com/api/posts/createpost',data)
   .then((res)=>{
    Swal.fire('congrats','Post created Successfully','success')
   })
   .catch((err)=>console.log(err))}
   
  return (
    <>
    <Navbar/>
    <div className="post-main">
    <div className='container post-body  mb-4'>
      
<h3 className='mb-2' style={{fontFamily:'cursive'}}> Create a Post to find flatmate</h3>
<hr className="border border-dark border-1 opacity-75"></hr>
<input className='form-control post-input' type="file" name="image"  onChange={(e)=>setImage(e.target.files[0])}/>
<label htmlFor="cpassword" className="form-label"><h5>Room Description</h5></label>
<textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control post-input' placeholder='enter here description ' cols="30" rows="5"></textarea>



<div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>Address</h5></label>
<input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control post-input' placeholder='enter address '/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5> Room Rent</h5></label>
<input type="text" name="price" value={rent} onChange={(e)=>setRent(e.target.value)} className='form-control post-input ' placeholder='set room rent '  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>avaliblity</h5></label>
<input type="text" name="price" value={avaliblity} onChange={(e)=>setAvaliblity(e.target.value)} className='form-control post-input' placeholder='set room rent '  />
  </div>
  <h3 style={{color:'gray'}} >Personal Details</h3><hr />
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>Your Name</h5></label>
<input type="text" name="price" value={name} onChange={(e)=>setName(e.target.value)} className='form-control post-input' placeholder='set room rent '  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>Number</h5></label>
<input type="text" name="price" value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control post-input' placeholder='set room rent '  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>Email</h5></label>
<input type="text" name="price" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control post-input' placeholder='set room rent '  />
  </div>
  
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>profession</h5></label>
<input type="text" name="price" value={profession} onChange={(e)=>setProfession(e.target.value)} className='form-control post-input' placeholder='set room rent '  />
  </div>

  <button className='btn btn-dark mb-3' onClick={handleSubmit}> submit</button>
    </div>
    </div>
    </>
  )
}

export default CreatePost