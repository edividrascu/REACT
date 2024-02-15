import { SWRConfig } from 'swr';
import useSWR from 'swr';

const customFetcher = (url) => fetch(url).then((res) => res.json());

function algunaFuncion({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: customFetcher }}>
        {/* el "termineitor por aqui" */}
      <Component {...pageProps} /> 
    </SWRConfig>
  );
}

export function MyComponent() {
  const { data, error } = useSWR('https://api.example.com/data');


  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
