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
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      marginBottom: 120,
    },
  });
};

export default getStyleObj;
