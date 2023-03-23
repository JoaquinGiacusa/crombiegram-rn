import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {useThemeColorContext} from '@src/context/ThemeColorContext';
import {CustomDarkTheme, CustomLightTheme} from '@src/theme';
import {useAuthContext} from '@src/context/AuthContext';

const SwitchAuthScreens = () => {
  const {mode} = useThemeColorContext();
  const {loggedState} = useAuthContext();

  return (
    <NavigationContainer
      theme={mode === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      {loggedState.userToken && <PrivateRoutes />}
      {loggedState.isSignout && <PublicRoutes />}
    </NavigationContainer>
  );
};

export default SwitchAuthScreens;
