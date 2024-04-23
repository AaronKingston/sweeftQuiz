import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GameOverScreen from '../screens/GameOverScreen';
import GameScreen from '../screens/GameScreen';
import MenuScreen from '../screens/MenuScreen';
import StartStack from '../screens/StartStack';
import {useAppContext} from '../hooks/useAppContext';

const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  const {Colors} = useAppContext();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="StartStack"
          component={StartStack}
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerShown: true,
            title: 'MENU',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.backgroundColor,
            },
            headerTitleStyle: {
              color: Colors.light,
              textAlign: 'center',
              fontSize: 16,
            },
          }}
        />
        <Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.backgroundColor,
            },
            headerTitleStyle: {
              color: Colors.light,
            },
          }}
        />
        <Screen
          name="GameOverScreen"
          component={GameOverScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
