import storage from '@src/services/storage';
import {BACKEND_URL} from '../../backend-url';
import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  useState,
} from 'react';

type UserDataProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  profileImage: string;
  position: string;
  createdAt: Date;
  updatedAt: Date;
};

type AuthContextProps = {
  signIn: ({email, password}: {email: string; password: string}) => void;
  signOut: () => void;
  signUp: (data: any) => void;
  loggedState: {
    isSignout: boolean;
    userToken: string | null;
    isLoading: boolean | null;
  };
  userData: UserDataProps | null;
};

const AuthContext = createContext<AuthContextProps>({
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
  loggedState: {
    isSignout: false,
    userToken: null,
    isLoading: true,
  },
  userData: null,
});

const reducer = (prevState: any, action: any) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        isLoading: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });
  const [user, setUser] = useState();
  useEffect(() => {
    const bootstrapAsync = async () => {
      // let userToken;

      try {
        let userToken = await storage.get('userToken');
        if (userToken) {
          const res = await fetch(`${BACKEND_URL}/user/me`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          const data = await res.json();
          setUser(data);
          dispatch({type: 'SIGN_IN', token: userToken});
        } else {
          dispatch({type: 'SIGN_OUT'});
        }
      } catch (e) {
        // Restoring token failed
      }

      // dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async ({email, password}) => {
        try {
          const res = await fetch(`${BACKEND_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
          });

          const data = await res.json();
          if (data.payload.authCookie) {
            const token = data.payload.authCookie;
            storage.save('userToken', token);
            dispatch({type: 'SIGN_IN', token});
          } else {
            dispatch({type: 'SIGN_OUT'});
          }

          // .then(res => res.json())
          // .then(data => {
          //   console.log('dataaaa', data);
          //   if (data.payload.authCookie) {
          //     const token = data.payload.authCookie;
          //     storage.save('userToken', token);
          //     dispatch({type: 'SIGN_IN', token});
          //   } else {
          //     dispatch({type: 'SIGN_OUT'});
          //   }
          // });
        } catch (error) {
          console.error(error);
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      loggedState: state,
      userData: user,
    }),
    [state, user],
  );
  console.log(authContext);
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuthContext = () => useContext(AuthContext);
