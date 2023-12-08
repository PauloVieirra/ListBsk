import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Modal, Button } from '@mui/material';
import { DataLocations } from "../Data";

import './style.css';

class Maps extends Component {

 constructor(props) {
  
    super(props);

    this.state = {
      userLocation: {
        lat: null,
        lng: null
      },

      mapCenter: {
        lat: -34.397,
        lng: 150.644
      },

      locations: DataLocations,
      selectedLocation: null,
      isModalOpen: false
    };

    this.getUserLocation = this.getUserLocation.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
 }

 componentDidMount() {
    this.getUserLocation();
 }

 getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        this.setState({
          userLocation: {
            lat: userLat,
            lng: userLng
          },
          mapCenter: {
            lat: userLat,
            lng: userLng
          }
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
 }

 handleMarkerClick(markerInfo) {
  this.setState({
    selectedLocation: markerInfo,
    isModalOpen: true
  });
}

closeModal() {
  this.setState({
    isModalOpen: false
  });
}


 render() {
  const { userLocation, mapCenter, locations, selectedLocation, isModalOpen } = this.state;
    const mapStyles = {
      width: '100%',
      height: '100vh',
      featureType: "poi",
      stylers: [
       { visibility: "off" }
      ]  
    };

    const renderMarkers = () => {
      return locations.map((location, index) => {
        return (
          <Marker
            key={index}
            position={{
              lat: location.lat,
              lng: location.lng
            }}
            label={location.title}
            onClick={() => this.handleMarkerClick(location)}
            icon={{
              url: 'https://cdn-icons-png.flaticon.com/512/2527/2527948.png',
              scaledSize: new window.google.maps.Size(42, 42),
            }}
          />
        );
      });
    };

    return (
      <div className="maps-container">
        <Map
          google={this.props.google}
          zoom={14}
          styles={[
            {
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]
            }
          ]}
          center={userLocation}
          disableDefaultUI={true}
        >
          {userLocation.lat && userLocation.lng && (
            <Marker
              position={{
                lat: userLocation.lat,
                lng: userLocation.lng
              }}
              name="Your Location"
            />
          )}
          {renderMarkers()}
        </Map>
        
        <Modal
          open={isModalOpen}
          onClose={this.closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal">

          <div className="center-modal">

             <h2 id="modal-modal-title">{selectedLocation?.local}</h2>
            <Button onClick={this.closeModal}>Fechar</Button>
          </div>
           

          </div>
        </Modal>
      </div>
    );
 }
}

export default GoogleApiWrapper({
 apiKey: 'AIzaSyAeueX4C6XE9r781iYb2n9o6Eb4lOB7fJA'
})(Maps);