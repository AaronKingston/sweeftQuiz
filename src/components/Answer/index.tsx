import {View, Text, TouchableOpacity} from 'react-native';

import getStyleObj from './style';
import {useCallback, useEffect, useState} from 'react';
import {CheckFalse, CheckTrue} from '../../assets/SVG';
import entitiesParser from '../../utils/entitiesParser';

interface Props {
  text: string;
  correctAnswer: string;
  marked: boolean;
  passedAnswer: () => void;
  showCorrectAnswer: boolean;
  disabled: boolean;
}

const Answer: React.FC<Props> = ({
  text,
  marked,
  correctAnswer,
  passedAnswer,
  showCorrectAnswer,
  disabled,
}) => {
  const styles = getStyleObj();
  const [isMarked, setIsMarked] = useState(marked);
  const [chosenAnswer, setChosenAnswer] = useState({});

  useEffect(() => {
    setIsMarked(marked);
  }, [text]);

  const handleOnAnswer = useCallback(() => {
    setIsMarked(!isMarked);
    passedAnswer({
      correctAnswer: correctAnswer,
      markedAnswer: text,
      hasScore: correctAnswer === text ? 1 : -1,
    });
    setChosenAnswer({correctAnswer: correctAnswer, markedAnswer: text});
  }, [correctAnswer, isMarked, passedAnswer, text]);

  const indicator = useCallback(() => {
    if (isMarked || showCorrectAnswer) {
      if (text === correctAnswer) {
        return <CheckTrue />;
      } else {
        if (chosenAnswer?.correctAnswer !== chosenAnswer?.markedAnswer) {
          return <CheckFalse />;
        } else {
          return <View style={styles.check} />;
        }
      }
    } else {
      return <View style={styles.check} />;
    }
  }, [
    chosenAnswer,
    correctAnswer,
    isMarked,
    showCorrectAnswer,
    styles.check,
    text,
  ]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.answerContainer}
      onPress={handleOnAnswer}>
      <Text style={styles.answerText}>{entitiesParser(text)}</Text>
      {indicator()}
    </TouchableOpacity>
  );
};

export default Answer;
