import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Showmap = ({ markers }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map markers={markers} />;
};

export default Showmap;

function Map({ markers }) {
  const center = useMemo(() => ({ lat: 22.7196, lng: 75.8577 }), []);

  return (
    <GoogleMap
      zoom={5}
      center={center}
      mapContainerStyle={{ width: "100%", height: "75vh" }}
    >
      {markers.map((val, i) => {
        return <Marker position={val} />;
      })}
    </GoogleMap>
  );
}
