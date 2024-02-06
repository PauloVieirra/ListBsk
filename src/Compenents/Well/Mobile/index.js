import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

export default function Mobile() {
 return (
  <div className='cont-mobile'>
   <div> Top </div>
   <div> Stores </div>
   <div> banner </div>
   <div> Lista </div>
   <div> 
    <Link to='SignIn'>
     <Button>
       MenuBottom 
     </Button>
    </Link>
   </div>
  </div>
  );
}