import {View, TouchableOpacity} from 'react-native';
import getStyleObj from './style';
import PrimaryButton from '../../components/PrimaryButton';
import {colors} from '../../styles/colors';
import {SweeftLight} from '../../assets/SVG';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Drawer} from '../../assets/SVG';

const StartScreen: React.FC = ({navigation}) => {
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
          <Drawer fill={colors.light} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <SweeftLight />
      </View>
      <PrimaryButton
        onPress={() => navigate('MenuScreen')}
        name={'play'}
        color={colors.backgroundColor}
      />
    </View>
  );
};

export default StartScreen;
