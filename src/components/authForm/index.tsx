import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';

import FormHeader from '@src/components/authForm/formHeader';
import FormSelectorBtn from '@src/components/authForm/formSelectorBtn';

import LoginForm from '@src/components/authForm/loginForm';
import SignupForm from './signupForm';

const {width} = Dimensions.get('window');

const AuthForm = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef<ScrollView>(null);

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', '#31314b'],
  });

  return (
    <View style={{width: '100%', flex: 1, paddingTop: 120}}>
      <View>
        <FormHeader
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="Sub header text"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>
      <View style={styles.headerBtnContainer}>
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
          onPress={() => scrollView.current?.scrollTo({x: 0})}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title="Sign up"
          onPress={() => scrollView.current?.scrollTo({x: width})}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animation}}}],
          {useNativeDriver: false},
        )}>
        <LoginForm />
        <ScrollView>
          <SignupForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  headerBtnContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 0,
  },
});
