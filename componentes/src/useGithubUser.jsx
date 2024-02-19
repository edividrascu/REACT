import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {

  if (username === null) {
    return { data: null, error: "Nombre de usuario nulo", fetchDataManually: () => {} };
  }

  const { data, error, isValidating } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const fetchDataManually = async () => {
    // Utilizamos el MUTATE 
    try {
      await mutate(`https://api.github.com/users/${username}`);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  return { data, error, isValidating, fetchDataManually };
}
