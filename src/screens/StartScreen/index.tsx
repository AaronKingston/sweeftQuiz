import {useEffect} from 'react';
import {View} from 'react-native';
import getStyleObj from './style';
import PrimaryButton from '../../components/PrimaryButton';
import {colors} from '../../styles/colors';
import {SweeftLight} from '../../assets/SVG';
import {useNavigation} from '@react-navigation/native';
import {getCategories, getQuestions} from '../../store/slices/quizSlice';
import {useDispatch} from 'react-redux';

const StartScreen: React.FC = () => {
  const {navigate} = useNavigation();
  const styles = getStyleObj();
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getQuestions());
  //   // console.log('categories fetch requested');
  // }, []);

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

//() => navigate('GameOverScreen')

export default StartScreen;
