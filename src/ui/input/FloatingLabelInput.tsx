import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput, Animated} from 'react-native';
import {useTheme} from '@react-navigation/native';

const FloatingLabelInput: React.FC<{
  label: string;
  value: string;
  onChangeText: (newText: string) => void;
}> = ({label, ...props}) => {
  const [isFocused, setsFocused] = useState(false);
  const handleFocus = () => setsFocused(true);
  const handleBlur = () => setsFocused(false);
  const {colors} = useTheme();
  const animatedIsFocused = useState(new Animated.Value(0))[0];

  const labelStyle = {
    position: 'absolute' as 'absolute',
    zIndex: 40,
    left: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [11, -21],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', colors.text],
    }),
  };

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || props.value !== '' ? 1 : 0,
      duration: 160,
      useNativeDriver: false,
    }).start();
  }, [isFocused, animatedIsFocused, props.value]);

  return (
    <View>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...props}
        style={[
          styles.input,
          {color: colors.text},
          {backgroundColor: colors.border},
          {shadowColor: colors.text},
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
      />
    </View>
  );
};

export default FloatingLabelInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 20,
    color: '#000',
    borderRadius: 8,
    paddingStart: 10,
    borderColor: '#141414',
    fontFamily: 'Poppins-Regular',
    paddingTop: 2,
    paddingBottom: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    elevation: 1,
    height: 50,
  },
});
