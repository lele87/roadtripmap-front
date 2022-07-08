import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import locationsData from "../../data/locations";
import StyledMaps from "./StyledMaps";

const Maps = () => {
  const geoIcon = new Icon({
    iconUrl: "/images/geo-icon.png",
    iconSize: [46, 46],
  });

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon: geoIcon }).addTo(map);
      },
    });
    return null;
  }

  return (
    <StyledMaps className="leaflet-container">
      <MapContainer
        center={[41.346176, 2.168365]}
        zoom={12}
        scrollWheelZoom={true}
        className="map"
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
            icon={geoIcon}
          >
            <Popup
              position={[
                location.geometry.coordinates[0],
                location.geometry.coordinates[1],
              ]}
            >
              <div>
                <h2>{location.properties.NAME}</h2>
                <p>{location.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
            <MyComponent />
          </Marker>
        ))}
      </MapContainer>
    </StyledMaps>
  );
};

export default Maps;
