import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DishListItem from './src/components/DishListItem';
import Basket from '../src/screens/Basket';
import DishDetailScreen from '../src/screens/DishDetailScreen';
import HomeScreen from '../src/screens/HomeScreen';
import OrderDetails from '../src/screens/OrderDetails';
import OrderScreen from '../src/screens/OrderScreen';
import RestaurantDetailScreen from '../src/screens/RestaurantDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
