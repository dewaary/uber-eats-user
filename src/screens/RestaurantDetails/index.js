import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import Header from './Header';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
      />
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
