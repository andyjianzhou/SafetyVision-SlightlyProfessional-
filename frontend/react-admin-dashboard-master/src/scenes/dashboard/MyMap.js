import { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import mapStyles from "./mapStyles";
const mapContainerStyle = {
  width: "800px",
  height: "600px",
};

const center = {
  lat: 53.5264962,
  lng: -113.5257753,
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD7ltKHOtApQ3NpmEi_iHVda7pkpQZLQIs",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
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
      options={{ styles: mapStyles, minZoom: 4, maxZoom: 14 }}
      defaultCenter={{ lat: 53.5264962, lng: -113.5257753 }}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;
