import {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {getQuestions} from '../../store/slices/quizSlice';
import {Answer, PrimaryButton, Question, QuestionLevel} from '../../components';

import getStyleObj from './style';
import shuffle from '../../utils/shuffle';
import {colors} from '../../styles/colors';

import {TouchableOpacity} from 'react-native';
import {LeftArrow} from '../../assets/SVG';

const GameScreen = () => {
  const styles = getStyleObj();
  const {params} = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);

  const {difficulty, category} = params || {};
  const {questions, questionsLoading} = useSelector(state => state.quiz);
  const [passedAnswers, setPassedAnswers] = useState([]);

  useEffect(() => {
    dispatch(getQuestions({difficulty, category}));
  }, []);

  const answers = useCallback(() => {
    if (!questionsLoading) {
      let shuffledAnswers = questions?.[
        questionIndex
      ]?.incorrect_answers?.concat(questions?.[questionIndex]?.correct_answer);
      setAllAnswers(shuffle(shuffledAnswers));
    }
  }, [questionIndex, questionsLoading]);

  useEffect(() => {
    answers();
  }, [questionIndex, questionsLoading]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigation.navigate('StartScreen');
          }}>
          <LeftArrow fill={colors.light} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const handleNextQeustion = useCallback(() => {
    if (questionIndex + 1 < questions?.length) {
      if (
        passedAnswers?.[questionIndex] !== undefined &&
        passedAnswers?.[questionIndex]?.hasScore !== 0
      ) {
        setQuestionIndex(questionIndex + 1);
      }
    } else {
      let correctAnswers = 0;
      let incorrectAnswers = 0;
      passedAnswers?.map(item => {
        if (item?.hasScore === 1) {
          correctAnswers += 1;
        } else if (item?.hasScore === -1) {
          incorrectAnswers += 1;
        }
      });
      navigation.navigate('GameOverScreen', {
        correctAnswers: correctAnswers,
        incorrectAnswers: incorrectAnswers,
      });
    }
  }, [questionsLoading, questionIndex, passedAnswers]);

  const answerCallback = useCallback(
    item => {
      return (
        <Answer
          key={item}
          text={item}
          correctAnswer={questions?.[questionIndex]?.correct_answer}
          marked={!!passedAnswers?.[questionIndex]?.markedAnswer}
          passedAnswer={value => {
            setPassedAnswers(prev => prev.concat(value));
          }}
          showCorrectAnswer={
            questions?.[questionIndex]?.correct_answer === item &&
            passedAnswers?.[questionIndex]
          }
          disabled={passedAnswers?.[questionIndex] !== undefined}
        />
      );
    },
    [passedAnswers, questionIndex, questions],
  );

  if (questionsLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.backgroundColor,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.secondaryPink} />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <QuestionLevel level={questions?.[questionIndex]?.difficulty} />
      <Question
        index={questionIndex}
        maxQuestions={questions?.length}
        question={questions?.[questionIndex]?.question}
      />
      <View style={styles.answersContainer}>
        {allAnswers?.map(item => answerCallback(item))}
      </View>
      <View style={styles.nextBTN}>
        <PrimaryButton
          name="Next"
          customStyle={{width: '37%'}}
          onPress={handleNextQeustion}
        />
      </View>
    </View>
  );
};

export default GameScreen;
