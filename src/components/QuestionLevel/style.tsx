import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    levelContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 2,
      borderColor: Colors.secondaryPink,
      borderRadius: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 40,
      marginTop: 20,
    },
    levelText: {
      color: Colors.light,
      fontSize: 16,
    },
  });
};

export default getStyleObj;
