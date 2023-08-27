import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from './Navbar';


function CreateEvent() {
    const [image,setImage]= useState(null)
    const [description,setDescription]= useState('')
    const [tag,setTag]= useState('')
    const [address,setAddress]= useState('');
    const user = JSON.parse(localStorage.getItem('currentUser'))

    const formdata = new FormData()
    formdata.append('image',image)
    
    //  check login condition 
    if(user==null){
      window.location.href = '/login'
    }

    async function handleSubmit(){
        formdata.append('description',description)
        formdata.append('address',address)
        formdata.append('tag',tag)
        const data  =  formdata;
        await axios.post('http://localhost:4000/api/events/createvent',data)
        .then((res)=>console.log(res))
        .catch(e=>console.log(e))
          Swal.fire('Congrats','Events Posted SuccessFully','success');
          window.location.href ='/getevent'
    }
  return (
   <>
   <Navbar/>
   <div className="event-main">
    <div className='container event-body mb-3'>
<h3 className='mb-2' style={{fontFamily:'cursive'}}> Create Event</h3>
<hr className="border border-dark border-1 opacity-75"></hr>
<input className='form-control event-input' type="file" name="image"  onChange={(e)=>setImage(e.target.files[0])}/>
<label htmlFor="cpassword" className="form-label"><h5>Event Description</h5></label>
<textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control event-input' placeholder='enter here description ' cols="30" rows="10"></textarea>

<div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5> #Tag</h5></label>
<input type="text" name="address" value={tag} onChange={(e)=>setTag(e.target.value)} className='form-control event-input' placeholder='enter #Tag '/>
    
  </div>


<div className="mb-3">
    <label htmlFor="cpassword" className="form-label"><h5>Address</h5></label>
<input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control event-input' placeholder='enter address '/>
    
  </div>

 {
   !image || !description || !address  ? (<button className='btn btn-dark mb-3' disabled onClick={handleSubmit}> submit</button>):
   (<button className='btn btn-dark mb-3' onClick={handleSubmit}> submit</button>)
 }

  
    </div>
    </div>
   </>
  )
}

export default CreateEvent