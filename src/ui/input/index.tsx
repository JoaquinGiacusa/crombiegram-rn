import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';

type InputBasicType = {
  placeHolder: string;
  label: string;
};

const InputBasic: React.FC<InputBasicType> = ({placeHolder, label}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: colors.text}]}>{label}</Text>
      <TextInput
        placeholder={placeHolder}
        style={[
          styles.input,
          {color: colors.text},
          {borderColor: '#141313'},

          {backgroundColor: colors.border},
          {shadowColor: colors.text},
        ]}
      />
    </View>
  );
};

export default InputBasic;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  label: {fontFamily: 'Poppins-Regular', fontSize: 18, bottom: 0, left: 10},

  input: {
    borderRadius: 8,
    paddingStart: 20,

    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    paddingTop: 4,
    paddingBottom: 0,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    elevation: 1,
    height: 50,
  },
});
