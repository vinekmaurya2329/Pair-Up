import React from 'react';

// const userinfo = JSON.parse(localStorage.getItem('currentUser'));
// console.log(userinfo)
const userinfo = JSON.parse(localStorage.getItem('currentUser'));

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand h6" style={{fontFamily:'cursive'}} href="/">Pair Up |</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light " />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/getevent">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/getpost">Flat Mate</a>
        </li>

        <li className="nav-item">
         {
            userinfo._id ? ( <a  className="nav-link" href="/logout"> LogOut</a>) :( <a className="nav-link"  href="/login">Login</a>)

         }
         
        </li>
        


        <li className="nav-item dropdown " >
  {userinfo._id ? (<><a className="nav-link dropdown-toggle"  href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {userinfo.name}
  </a></>):(<><a className="nav-link dropdown-toggle" disabled href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Setting
  </a></>) }
  <ul className="dropdown-menu bg-dark">
      <li><a className="dropdown-item" href="/profile">profile</a></li>
    <li><a className="dropdown-item" href="/createpost">Create Post</a></li>
    <li><a className="dropdown-item" href="/createvent">Create Event</a></li>

    <li><hr className="dropdown-divider" /></li>
   
  </ul>
</li>



        <li className="nav-item">
          <a className="nav-link disabled"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar