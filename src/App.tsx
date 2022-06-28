import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import locationsData from "./data/locations";

function App() {
  const [activeLocation, setActiveLocation] = useState<any>(null);

  const geoIcon = new Icon({
    iconUrl: "/images/geo-icon.png",
    iconSize: [46, 46],
  });
  return (
    <MapContainer
      center={[41.346176, 2.168365]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locationsData.features.map((location) => (
        <Marker
          key={location.properties.LOCATION_ID}
          position={[
            location.geometry.coordinates[0],
            location.geometry.coordinates[1],
          ]}
          eventHandlers={{
            click: () => {
              setActiveLocation(location);
            },
          }}
          icon={geoIcon}
        />
      ))}
      {activeLocation && (
        <Popup
          position={[
            activeLocation.geometry.coordinates[0],
            activeLocation.geometry.coordinates[1],
          ]}
          eventHandlers={{
            click: () => {
              setActiveLocation(null);
            },
          }}
        >
          <div>
            <h2>{activeLocation.properties.NAME}</h2>
            <p>{activeLocation.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}

export default App;
