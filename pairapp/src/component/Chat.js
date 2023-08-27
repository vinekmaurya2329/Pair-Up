import React, { useState,useRef, useEffect } from 'react'
import  io  from 'socket.io-client';
import {  format } from 'date-fns';
import { FloatButton } from 'antd';
// import { Container,TextField } from "@material-ui/core";
// import RiSendPlane2Fill from 'react-icons/ri'


const socket = io('https://pair-up.onrender.com')
function Chat() {
    const [message,setMessage] = useState('')
    const [chatmessage,setChatmessage] = useState([])

    const username = JSON.parse(localStorage.getItem('currentUser'))
    const scrollRef = useRef()
 
    useEffect(()=>{
 if(scrollRef.current){
 scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
 }

 const setupEvent = () =>{
    socket.on('receive-message',(e)=>{
        const data =  JSON.parse(e);

        const lastMessage = chatmessage.length ? chatmessage[chatmessage.length -1] :null;
       chatmessage.push(data);
    setChatmessage([...chatmessage]) 
    })
 }
 setupEvent();
    },[chatmessage])

    const sendMessage = (e)=>{
        e.preventDefault()
        const data = [ username && username.name ,' : ',message]
        socket.emit('send-message', JSON.stringify(data));
        setMessage("")
    }







    
  return (
   <div className="container mess-cont">
 <form onSubmit={sendMessage}>
        <div >
        <h3 className='text-center welcome'>  Welcome {username && username.name}</h3>
        
<input type="text" className='form-control  message' value={message} placeholder='enter your message' onChange={(e)=>setMessage(e.target.value)}/>
{
    message ?  <button type='submit' className='btn btn-outline-dark sub-mess'>send</button>   :<button className='btn btn-outline-dark sub-mess disabled' > send</button>
}



{
    chatmessage && chatmessage.map((item)=>{
    return <>
   <div className="container mes-bs" >
  <div className="row" >
    <div   className="col">{item} <p className='time'>{ format(new Date() ,'hh:mm')}</p>  </div>
  
  </div><FloatButton.BackTop />
</div>

    </>
    
    })
}
    </div>
    
    </form>

   </div>
  )
  
}

export default Chat 