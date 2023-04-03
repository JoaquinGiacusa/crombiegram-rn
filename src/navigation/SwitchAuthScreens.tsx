import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {useThemeColorContext} from '@src/context/ThemeColorContext';
import {CustomDarkTheme, CustomLightTheme} from '@src/theme';
import {useAuthContext} from '@src/context/AuthContext';
import {PanResponder} from 'react-native';
import PanResponderTest from '@src/screens/testPage/PanResponder';

const SwitchAuthScreens = () => {
  const {mode} = useThemeColorContext();
  const {loggedState} = useAuthContext();

  return (
    <NavigationContainer
      theme={mode === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <PanResponderTest />
      {/* {loggedState.isLoading && (
        <View>
          <Text style={{fontSize: 50}}>Is loading</Text>
        </View>
      )} */}
      {/* {loggedState.userToken && <PrivateRoutes />}
      {loggedState.isSignout || (!loggedState.userToken && <PublicRoutes />)} */}
      {/* {true && <PublicRoutes />} */}
    </NavigationContainer>
  );
};

export default SwitchAuthScreens;
