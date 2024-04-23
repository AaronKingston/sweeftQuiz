import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    answerContainer: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: Colors.secondaryPink,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    answerText: {
      color: Colors.light,
      fontSize: 16,
      width: '80%',
    },
    check: {
      width: 26,
      height: 26,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: Colors.neutralPink,
    },
  });
};

export default getStyleObj;
