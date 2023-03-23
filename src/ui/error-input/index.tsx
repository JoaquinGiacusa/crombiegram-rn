import {StyleSheet, Text} from 'react-native';
import React from 'react';

const ErrorInput = ({text}: {text: string}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default ErrorInput;

const styles = StyleSheet.create({
  text: {
    color: '#e60000',
    fontSize: 14,
  },
});
