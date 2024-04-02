import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    answersContainer: {
      paddingHorizontal: 36,
      marginTop: 20,
    },
    nextBTN: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    questionPagination: {
      marginTop: 36,
      paddingHorizontal: 36,
    },
    paginationText: {
      color: colors.light,
      fontSize: 16,
    },
    currentPagination: {
      color: colors.light,
      fontSize: 16,
      fontWeight: '800',
    },
  });
};

export default getStyleObj;
