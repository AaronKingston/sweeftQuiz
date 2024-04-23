import {View, Text, TouchableOpacity} from 'react-native';

import getStyleObj from './style';
import {Thermometer} from '../../assets/SVG';
import {useMemo} from 'react';
import {useAppContext} from '../../hooks/useAppContext';

interface Props {
  level: string;
}

const QuestionLevel: React.FC<Props> = ({level}) => {
  const {Colors} = useAppContext();
  const styles = getStyleObj();

  const generatedColor = useMemo(() => {
    switch (level) {
      case 'hard':
        return Colors.danger;
      case 'medium':
        return Colors.warning;
      case 'easy':
        return Colors.secondaryGreen;
      default:
        return Colors.light;
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
