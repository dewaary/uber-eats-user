import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: restaurant.image}} style={styles.image} />

      {/* <Icon 
            name="arrow-back-circle"
            size={45}
            color="white"
            style={styles.iconContainer}
        /> */}

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} {restaurant.minDeliveryTime} -{' '}
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
});
