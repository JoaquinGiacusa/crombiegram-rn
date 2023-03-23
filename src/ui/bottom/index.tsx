import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type ButtomBasicProps = {
  text: string;
  onPress: () => void;
};

const BottomBasic: React.FC<ButtomBasicProps> = ({text, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.primary}]}
      onPress={() => onPress()}>
      <Text style={[styles.text, {color: 'white'}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BottomBasic;
//theme
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',

    // height: 100,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    // color: colors,

    fontSize: 22,
    fontWeight: '700',
  },
});
