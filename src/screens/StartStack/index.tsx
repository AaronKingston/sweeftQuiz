import 'react-native-gesture-handler';
// import {View} from 'react-native';
// import getStyleObj from './style';
import {colors} from '../../styles/colors';
//import {useNavigation} from '@react-navigation/native';
// import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StartScreen from '../StartScreen';
import SettingsScreen from '../SettingsScreen';
import {Settings, Home} from '../../assets/SVG';

const {Navigator, Screen} = createDrawerNavigator();

const StartStack: React.FC = () => {
  //const styles = getStyleObj();

  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerStyle: {backgroundColor: colors.backgroundColor},
        headerTintColor: colors.light,
        sceneContainerStyle: {backgroundColor: colors.neutralPink},
        drawerContentStyle: {backgroundColor: colors.primaryViolet},
        drawerInactiveTintColor: colors.light,
        drawerActiveTintColor: colors.backgroundColor,
        drawerActiveBackgroundColor: colors.light,
      }}>
      <Screen
        name="StartScreen"
        component={StartScreen}
        options={{
          headerShown: true,
          title: 'HOME',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.backgroundColor,
          },
          headerTitleStyle: {
            color: colors.light,
            textAlign: 'center',
            fontSize: 16,
          },
          drawerIcon: ({color, size}) => <Home fill={color} size={size} />,
        }}
      />
      <Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          title: 'SETTINGS',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.backgroundColor,
          },
          headerTitleStyle: {
            color: colors.light,
            textAlign: 'center',
            fontSize: 16,
          },
          drawerIcon: ({color, size}) => <Settings fill={color} size={size} />,
        }}
      />
    </Navigator>
  );
};

export default StartStack;
