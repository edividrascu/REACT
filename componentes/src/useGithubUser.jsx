import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {

  if (username === null) {
    return { data: null, error: "Nombre de usuario nulo", fetchDataManually: () => {} };
  }


  const { data, error, isValidating, revalidate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );


  const fetchDataManually = () => {
   
    revalidate();
  };

 
  return { data, error, isValidating, fetchDataManually };
}
