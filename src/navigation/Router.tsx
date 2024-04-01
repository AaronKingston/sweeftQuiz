import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; //////////////////////////////////
import {LeftArrow} from '../assets/SVG';
import {TouchableOpacity, View} from 'react-native';
import GameOverScreen from '../screens/GameOverScreen';
import GameScreen from '../screens/GameScreen';
import MenuScreen from '../screens/MenuScreen';
import StartScreen from '../screens/StartScreen';
import {colors} from '../styles/colors';
//import {useNavigation} from '@react-navigation/native';

interface Props {
  navigation: any;
}

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
  //const {navigate} = useNavigation();
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
            title: 'Game',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 12}}
                onPress={() => {
                  navigate('StartScreen');
                }}>
                <LeftArrow fill={colors.light} />
              </TouchableOpacity>
            ),
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
