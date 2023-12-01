import React from "react";
import { DataRanked } from "../../Compenents/Data";
import MenuMobile from "../../Compenents/MenuBar";
import './style.css';

const Rank = () => {

    return(
        <>
         <div className="divranked">
            <div>
                Header
            </div>
            <div className="divcomranked">
                 <DataRanked/> 
            </div>
          
        </div>
       
        </>
       
    );
    
}

export  default Rank;