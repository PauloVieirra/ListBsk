import React from "react";
import { useAuth } from "../../Context/useContext";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Account = () => {
 const { currentUser, logout } = useAuth();
 const navigate = useNavigate();

 const handleLogout = async () => {
    try {
      await logout();
      navigate("/SignIn");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
 };

 return (
    <div className="divperson">
      <div className="divimgperson">
        <img src={currentUser.photoURL} alt="Imagem do usuário" className="imgperson" />
      </div>
      <div className="dataperson">
        <h3>{currentUser.displayName}</h3>
        <p>{currentUser.email}</p>
      </div>
      <div divbtnout>
        <button onClick={handleLogout} className="btngoout">Logout</button>
      </div>
    </div>
 );
};

export default Account;