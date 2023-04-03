import React, {useCallback, useEffect, useRef, useState} from 'react';
import {windowWidth, windowHeight} from '@src/utils/dimensions';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  GestureResponderEvent,
  PanResponderGestureState,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import useGetCharRyM, {Chars} from '@src/hooks/useGetCharRyM';
import CharCard from '@src/components/charCard';
import CheckIcon from '@src/assets/icons/CheckIcon';
import CancelIcon from '@src/assets/icons/CancelIcon';
import CardFooter from '@src/components/cardFooter';

const PanResponderTest = () => {
  const {data, error, loading} = useGetCharRyM();

  const [chars, setChars] = useState<Chars[]>();
  // console.log(chars?.length);
  useEffect(() => {
    // @ts-ignore
    setChars(data?.characters?.results);
  }, [data]);
  const animatedValue = useRef(new Animated.ValueXY()).current;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePressChoice = useCallback((direction: number) => {
    Animated.timing(animatedValue, {
      duration: 400,
      toValue: direction * windowHeight * 1.1,
      useNativeDriver: true,
    }).start(() => {
      removeTopCard();
    });
  }, []);

  const removeTopCard = useCallback(() => {
    setChars(prevState => prevState!.slice(1));
    animatedValue.setValue({x: 0, y: 0});
  }, [animatedValue]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedValue.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        const direction = Math.sign(gesture.dx);
        const isActionActive = Math.abs(gesture.dx) > 100;

        if (isActionActive) {
          Animated.spring(animatedValue, {
            // duration: 200,
            toValue: {
              x: direction * windowWidth * 1.1,
              y: gesture.dy,
            },
            useNativeDriver: true,
          }).start(removeTopCard);
        } else {
          Animated.spring(animatedValue, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer} {...panResponder.panHandlers}>
        {chars &&
          chars.length &&
          //@ts-ignore
          chars
            .map(
              (
                item: {
                  species: string;
                  id: string;
                  name: string;
                  image: string;
                },
                index: number,
              ) => {
                let cardAnimation = {};
                let likeTextAnimation = {};
                let nopeTextAnimation = {};
                // console.log(item.id);
                if (index >= currentCardIndex) {
                  if (index === currentCardIndex) {
                    cardAnimation = {
                      transform: [
                        // {translateX: animatedValue.x},
                        {
                          translateX: animatedValue.x.interpolate({
                            inputRange: [-windowHeight, windowHeight],
                            outputRange: [
                              -windowHeight * 1.2,
                              windowHeight * 1.2,
                            ],
                          }),
                        },
                        {
                          translateY: animatedValue.y.interpolate({
                            inputRange: [0, 100],
                            outputRange: [0, 20],
                          }),
                        },

                        {
                          rotate: animatedValue.x.interpolate({
                            inputRange: [-windowWidth * 1.5, windowWidth * 1.5],
                            outputRange: ['-50deg', '50deg'],
                          }),
                        },
                      ],
                    };

                    // likeTextAnimation = {
                    //   opacity: animatedValue.x.interpolate({
                    //     inputRange: [0, windowWidth * 0.25],
                    //     outputRange: [0, 1],
                    //   }),
                    // };

                    // nopeTextAnimation = {
                    //   opacity: animatedValue.x.interpolate({
                    //     inputRange: [-windowWidth * 0.25, 0],
                    //     outputRange: [1, 0],
                    //   }),
                    // };
                  }
                  return (
                    // <Animated.View key={item.id} style={[styles.card, cardAnimation]}>
                    //   <Animated.Image source={item.avatar} style={styles.image} />
                    //   {/* {index === currentCardIndex && (
                    //     <React.Fragment>
                    //       <Animated.Text
                    //         style={[styles.text, styles.likeText, likeTextAnimation]}>
                    //         LIKE
                    //       </Animated.Text>
                    //       <Animated.Text
                    //         style={[styles.text, styles.nopeText, nopeTextAnimation]}>
                    //         NOPE
                    //       </Animated.Text>
                    //     </React.Fragment>
                    //   )} */}
                    // </Animated.View>
                    <CharCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      species={item.species}
                      image_src={item.image}
                      cardAnimation={cardAnimation}
                    />
                  );
                }
              },
            )
            .reverse()}
      </View>
      <CardFooter handleChoice={handlePressChoice} />
    </View>
  );
};

export default PanResponderTest;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f5eeee',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
