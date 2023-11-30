import React from 'react';
import { Marker } from 'google-maps-react';

const CustomMarker = ({ title, position }) => {
  // Estilo personalizado para o marcador
  const markerStyle = {
    color: 'white',
    background: 'blue',
    padding: '5px 10px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
    // Adicione outros estilos conforme necessário
  };

  return (
    <Marker
      position={position}
      label={{
        text: title,
        color: 'white',
        fontSize: '14px'
      }}
      icon={{
        // Você pode adicionar um ícone personalizado se preferir
        // url: 'URL_DO_ÍCONE_CUSTOMIZADO',
        // scaledSize: new window.google.maps.Size(30, 30)
      }}
    >
      {/* Componente personalizado para o marcador */}
      <div style={markerStyle}>
        {title}
      </div>
    </Marker>
  );
};

export default CustomMarker;
