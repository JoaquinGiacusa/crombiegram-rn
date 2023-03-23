import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomBasic from '@src/ui/bottom';
import SwitchTheme from '@src/components/switch-theme';
import {useTheme} from '@react-navigation/native';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>Welcome</Text>
      <BottomBasic text="Login" onPress={() => navigation.navigate('Login')} />
      <View style={styles.switchContainer}>
        <SwitchTheme />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 55,
    paddingLeft: 30,
  },
  switchContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 30,
  },
});
