/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
