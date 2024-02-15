import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {
  
  if (username === null) {
    return { data: null, error: "Nombre de usuario nulo" };
  }

  
  const { data, error, isLoading } = useSWR(`https://api.github.com/users/${username}`, fetcher);

 
  console.log(isLoading);

  return { data, error };
}
