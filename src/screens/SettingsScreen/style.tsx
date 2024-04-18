import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    settingContainer: {
      padding: 36,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colors.light,
    },
    primaryText: {
      color: colors.light,
      fontSize: 18,
    },
  });
};

export default getStyleObj;
