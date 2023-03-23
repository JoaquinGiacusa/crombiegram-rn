// import useAuthContext from '@src/hooks/useAuthContext';

const BACKEND_URL = 'http://192.168.2.154:3000/api';
// const AUTH_TOKEN = '';

const apiFetch = (() => {
  // const {authToken} = useAuthContext();

  const defaultOptions = {
    headers: {
      // 'X-AUTH-TOKEN': AUTH_TOKEN,
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${authToken}`,
    },
  };

  return async (path: string, options?: RequestInit) => {
    return fetch(`${BACKEND_URL}${path}`, {...defaultOptions, ...options});
  };
})();

export default apiFetch;
