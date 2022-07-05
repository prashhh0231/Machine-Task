import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Showmap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBxsaYdl9pIsWRxtfkGvZbiQIEWCM7REu4",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default Showmap;

function Map() {
  const center = useMemo(() => ({ lat: 20.5937, lng: 78.9629 }), []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ width: "100%", height: "75vh" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
