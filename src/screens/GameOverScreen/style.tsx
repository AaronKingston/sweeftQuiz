import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
      backgroundColor: colors.backgroundColor,
      padding: 40,
    },
    text: {
      color: colors.light,
      fontSize: 18,
      textAlign: 'center',
    },
    resultBoard: {
      alignItems: 'center',
      marginTop: '30%',
      borderWidth: 3,
      borderColor: colors.secondaryPink,
      paddingVertical: 60,
      marginBottom: 60,
      borderRadius: 18,
    },
    score: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 32,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  });
};

export default getStyleObj;
