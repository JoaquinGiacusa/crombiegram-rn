import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/login';
import WelcomeScreen from '@src/screens/welcome';

const StackPublicRoutes = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <StackPublicRoutes.Navigator screenOptions={{headerShown: false}}>
      <StackPublicRoutes.Screen name="Welcome" component={WelcomeScreen} />
      <StackPublicRoutes.Screen name="Login" component={LoginScreen} />
    </StackPublicRoutes.Navigator>
  );
};

export default PublicRoutes;
