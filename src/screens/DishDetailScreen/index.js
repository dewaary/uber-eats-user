// Styling and Icon
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IconPlus from 'react-native-vector-icons/Octicons';
IconPlus.loadFont();
import IconMinus from 'react-native-vector-icons/Feather';
IconMinus.loadFont();

import restaurants from '../../../assets/data/restaurants.json';
const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <IconMinus
          name="minus-circle"
          size={65}
          color={'black'}
          onPress={onMinus}
        />

        <Text style={styles.quantity}>{quantity}</Text>

        <IconPlus
          name="plus-circle"
          size={60}
          color={'black'}
          onPress={onPlus}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket ({getTotal()} $)
        </Text>
      </View>
    </View>
  );
};

export default DishDetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 40,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});
