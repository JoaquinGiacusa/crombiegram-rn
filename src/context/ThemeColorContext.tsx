import React, {
  useEffect,
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
// import {setCookie, getCookie} from 'cookies-next';
import {get, save} from '@src/services/storage';

export const ThemeColorContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

const THEME_KEY = 'mode';

const ThemeColorProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [mode, setMode] = useState('dark');

  const initialSet = async () => {
    const modeStoraged = await get(THEME_KEY);

    if (!modeStoraged) {
      await save(THEME_KEY, 'dark');
    }

    setMode(modeStoraged);
  };

  useEffect(() => {
    initialSet();
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: async () => {
        const prevMode = mode === 'dark' ? 'light' : 'dark';

        await save(THEME_KEY, prevMode);
        setMode(prevMode);
      },
    }),
    [mode],
  );
  return (
    <ThemeColorContext.Provider value={{...colorMode, mode}}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColorContext = () => useContext(ThemeColorContext);

export default ThemeColorProvider;
