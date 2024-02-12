import { useEffect, useState } from 'react';

const useGithubUserForm = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (response.status !== 200) {
          throw new Error("User not found");
        }

        const json = await response.json();
        setLoading(false);
        setData(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [username]);

  return { data, loading, error };
};

export default useGithubUserForm;
