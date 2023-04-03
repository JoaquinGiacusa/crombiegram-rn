import {useEffect, useState} from 'react';
import useFetch from './useFetch';

export type Chars = {
  id: string;
  image: string;
  name: string;
  species: string;
};

const useGetCharRyM = () => {
  // const [chars, setChars] = useState();
  const {data, error, loading} = useFetch<Chars[]>({
    url: 'https://rickandmortyapi.com/graphql',
    method: 'POST',
    body: {
      query: `query {
        characters {
          info{
            count
            pages
            next
            prev
          }
          results {
            id
            name
            species
            image
          }
        }
      }`,
    },
  });

  return {data, error, loading};
};
export default useGetCharRyM;
