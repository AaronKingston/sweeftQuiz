import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GameOverScreen from '../screens/GameOverScreen';
import GameScreen from '../screens/GameScreen';
import MenuScreen from '../screens/MenuScreen';
import StartScreen from '../screens/StartScreen';
import {colors} from '../styles/colors';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.backgroundColor,
            },
            headerTitleStyle: {
              color: colors.light,
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
