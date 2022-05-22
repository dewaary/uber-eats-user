import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import DishListItem from '../components/DishListItem';
import Basket from '../screens/Basket';
import DishDetailScreen from '../screens/DishDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderDetails from '../screens/OrderDetails';
import OrderScreen from '../screens/OrderScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetails';

//Icon
import IconHome from 'react-native-vector-icons/AntDesign';
IconHome.loadFont();

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome name="shoppingcart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome name="meho" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrderScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
