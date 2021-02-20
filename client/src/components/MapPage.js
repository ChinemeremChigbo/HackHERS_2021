import React from "react";
import { useHistory } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapPage = () => {
  const position = [43.4680, -80.5373];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MapPage;
