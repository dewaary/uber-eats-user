import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import IconBack from 'react-native-vector-icons/Ionicons';
IconBack.loadFont();
import {useRoute, useNavigation} from '@react-navigation/native';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  console.log('ini id', id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
        keyExtractor={item => item.name}
      />

      <IconBack
        onPress={() => navigation.navigate('Home')}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
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
