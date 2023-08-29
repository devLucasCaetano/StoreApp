/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatalogScreen from '../screens/Catalog/CatalogScreen';
import CartScreen from '../screens/Cart/CartScreen';
import Icon from 'react-native-remix-icon';

function AppRoutes(): JSX.Element {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Catalog"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: '#C4C4CC',
          tabBarActiveTintColor: '#053768',
          tabBarStyle: {
            height: 50,
            backgroundColor: '#FFF',
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="shopping-bag-line" color={color} size={28} />
            ),
          }}
        />
        <Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="shopping-cart-line" color={color} size={28} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
