import {useEffect, useState} from 'react';

export default function useFetch<T>({
  url,
  method,
  body,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let finalOptions = {};
  if (method != 'GET') {
    finalOptions = {
      method: method,
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },

      body: JSON.stringify(body),
    };
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetch(url, finalOptions)
          .then(res => res.json())
          .catch(err => console.error(err));
        setData(data.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {data, error, loading};
}
