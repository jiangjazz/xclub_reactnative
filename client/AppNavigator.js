import { createStackNavigator, createAppContainer } from 'react-navigation';
import Ucenter from './Pages/Ucenter';
import Friends from './Pages/Friends';

const AppNavigator = createStackNavigator({
  Ucenter: { screen: Ucenter },
  Friends: { screen: Friends },
}, {
  initialRouteName:  'Ucenter'
});

export default createAppContainer(AppNavigator);