import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuthContext} from '@src/context/AuthContext';
import BottomBasic from '@src/ui/bottom';

import {Text, View} from 'react-native';

const PrivateRoutesTab = createBottomTabNavigator();

const Home = () => {
  const {signOut} = useAuthContext();
  return (
    <View>
      <Text style={{fontSize: 60}}>Home Private Routes</Text>
      <BottomBasic text="Sign Out" onPress={() => signOut()} />
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
