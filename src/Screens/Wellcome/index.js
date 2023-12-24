import React from "react";
import { Link } from 'react-router-dom';
import { Button, Paper, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Logo from '../../Imagens/Logoaguas.png';
import imgslider1 from '../../Imagens/Group258.png';
import imgslider2 from '../../Imagens/Group259.png';
import { DataRanked } from "../../Compenents/Data";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  style: {
    margin: '0 auto', // Isso centraliza o slider na tela
    width: '90%', // Ajuste a largura conforme necessário
    padding: 0, // Remova qualquer padding para eliminar espaços extras
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
      },
    },
  ],
};



const Wellcome = () => {
  return (
    <div className="container-wellcome">
      <div className="welltop">
      <Paper elevation={0} sx={{  width: '30%', marginTop:'20px' }}>
        <img src={Logo} alt="Minha Imagem" style={{ maxWidth: '100%' }} />
      </Paper>
      </div>
        <Typography variant="h5" gutterBottom></Typography>
        <div className="contslider">
        <Slider {...settings} style={{width:'100%'}} >
          <div>
            <img src={imgslider1} alt="Imagem 1"/>
          </div>
          <div>
          <img src={imgslider2} alt="Imagem 1"/>
          </div>
        </Slider>
        </div>
    </div>
  );
};

export default Wellcome;
