import {View, Text} from 'react-native';

import entitiesParser from '../../utils/entitiesParser';

import getStyleObj from './style';

interface Props {
  category: string;
  question: string;
}

const Question: React.FC<Props> = ({category, question}) => {
  const styles = getStyleObj();

  return (
    <View>
      <View style={styles.question}>
        <Text style={styles.headerText}>{entitiesParser(category)}</Text>
        <Text style={styles.questionText}>{entitiesParser(question)}</Text>
      </View>
    </View>
  );
};

export default Question;
