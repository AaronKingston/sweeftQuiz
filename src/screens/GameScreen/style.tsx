import {StyleSheet} from 'react-native';
import {useAppContext} from '../../hooks/useAppContext';

const getStyleObj = () => {
  const {Colors} = useAppContext();
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },
    answersContainer: {
      paddingHorizontal: 36,
      marginTop: 20,
    },
    nextBTN: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paginationText: {
      color: Colors.light,
      fontSize: 16,
    },
    currentPagination: {
      color: Colors.light,
      fontSize: 28,
      fontWeight: '900',
    },
  });
};

export default getStyleObj;
