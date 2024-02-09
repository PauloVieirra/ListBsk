import React from "react";
import { useAuth } from "../../Context/useContext";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Account = () => {
 const { logout, user } = useAuth();
 const navigate = useNavigate();

 const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
 };

 return (
    <div className="divperson">
      <div className="divimgperson">
        {/* Use user.photoURL se estiver disponível */}
        {user && user.img && <img src={user.img} alt="Imagem do usuário" className="imgperson" />}
      </div>
      <div className="dataperson">
        {user && (
          <>
            <h3>{user.nome}</h3>
            <h4>{user.email}</h4>
          </>
        )}
      </div>
      <div divbtnout>
        <button onClick={handleLogout} className="btngoout">Logout</button>
      </div>
    </div>
 );
};

export default Account;
