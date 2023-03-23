import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {useThemeColorContext} from '@src/context/ThemeColorContext';
import {CustomDarkTheme, CustomLightTheme} from '@src/theme';

const loggedState = 'LOGGED_IN';

const SwitchAuthScreens = () => {
  const {mode} = useThemeColorContext();

  return (
    <NavigationContainer
      theme={mode === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      {/* {loggedState === 'LOGGED_IN' && <PrivateRoutes />} */}
      {loggedState === 'LOGGED_IN' && <PublicRoutes />}
    </NavigationContainer>
  );
};

export default SwitchAuthScreens;
