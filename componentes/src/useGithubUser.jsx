import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {

  
  const {data,error,isLoading} = useSWR(`https://api.github.com/users/${username}`,fetcher)

  console.log(isLoading)

  return {data, error}
  }