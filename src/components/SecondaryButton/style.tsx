import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    button: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: Colors.lightBlue,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 16,
      borderWidth: 3,
      borderColor: Colors.darkBlue,
    },
    text: {
      color: Colors.darkBlue,
      textAlign: 'center',
    },
  });
};

export default getStyleObj;
