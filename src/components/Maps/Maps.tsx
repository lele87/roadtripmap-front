import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import StyledMaps from "./StyledMaps";
import { useAppSelector } from "../../redux/store/hooks";
import SearchBar from "../SearchBar/SearchBar";

const Maps = () => {
  const locations = useAppSelector((state) => state.location);

  const markerIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon: markerIcon }).addTo(map);
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

        {locations.features.map((location) => (
          <Marker
            key={location.properties.id}
            position={[
              location.geometry.coordinates[0],
              location.geometry.coordinates[1],
            ]}
            icon={markerIcon}
          >
            <Popup
              position={[
                location.geometry.coordinates[0],
                location.geometry.coordinates[1],
              ]}
            >
              <div>
                <h2>{location.properties.name}</h2>
                <p>{location.properties.description}</p>
                <img
                  src={location.properties.images}
                  alt={location.properties.name}
                  width={300}
                />
              </div>
            </Popup>
          </Marker>
        ))}
        <SearchBar />
        <MyComponent />
      </MapContainer>
    </StyledMaps>
  );
};

export default Maps;
