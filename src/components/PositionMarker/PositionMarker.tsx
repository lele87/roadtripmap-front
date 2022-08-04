import L from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const PositionMarker = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bbox, setBbox] = useState<string[]>([]);

  const userMarkerIcon = L.icon({
    iconSize: [41, 41],
    iconAnchor: [10, 41],
    popupAnchor: [12, -40],
    iconUrl: "map-marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={userMarkerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default PositionMarker;
