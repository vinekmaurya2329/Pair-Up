import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing'>
 <h1 className='text-light text-center' style={{fontFamily:'cursive'}}>Hey  Guys !</h1>
 
 

 
 <div className='quotes'><h1 className='text-light text-center' style={{fontFamily:'cursive'}}>A friend may be waiting behind a <span className='h1 text-danger'>stranger's</span> face.</h1></div>
 
 <div className='button-div'>
 <Link to={'/register'}><button className='btn btn-outline-light'>Sign up </button></Link>
 <Link to={'/login'}><button className='btn btn-outline-light'>Sign in </button></Link>

 </div>
    </div>
  )
}

export default Landing