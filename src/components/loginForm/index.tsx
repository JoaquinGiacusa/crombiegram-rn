import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBasic from '@src/ui/input';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <InputBasic label="Email" placeHolder="example@mail.com" />
      <InputBasic label="Password" placeHolder="" />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    width: '100%',
    padding: 30,

    gap: 40,
  },
});
