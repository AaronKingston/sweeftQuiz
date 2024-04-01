import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    answerContainer: {
      marginTop: 16,
      paddingVertical: 8,
      //borderRadius: 2,
      borderWidth: 1,
      borderColor: colors.secondaryPink,
      backgroundColor: colors.primaryViolet,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    answerText: {
      color: colors.light,
      fontSize: 16,
      //fontWeight: 'bold',
      width: '80%',
    },
    check: {
      width: 26,
      height: 26,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: colors.neutralPink,
    },
  });
};

export default getStyleObj;
