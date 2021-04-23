import {DefaultTheme, Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light'} | {type: 'set_dark'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255,0.6)',
  colors: {
    primary: '#5856D6',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light':
      return {
        ...lightTheme,
      };
    case 'set_dark':
      return {
        ...darkTheme,
      };
    default:
      return state;
  }
};
