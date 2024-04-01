import {View, Text, TouchableOpacity} from 'react-native';

import getStyleObj from './style';
import {Thermometer} from '../../assets/SVG';
import {useMemo} from 'react';
import {colors} from '../../styles/colors';

interface Props {
  level: string;
}

const QuestionLevel: React.FC<Props> = ({level}) => {
  const styles = getStyleObj();

  const generatedColor = useMemo(() => {
    switch (level) {
      case 'hard':
        return colors.danger;
      case 'medium':
        return colors.warning;
      case 'easy':
        return colors.secondaryGreen;
      default:
        return colors.light;
    }
  }, [level]);

  return (
    <View style={styles.levelContainer}>
      <Text style={styles.levelText}>Difficulty</Text>
      <Thermometer fill={generatedColor} />
    </View>
  );
};

export default QuestionLevel;
