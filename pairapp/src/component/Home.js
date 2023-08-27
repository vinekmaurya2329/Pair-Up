 import React, { useEffect, useState } from 'react'
 import axios from 'axios';
 import { Link , Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Button, Modal } from 'antd';
import Loader from './Loader';
 

 function Home() {
 
  
const [result,setResult] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false);
const [loader,setLoader] = useState(false);
const user = JSON.parse(localStorage.getItem('currentUser'))

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};
if(user==null){
  window.location.href ='/login'
}
    useEffect(()=>{
    async function fetchingData(){
         
     try {
      setLoader(true)
        const  data = await axios.get('http://localhost:4000/api/posts/getpost')
        setResult(data)
        setLoader(false)
        console.log(data)
     } catch (error) {
        console.log(error)
     }
    }
     fetchingData()
    },[])
   
   
    return (
      <div>
         <Navbar/> { loader && <Loader/>}
        {result.data && result.data.map((item, index) => {
           return <div className="card mb-3 container bs">
  <img src={`http://localhost:4000/images/${item.image}`} className="card-img-top card-img" alt="..." /> <Link to={'/chat'}><button className='btn btn-dark chat-btn'  >Message</button></Link>
  <button className='btn btn-dark details-btn' onClick={showModal}> Details</button>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text"><span className='h5'>Description : </span>{item.description}</p>
    <p className="card-text"> <span className='h5'>Address : </span>{item.address}</p>
    <h6> rent : {item.rent}</h6>

    
    <p className="card-text"><small className="text-body-secondary"></small></p>
  </div>

  {/*  mpdel    */}
  <Modal title="Flat & Flatemate Details" open={isModalOpen} className='post-details-model' onOk={handleOk} onCancel={handleCancel}>
    <hr />
        <h5 className='h6' style={{fontFamily:'revert-layer'}}>Flatemate name: <span className='p' style={{fontFamily:'revert-layer'}}> {item.name}</span></h5>
        <h5 className='h6' style={{fontFamily:'revert-layer'}}>Flatemate Number: <span className='p' style={{fontFamily:'revert-layer'}}> {item.number}</span></h5>
        <h5 className='h6' style={{fontFamily:'revert-layer'}}>Flatemate Email: <span className='p' style={{fontFamily:'revert-layer'}}> {item.email}</span></h5>
        <h5 className='h6' style={{fontFamily:'revert-layer'}}> avaliblity: <span className='p' style={{fontFamily:'revert-layer'}}> {item.avaliblity} Person</span></h5>
        <h5 className='h6' style={{fontFamily:'revert-layer'}}>Flatemate profession: <span className='p' style={{fontFamily:'revert-layer'}}> {item.profession} </span></h5>
          <hr /><h5 className='h6'> Description : <p className='post-p'>{item.description}</p></h5>
      </Modal>
</div>


        })}
        
      

      </div>
    );
  };

 
 export default Home