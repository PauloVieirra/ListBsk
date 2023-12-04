import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material' // Importando componentes do Material-UI
import './style.css';
import { DataRanked } from "../../Compenents/Data";

const Wellcome = () => {
 

  return (
    <div className="container-wellcome">
      <div>
       <DataRanked/>
      </div>
      <div className="basewellcome">
       
        <Link to="/SignIn" className="btnent">
          <Button style={{color:'#fff'}} >Entrar</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcome;
