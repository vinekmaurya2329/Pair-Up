import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import {format} from 'date-fns';
import moment from 'moment';
import Navbar from './Navbar';
import { SlLike } from 'react-icons/sl';
import {TbMessage2} from 'react-icons/tb';
import Loader from './Loader';


function GetEvent() {
    const [result,setResult] = useState([])
    const [like,setLike]= useState(1);
    const [click,setClick]= useState(false);
    const [loader,setLoader] = useState(false)
     localStorage.setItem('likeCount',like);
    const user = localStorage.getItem('currentUser');

    if(user==null){
      window.location.href ='/login'
   }
    function likeFun(){
        if(click ==false){
          setLike(like+1)
          setClick(true)
        }
        
    }

  useEffect(()=>{
    async function fetchData(){
         try {
          setLoader(true)
            const data = await axios.get('https://pair-up.onrender.com/api/events/getevent')
            setResult(data);
            setLoader(false)
        
            console.log(result.data.createdAt)
 
         } catch (error) {
            console.log(error)
         }
    } 
    fetchData() 
  },[])

  return (
    <>
    <Navbar/> { loader && <Loader/>}
   {
    result.data && result.data.map((item)=>{
        return <div className="card mb-3 container bs">
            
        <img src={`https://pair-up.onrender.com/images/${item.image}`} className="card-img-top card-img mt-3" alt="img" />
        <div className="card-body">
          <h5 className="card-title"> #Tag : {item.tag}</h5>
          <p className="card-text"><span className='h5'>Address : </span> {item.address}</p>
          <p className="card-text"><span className='h5'>Description : </span>{item.description}</p>

          <p className="card-text"><small className="text-body-secondary">{moment((item.createdAt)).startOf('min').fromNow('YYYYMMDD')} ago </small></p>
         
          <div className='inline'>
             
            <div className="like" onClick={likeFun}><SlLike/> <small className='small-text'>{like} Likes</small></div>
            <div className="chat"><Link to={'/chat'}><TbMessage2/></Link><small className='small-text'>Chat</small></div>
          </div>
        </div>
      </div>
    })
   }


    </>
  )
  }

export default GetEvent