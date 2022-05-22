import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const RestaurantHeader = ({restaurant}) => {
  return (
    <View style={styles.page}>
      <Image source={{uri: restaurant.image}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} {restaurant.minDeliveryTime} -{' '}
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;

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
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
});
