/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme/theme';
import HeaderComponent from './src/components/Header/HeaderComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <HeaderComponent />
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
