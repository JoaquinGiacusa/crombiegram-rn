import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import BottomBasic from '@src/ui/bottom';
import SwitchTheme from '@src/components/switch-theme';
import {useTheme} from '@react-navigation/native';
import FloatingLabelInput from '@src/ui/input/FloatingLabelInput';
import {useKeyboardVisible} from '@src/hooks/useKeyboardVisible';
import FadeModal from '@src/components/modal';
import AuthForm from '@src/components/authForm';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Text style={[styles.title, {color: colors.text}]}>Welcome</Text>
      <BottomBasic text="Login" onPress={() => navigation.navigate('Login')} /> */}
      <AuthForm />
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
