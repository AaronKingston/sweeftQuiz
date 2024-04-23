import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    button: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      backgroundColor: Colors.landingGreen,
      borderRadius: 18,
      justifyContent: 'center',
      alignContent: 'center',
    },
    text: {
      color: Colors.backgroundColor,
      textAlign: 'center',
    },
  });
};

export default getStyleObj;
