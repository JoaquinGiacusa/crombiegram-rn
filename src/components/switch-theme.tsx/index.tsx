import {StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import {useThemeColorContext} from '@src/context/ThemeColorContext';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

const SwitchTheme = () => {
  const {mode, toggleColorMode} = useThemeColorContext();

  const {colors} = useTheme();
  return (
    <View style={[styles.container, {borderColor: colors.text}]}>
      <Icon name="day-sunny" size={25} color={colors.text} />
      <Switch
        thumbColor={colors.text}
        trackColor={{false: '#181618ea', true: '#ccc'}}
        ios_backgroundColor={colors.text}
        value={mode === 'dark' ? true : false}
        onChange={() => toggleColorMode()}
      />
      <Icon name="night-clear" size={25} color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 25,
    padding: 5,
  },
});

export default SwitchTheme;
