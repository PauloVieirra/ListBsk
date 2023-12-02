import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardMedia, Button } from '@mui/material' // Importando componentes do Material-UI
import './style.css';
import '../../../src/App.css';
import { DataRanked } from "../../Compenents/Data";

const Wellcome = () => {
 

  return (
    <div className="container">
      <div className="App-header"> 
        
      </div>
      <div style={{ overflowY: "auto" }}>
       <DataRanked/>
      </div>
      <div className="basewellcome">
       
        <Link to="/SignIn" className="btnent">
          <Button >Entrar</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcome;
