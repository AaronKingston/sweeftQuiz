import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PrimaryButton} from '../../components';

import getStyleObj from './style';
import {CheckFalse, CheckTrue} from '../../assets/SVG';
import {useAppContext} from '../../hooks/useAppContext';

const GameOverScreen = () => {
  const {Colors} = useAppContext();
  const styles = getStyleObj();
  const {navigate} = useNavigation();
  const {params} = useRoute();

  const {correctAnswers, incorrectAnswers} = params || {};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.resultBoard}>
        <View style={styles.score}>
          <View>
            <Text style={[styles.text, {marginBottom: 6}]}>CORRECT</Text>
            <View style={styles.row}>
              <CheckTrue />
              <Text style={styles.text}>{correctAnswers || 0}</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.text, {marginBottom: 6}]}>INCORRECT</Text>
            <View style={styles.row}>
              <CheckFalse />
              <Text style={styles.text}>{incorrectAnswers || 0}</Text>
            </View>
          </View>
        </View>
      </View>
      <PrimaryButton
        name="menu"
        color={Colors.backgroundColor}
        onPress={() => {
          navigate('StartStack');
        }}
      />
    </View>
  );
};

export default GameOverScreen;
