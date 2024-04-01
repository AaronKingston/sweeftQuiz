import {View, Text} from 'react-native';

import entitiesParser from '../../utils/entitiesParser';

import getStyleObj from './style';

interface Props {
  index: number;
  question: string;
  maxQuestions: number;
}

const Question: React.FC<Props> = ({index, question, maxQuestions}) => {
  const styles = getStyleObj();

  return (
    <View style={styles.questionContainer}>
      <View style={styles.questionPagination}>
        <Text style={styles.paginationText}>
          Question <Text style={styles.currentPagination}>{index + 1}</Text>{' '}
          {maxQuestions}
        </Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.questionText}>{entitiesParser(question)}</Text>
      </View>
    </View>
  );
};

export default Question;
