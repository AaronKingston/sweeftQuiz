import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
      backgroundColor: Colors.backgroundColor,
      padding: 40,
    },
    text: {
      color: Colors.light,
      fontSize: 18,
      textAlign: 'center',
    },
    resultBoard: {
      alignItems: 'center',
      marginTop: '30%',
      borderWidth: 3,
      borderColor: Colors.secondaryPink,
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
