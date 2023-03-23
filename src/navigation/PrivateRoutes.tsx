import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text, View} from 'react-native';

const PrivateRoutesTab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <Text style={{fontSize: 60}}>Home Private Routes</Text>
    </View>
  );
};

const PrivateRoutes = () => {
  return (
    <PrivateRoutesTab.Navigator>
      <PrivateRoutesTab.Screen name="Home" component={Home} />
    </PrivateRoutesTab.Navigator>
  );
};

export default PrivateRoutes;
