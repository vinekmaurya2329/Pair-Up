import React, { useEffect, useState } from 'react';
import {Button,Modal} from 'antd';
import Navbar from './Navbar';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import {  useParams ,Link ,use, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import Loader from './Loader';




  // const user = JSON.parse(localStorage.getItem('currentUser'))
  const user = JSON.parse(localStorage.getItem('currentUser'))




function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]= useState('');
    const [image,setImage]= useState('');
    const [bio,setBio]= useState('')
    const [updateUser,setUpdateUser] = useState([])
    const [loader,setLoader] = useState(false)
    const params = useParams();
    const navigate = useNavigate()
    
    const {id} = params;
    console.log(id)

console.log(updateUser)
 if(user==null){
   window.location.href ='/login'
}

    useEffect(()=>{
      
    
     if(id){
      async function fetchData(){
     setLoader(true)
        const updatedUser =  await axios.get(`http://localhost:4000/api/users/getuser/${id}`)
       console.log(updatedUser)
       setLoader(false)
       setUpdateUser(updatedUser.data.result)
      
              }
              fetchData();
     }
    
       
 // eslint-disable-next-line
    },[])
  
    const showModal = () => { 
        setIsModalOpen(true); 
      };
    
       async function handleOk (){
//  formdata.append('name',name)
//  formdata.append('email',email)
//  formdata.append('number',number)
//  formdata.append('user',user)
//  formdata.append('image',image)
const data ={name:name,email:email,number:number,user:user,bio:bio} 
// const data = formdata;
 await axios.put(`http://localhost:4000/api/users/updateprofile`,data) 
Swal.fire('congrats','Profile Updated successfully','success')

        setIsModalOpen(false);
        window.location.reload()
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
   <> 
   
   <div className="profile-main">
<Navbar/>{ loader && <Loader/>}
<div className="container text-center bs profile-body">
 <h4 style={{fontFamily:'cursive'}}>  Profile Details</h4> <hr className="border border-dark border-1 opacity-75"/>
{
    id ? ( <><h6><span className='h5'>Name : </span> {updateUser.name }</h6>
    <h6><span className='h5'>Email : </span> {updateUser.email}</h6>
    <h6><span className='h5'>Number : </span> {updateUser.number}</h6> 
    <h6><span className='h5'>Bio : </span> {updateUser.bio}</h6> 
   </>):( <><h6><span className='h5'>Name : </span> {user.name }</h6>
    <h6><span className='h5'>Email : </span> {user.email}</h6>
    <h6><span className='h5'>Number : </span> {user.number}</h6> 
    <h6><span className='h5'>Bio : </span> {user.bio}</h6> 

    </>)
}



<Link to={`/profile/${user._id}`}>
<Button  className='btn btn-dark mb-3' onClick={showModal}> 
      Update
      </Button></Link>

      <Modal title="Update Profile" className='profile-model' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {
        id ? (<><label htmlFor="name">Name:</label>
        <Input placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} className='mb-3' prefix={<UserOutlined />} /> <br />
        <label htmlFor="name">Email:</label>
        <Input placeholder="Enter Email "  value={email} onChange={(e)=>setEmail(e.target.value)}  className='mb-3' prefix={<UserOutlined />} /> <br />
        <label htmlFor="name">Number:</label>
        <Input placeholder="Enter Number" value={number} onChange={(e)=>setNumber(e.target.value)}    className='mb-3' prefix={<UserOutlined />} /> 
        <br /> 
        <label htmlFor="name">Bio:</label>
        <Input placeholder="Enter Bio" value={bio} onChange={(e)=>setBio(e.target.value)}    className='mb-3' prefix={<UserOutlined />} /> 

        </>):
         <h4>User does not Exist</h4> 
      }

       
      </Modal>
</div>




    
   
</div>
   </>
 


  )
}

export default Profile