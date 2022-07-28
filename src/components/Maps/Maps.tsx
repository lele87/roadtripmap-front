import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import StyledMaps from "./StyledMaps";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import SearchBar from "../SearchBar/SearchBar";
import {
  addCoordinatesActionCreator,
  openFormActionCreator,
} from "../../redux/features/newLocationSlice";

const Maps = () => {
  const dispatch = useAppDispatch();
  const locations = useAppSelector((state) => state.location);
  const openForm = () => {
    dispatch(openFormActionCreator());
  };

  const markerIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  function MyComponent() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        dispatch(addCoordinatesActionCreator([lat, lng]));
        dispatch(openFormActionCreator());
        // L.marker([lat, lng], { icon: markerIcon }).addTo(map);
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
                  src={location.properties.image}
                  alt={location.properties.name}
                  width={300}
                />

                <button onClick={openForm}>Add location</button>
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
