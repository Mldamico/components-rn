import 'react-native-gesture-handler';

import React from 'react';
import {StackNavigator} from './src/navigation/StackNavigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // background: 'black',

//     // primary: '#5856D6'
//   },
// };

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
