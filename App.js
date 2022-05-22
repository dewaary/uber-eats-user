/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';
import DishListItem from './src/components/DishListItem';
import Basket from './src/screens/Basket';
import DishDetailScreen from './src/screens/DishDetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderDetails from './src/screens/OrderDetails';
import OrderScreen from './src/screens/OrderScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailScreen /> */}
      {/* <DishListItem /> */}
      {/* <DishDetailScreen /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // marginVertical: 30,
  },
});
