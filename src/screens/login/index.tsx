import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginForm from '@src/components/loginForm';
import {useTheme} from '@react-navigation/native';
import SwitchTheme from '@src/components/switch-theme';
import {useKeyboardVisible} from '@src/hooks/useKeyboardVisible';

const LoginScreen = () => {
  const {colors} = useTheme();

  const {isKeyboardVisible} = useKeyboardVisible();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>Login</Text>
      <LoginForm />
      {!isKeyboardVisible && (
        <View style={styles.switchContainer}>
          <SwitchTheme />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
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
