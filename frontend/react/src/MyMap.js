import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React from "react";

import mapStyles from "./mapStyles";
const mapContainerStyle = {
  width: "800px",
  height: "600px",
};
const SafeImage =
  "https://firebasestorage.googleapis.com/v0/b/safetyvision-huh.appspot.com/o/safe_icon.png?alt=media&token=df245587-62dd-48a1-8ce6-6a4889633ba7";
const UnsafeImage =
  "https://firebasestorage.googleapis.com/v0/b/safetyvision-huh.appspot.com/o/icons8-error-30.png?alt=media&token=c36080a1-b75d-4389-8ec7-12317620feb5";
const center = {
  lat: 53.5264962,
  lng: -113.5257753,
};
const markers = [
  {
    position: { lat: 53.5264962, lng: -113.5257753 },
    name: "Main Quad",
    status: "Not Safe",
  },
  {
    position: { lat: 53.5282209, lng: -113.5296782 },
    name: "DICE Building",
    status: "Safe",
  },
];
function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD7ltKHOtApQ3NpmEi_iHVda7pkpQZLQIs",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      options={{ styles: mapStyles, minZoom: 4, maxZoom: 16 }}
      defaultCenter={{ lat: 53.5264962, lng: -113.5257753 }}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={{
            url: marker.status === "Safe" ? SafeImage : UnsafeImage,
          }}
        />
      ))}

      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;
