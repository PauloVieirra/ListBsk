import React from "react";
import Mobile from "../../Compenents/Well/Mobile";
import Desktop from "../../Compenents/Well/Desktop";
import './style.css';




const Wellcome = () => {
  return (
  <>
    <div className="container-mobile">
      <Mobile/>
     </div>
     <div className="container-desktop">
      <Desktop/>
     </div>
  </>
  );
};

export default Wellcome;
