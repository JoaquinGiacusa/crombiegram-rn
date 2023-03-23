import React from 'react';
import SwitchAuthScreens from '@src/navigation/SwitchAuthScreens';
import ThemeColorProvider from '@src/context/ThemeColorContext';
import {AuthContextProvider} from '@src/context/AuthContext';

const App = () => {
  return (
    <ThemeColorProvider>
      <AuthContextProvider>
        <SwitchAuthScreens />
      </AuthContextProvider>
    </ThemeColorProvider>
  );
};

export default App;
