import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    button: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: colors.lightBlue,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 16,
      borderWidth: 3,
      borderColor: colors.darkBlue,
    },
    text: {
      color: colors.darkBlue,
      textAlign: 'center',
    },
  });
};

export default getStyleObj;
