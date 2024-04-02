import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    question: {
      marginTop: 36,
      paddingHorizontal: 40,
    },
    questionText: {
      color: colors.light,
      fontSize: 16,
    },
  });
};

export default getStyleObj;
