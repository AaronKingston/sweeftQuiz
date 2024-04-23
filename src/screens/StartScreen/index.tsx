import {View, TouchableOpacity} from 'react-native';
import getStyleObj from './style';
import PrimaryButton from '../../components/PrimaryButton';
import {SweeftLogo} from '../../assets/SVG';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Drawer} from '../../assets/SVG';
import {useAppContext} from '../../hooks/useAppContext';

const StartScreen: React.FC = ({navigation}) => {
  const {Colors, isDarkMode} = useAppContext();
  const {navigate, setOptions} = useNavigation();
  const styles = getStyleObj();

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
      <View style={styles.logoContainer}>
        <SweeftLogo fill={Colors.light} />
      </View>
      <PrimaryButton
        onPress={() => navigate('MenuScreen')}
        name={'play'}
        color={Colors.backgroundColor}
      />
    </View>
  );
};

export default StartScreen;
