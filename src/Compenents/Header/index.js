import React from "react";
import { useAuth } from "../../Context/useContext";
import './style.css';

const Head = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    user && (
      <div className="divheader">
        <p>Olá, </p> <p> {user?.nome}</p>
      </div>
    ) 
  );
}

export default Head;
