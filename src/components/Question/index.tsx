import {View, Text} from 'react-native';

import entitiesParser from '../../utils/entitiesParser';

import getStyleObj from './style';

interface Props {
  question: string;
}

const Question: React.FC<Props> = ({question}) => {
  const styles = getStyleObj();

  return (
    <View>
      <View style={styles.question}>
        <Text style={styles.questionText}>{entitiesParser(question)}</Text>
      </View>
    </View>
  );
};

export default Question;
