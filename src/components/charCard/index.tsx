import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {windowWidth, windowHeight} from '@src/utils/dimensions';

type CharacterProps = {
  id: string;
  name: string;
  species: string;
  image_src: string;
  cardAnimation: any;
};

const CharCard: React.FC<CharacterProps> = ({
  id,
  name,
  species,
  image_src,
  cardAnimation,
}) => {
  //   console.log(cardAnimation);
  return (
    <Animated.View style={[styles.container, cardAnimation]}>
      <Image style={styles.image} source={{uri: image_src}}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.species}>{species}</Text>
      </View>
    </Animated.View>
  );
};

export default CharCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    position: 'absolute',
    elevation: 2,
    backgroundColor: '#fff',
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
  },

  textContainer: {
    // flexDirection: 'row',
    // backgroundColor: '#114747',

    padding: 8,
  },

  name: {fontSize: 30, color: '#000000'},

  species: {
    fontSize: 22,
    color: '#524f4f',
  },
  image: {
    marginRight: 'auto',
    marginLeft: 'auto',
    resizeMode: 'cover',
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
