import React from "react";
import { useAuth } from "../../Context/useContext";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
    const { logout } = useAuth(); 
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
          await logout(); // Chame a função logout ao clicar no botão
          navigate('/SignIn');
        } catch (error) {
          // Trate qualquer erro que possa ocorrer durante o logout
          console.error("Erro ao fazer logout:", error);
        }
      };
    
    return(
        <div>
           ACC
         <div>
         <button onClick={handleLogout}>Logout</button>
         </div>
       
        </div>
        
    );
};

export default Account;