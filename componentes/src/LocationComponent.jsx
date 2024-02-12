
import useCurrentLocation from './useCurrentLocation';

function LocationComponent() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>locality: {location.locality}</p>
        </div>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
}

export default LocationComponent;
