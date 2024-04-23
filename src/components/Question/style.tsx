import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    question: {
      marginTop: 36,
      paddingHorizontal: 40,
    },
    headerText: {
      fontSize: 22,
      color: Colors.secondaryPink,
      marginBottom: 18,
      fontWeight: 'bold',
    },
    questionText: {
      color: Colors.light,
      fontSize: 16,
    },
  });
};

export default getStyleObj;
