import React,{ createContext, useState } from 'react';
import { Button, Modal, Space } from 'antd';
import Swal from 'sweetalert2'



function Logout() {

    const [isModalOpen, setIsModalOpen] = useState(true);
// const [isModalOpen, setIsModalOpen] = useState(true)
    // const showModal = () => {
    //   setIsModalOpen(true);
    // };
  
    const handleOk = () => {
        localStorage.removeItem('currentUser')
      setIsModalOpen(false);
      Swal.fire('congrats','Loged Out SuccessFully','success')
      window.location.href = '/login'
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      window.location.href ='/getpost'
    };
  return (
   <div className='body-logout'>
   
   {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
   {/* <Button type="primary" onClick={() => setModal2Open(true)}>
       Logout
      </Button> */}
   <Modal title={`! warning`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='model'>
       <p>Are you sure want to logout ?</p>
      </Modal>
   
   
   
   </div>

    
  )
}

export default Logout