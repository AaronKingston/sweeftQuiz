import 'react-native-gesture-handler';
// import {View} from 'react-native';
// import getStyleObj from './style';
//import {useNavigation} from '@react-navigation/native';
// import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StartScreen from '../StartScreen';
import SettingsScreen from '../SettingsScreen';
import {Settings, Home} from '../../assets/SVG';
import {useAppContext} from '../../hooks/useAppContext';

const {Navigator, Screen} = createDrawerNavigator();

const StartStack: React.FC = () => {
  //const styles = getStyleObj();
  const {Colors} = useAppContext();
  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerStyle: {backgroundColor: Colors.backgroundColor},
        headerTintColor: Colors.light,
        sceneContainerStyle: {backgroundColor: Colors.neutralPink},
        drawerContentStyle: {backgroundColor: Colors.primaryViolet},
        drawerInactiveTintColor: Colors.light,
        drawerActiveTintColor: Colors.backgroundColor,
        drawerActiveBackgroundColor: Colors.light,
      }}>
      <Screen
        name="StartScreen"
        component={StartScreen}
        options={{
          headerShown: true,
          title: 'HOME',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.backgroundColor,
          },
          headerTitleStyle: {
            color: Colors.light,
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
            backgroundColor: Colors.backgroundColor,
          },
          headerTitleStyle: {
            color: Colors.light,
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
