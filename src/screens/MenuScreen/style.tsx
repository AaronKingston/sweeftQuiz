import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      justifyContent: 'center',
      padding: 40,
    },
    logoContainer: {
      marginBottom: 150,
      height: 120,
    },
    buttonContainer: {
      justifyContent: 'space-between',
    },
    secondaryButton: {
      backgroundColor: Colors.transparent,
      borderColor: Colors.secondaryPink,
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
      color: Colors.backgroundColor,
    },
  });
};

export default getStyleObj;
