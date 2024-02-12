import { useEffect, useState } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error('Failed to retrieve location details');
          }

          const data = await response.json();
          const locality = data.address.city || data.address.town || data.address.village;

          setLoading(false);
          setLocation({
            latitude,
            longitude,
            locality,
          });
        } catch (error) {
          setLoading(false);
          setError(error.message);
        }
      },
      (err) => {
        setLoading(false);
        setError(err.message);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
    
  }, []); 

  return { location, error, loading, getCurrentLocation };
};

export default useCurrentLocation;
