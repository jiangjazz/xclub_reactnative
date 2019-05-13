import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Pages/Home';
import Friends from './Pages/Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
});

export default createAppContainer(AppNavigator);