import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const CustomLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#923CFF',
    secondary: '#991111',
    text: '#000000',
    background: '#f3f1f1',
    border: '#FFFFFF',
    notification: 'rgb(255, 69, 58)',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#f4326b',
    secondary: '#19bc5f',
    text: '#ffffff',
    background: '#121212',
    border: '#222121',
    notification: 'rgb(255, 69, 58)',
  },
};
