import {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import getStyleObj from './style';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from '../../assets/SVG';
import {Switch} from 'react-native-gesture-handler';
import {useAppContext} from '../../hooks/useAppContext';

const SettingsScreen: React.FC = ({navigation}) => {
  const {Colors, isDarkMode, toggleTheme} = useAppContext();
  const styles = getStyleObj();
  const {setOptions} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Drawer fill={Colors.light} />
        </TouchableOpacity>
      ),
    });
  }, [isDarkMode]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingContainer}>
        <Text style={styles.primaryText}>DARK MODE</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => toggleTheme()}
          trackColor={{false: '#81b0ff', true: '#767577'}}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f5dd4b'}
          ios_backgroundColor="#81b0ff"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
