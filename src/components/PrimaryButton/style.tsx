import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    button: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      backgroundColor: colors.landingGreen,
      borderRadius: 18,
      justifyContent: 'center',
      alignContent: 'center',
    },
    text: {
      color: colors.backgroundColor,
      textAlign: 'center',
    },
  });
};

export default getStyleObj;
