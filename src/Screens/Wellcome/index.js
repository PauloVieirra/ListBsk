import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardMedia, Button } from '@mui/material' // Importando componentes do Material-UI
import './style.css';

const Wellcome = () => {
  const users = [
    {
      name: "Play 1",
      position: "Ala",
      points: 20,
      rebounds: 15,
      image: "url_da_imagem_1"
    },
    {
      name: "Play 2",
      position: "Pivô",
      points: 18,
      rebounds: 12,
      image: "url_da_imagem_2"
    },
    {
        name: "Play 3",
        position: "Pivô",
        points: 18,
        rebounds: 12,
        image: "url_da_imagem_2"
      },
      {
        name: "Play 4",
        position: "Pivô",
        points: 18,
        rebounds: 12,
        image: "url_da_imagem_2"
      },
      {
        name: "Play 5",
        position: "Pivô",
        points: 18,
        rebounds: 12,
        image: "url_da_imagem_2"
      },
      {
        name: "Play 6",
        position: "Pivô",
        points: 18,
        rebounds: 12,
        image: "url_da_imagem_2"
      },
  ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {users.map((user, index) => (
          <Card key={index} style={{ marginBottom: 10 }}>
            <CardHeader
              title={user.name}
              subheader={`Posição: ${user.position}`}
            />
            <CardMedia
              image={user.image}
              title={user.name}
            />
            <CardContent>
              <p>Pontos: {user.points}</p>
              <p>Rebotes: {user.rebounds}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20}}>
        <Link to="/SignUp">
          <Button variant="contained" color="primary" style={{ marginRight: 10 }}>Cadastrar</Button>
        </Link>
        <Link to="/SignIn">
          <Button variant="contained" color="secondary">Entrar</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wellcome;
