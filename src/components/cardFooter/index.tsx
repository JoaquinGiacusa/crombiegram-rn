import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import CancelIcon from '@src/assets/icons/CancelIcon';
import CheckIcon from '@src/assets/icons/CheckIcon';

const ButtonActionCard = ({
  type,
  onPress,
}: {
  type: 'yes' | 'no';
  onPress: () => void;
}) => {
  const scaleButton = useRef(new Animated.Value(1)).current;

  const scalePressBtn = useCallback((scaleValue: number) => {
    Animated.spring(scaleButton, {
      toValue: scaleValue,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => scalePressBtn(0.8)}
      onPressOut={() => {
        scalePressBtn(1);
        onPress();
      }}
      delayPressOut={100}>
      <Animated.View
        style={[stylesBtn.footerButton, {transform: [{scale: scaleButton}]}]}>
        {type === 'no' && <CancelIcon color="#dd1717" />}
        {type === 'yes' && <CheckIcon color="#088612" />}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const stylesBtn = StyleSheet.create({
  footerButton: {
    padding: 25,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CardFooter = ({
  handleChoice,
}: {
  handleChoice: (direction: number) => void;
}) => {
  return (
    <View style={stylesFooter.container}>
      <ButtonActionCard type="no" onPress={() => handleChoice(-1)} />
      <ButtonActionCard type="yes" onPress={() => handleChoice(1)} />
    </View>
  );
};

export default CardFooter;

const stylesFooter = StyleSheet.create({
  container: {
    width: '100%',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 28,
  },
});
