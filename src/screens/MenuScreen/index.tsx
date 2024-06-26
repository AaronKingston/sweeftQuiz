import 'react-native-gesture-handler';
import {useCallback, useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Portal} from 'react-native-portalize';
import {useModalize, Modalize} from 'react-native-modalize';

import {getCategories} from '../../store/slices/quizSlice';
import {PrimaryButton, SecondaryButton} from '../../components';

import getStyleObj from './style';
import {SweeftLogo, LeftArrow} from '../../assets/SVG';
import {useAppContext} from '../../hooks/useAppContext';

interface RenderItemType {
  name: string;
}

const difficultyData = [
  {id: 'easy', name: 'Easy'},
  {id: 'medium', name: 'Medium'},
  {id: 'hard', name: 'Hard'},
];

const MenuScreen: React.FC = () => {
  const {Colors} = useAppContext();
  const styles = getStyleObj();
  const dispatch = useDispatch();
  const {navigate, setOptions} = useNavigation();

  const [modalType, setModalType] = useState();
  const [categoryButton, setCategoryButton] = useState({
    id: '',
    name: 'ANY CATEGORY',
  });
  const [difficultyButton, setDifficultyButton] = useState({
    id: '',
    name: 'ANY DIFFICULTY',
  });
  const {categories, categoryLoading} = useSelector(state => state.quiz);

  const {ref, open, close} = useModalize();

  useEffect(() => {
    dispatch(getCategories());
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigate('StartStack');
          }}>
          <LeftArrow fill={Colors.light} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderItem = ({item}: RenderItemType) => (
    <TouchableOpacity
      style={styles.sheetButton}
      onPress={() => handleModalItemPress(item)}>
      <Text style={styles.sheetButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const openModalHandler = useCallback(value => {
    setModalType(value);
    open();
  }, []);

  const handleModalItemPress = useCallback(
    ({name, id}) => {
      if (modalType === 'DIFFICULTY') {
        setDifficultyButton({name, id});
      } else {
        setCategoryButton({name, id});
      }
      close();
    },
    [close, modalType],
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <SweeftLogo fill={Colors.light} />
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          onPress={() => openModalHandler('DIFFICULTY')}
          customStyle={styles.secondaryButton}
          name={difficultyButton.name}
          color={Colors.light}
        />
        <SecondaryButton
          onPress={() => openModalHandler('CATEGORY')}
          customStyle={styles.secondaryButton}
          name={categoryButton.name}
          color={Colors.light}
        />
      </View>
      <PrimaryButton
        customStyle={styles.primaryButton}
        name="PLAY"
        onPress={() => {
          navigate('GameScreen', {
            difficulty: difficultyButton,
            category: categoryButton,
          });
        }}
      />
      <Portal>
        <Modalize
          ref={ref}
          handlePosition={'outside'}
          disableScrollIfPossible={false}
          modalHeight={700}
          snapPoint={300}
          HeaderComponent={
            <View
              style={{
                padding: 20,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: Colors.backgroundColor,
                }}>
                {modalType}
              </Text>
            </View>
          }
          flatListProps={{
            data: modalType === 'DIFFICULTY' ? difficultyData : categories,
            renderItem: renderItem,
            keyExtractor: item => item.id,
            showsVerticalScrollIndicator: false,
          }}
        />
      </Portal>
    </View>
  );
};

export default MenuScreen;
