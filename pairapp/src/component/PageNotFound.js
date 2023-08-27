import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
        
<h1>page does not exit </h1>
<Link to={'/'}><button>exit</button></Link>
    </div>
  )
}

export default PageNotFound