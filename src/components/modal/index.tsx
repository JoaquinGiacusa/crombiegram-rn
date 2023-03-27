import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

type FadeModal = {
  visible: boolean;
  style?: {};
  children: React.ReactNode;
  rest?: any;
};

const FadeModal: React.FC<FadeModal> = ({
  visible,
  style,
  children,
  ...rest
}) => {
  // const [visible, setVisible] = useState(visibl);

  const visibility = useState(new Animated.Value(visible ? 1 : 0))[0];

  useEffect(() => {
    Animated.timing(visibility, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {});
  }, [visible, visibility]);

  const containerStyle = {
    width: '100%',
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1.1, 1],
        }),
      },
    ],
  };

  const combinedStyle = [containerStyle, style];
  return (
    <Animated.View style={visible ? combinedStyle : containerStyle} {...rest}>
      {visible ? children : null}
    </Animated.View>
  );
};

export default FadeModal;
