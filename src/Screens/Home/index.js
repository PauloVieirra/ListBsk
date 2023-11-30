import React from "react";
import { useAuth } from "../../Context/useContext";
import { Link, useNavigate } from "react-router-dom";
import Maps from "../../Compenents/Maps";
import { DataPlayers } from "../../Compenents/Data";
const Home = () => {
  
    
    return(
        <div className="cont-home">
         <DataPlayers/>
         <Maps/>

        </div>
        
    );
};

export default Home;