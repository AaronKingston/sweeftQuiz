import {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import getStyleObj from './style';
import {colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from '../../assets/SVG';
import {Switch} from 'react-native-gesture-handler';
//import ThemeContext from '../../store/context/theme-context';

const SettingsScreen: React.FC = ({navigation}) => {
  const styles = getStyleObj();
  const {setOptions} = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(true);
  //const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Drawer fill={colors.light} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingContainer}>
        <Text style={styles.primaryText}>DARK MODE</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prevMode => !prevMode)}
          trackColor={{false: '#81b0ff', true: '#767577'}}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f5dd4b'}
          ios_backgroundColor="#81b0ff"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
