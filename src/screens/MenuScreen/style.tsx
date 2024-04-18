import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      padding: 40,
    },
    logoContainer: {
      marginBottom: 150,
      height: 200,
    },
    buttonContainer: {
      justifyContent: 'space-between',
    },
    secondaryButton: {
      backgroundColor: colors.transparent,
      borderColor: colors.secondaryPink,
      marginTop: 8,
    },
    primaryButton: {
      marginHorizontal: 40,
      marginTop: 60,
    },
    sheetButton: {
      margin: 8,
    },
    sheetButtonText: {
      fontSize: 20,
      color: colors.backgroundColor,
    },
  });
};

export default getStyleObj;
