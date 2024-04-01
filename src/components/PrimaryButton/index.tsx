import {Text, TouchableOpacity} from 'react-native';

import getStyleObj from './style';

interface Props {
  name: string;
  onPress: () => void;
  customStyle: StyleProp<ViewStyle>;
  color: string;
}

const PrimaryButton: React.FC<Props> = ({
  name,
  onPress,
  customStyle,
  color,
}) => {
  const styles = getStyleObj();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyle]}>
      <Text style={[styles.text, color && {color: color}]}>
        {name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
