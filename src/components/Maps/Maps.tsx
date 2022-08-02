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
import { deleteLocationThunk } from "../../redux/thunks/locationsThunks";

const Maps = () => {
  const dispatch = useAppDispatch();
  const locations = useAppSelector((state) => state.location);

  const markerIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  const PrintMarks = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        dispatch(addCoordinatesActionCreator([lat, lng]));
        dispatch(openFormActionCreator());
      },
    });
    return null;
  };

  const deleteLocation = (event: any, id: string) => {
    dispatch(deleteLocationThunk(id));
  };

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

        {locations.features.map((location) => {
          return (
            <Marker
              key={location.id}
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
                <div className="location__info">
                  <h2>{location.properties.name}</h2>
                  <p>{location.properties.description}</p>
                  <img
                    src={
                      location.properties.image.length === 0
                        ? "no-image-icon.png"
                        : location.properties.image[0]
                    }
                    alt={location.properties.name}
                    width={300}
                    height={250}
                  />

                  <button
                    className="location__button"
                    onClick={(event) => deleteLocation(event, location.id)}
                  >
                    Delete location
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <SearchBar />
        <PrintMarks />
      </MapContainer>
    </StyledMaps>
  );
};

export default Maps;
