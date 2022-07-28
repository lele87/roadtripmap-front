import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

const SearchBar = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const markerIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
    });

    const searchControl = GeoSearchControl({
      provider,
      notFoundMessage: "Sorry, location not found.",
      showMarker: true,
      showPopup: false,
      autoClose: true,
      searchLabel: "search",
      marker: { icon: markerIcon },
    });

    map.addControl(searchControl);
  }, [map]);

  return null;
};

export default SearchBar;
