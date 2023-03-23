import React from 'react';
import SwitchAuthScreens from '@src/navigation/SwitchAuthScreens';
import ThemeColorProvider from '@src/context/ThemeColorContext';

const App = () => {
  return (
    <ThemeColorProvider>
      <SwitchAuthScreens />
    </ThemeColorProvider>
  );
};

export default App;
