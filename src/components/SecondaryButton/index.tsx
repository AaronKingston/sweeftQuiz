import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import getStyleObj from "./style";

interface Props {
    name: string;
    onPress: () => void;
    customStyle: StyleProp<ViewStyle>;
    color: string;
}

const SecondaryButton:React.FC<Props> = ({name, onPress, customStyle, color}) =>{
    const styles = getStyleObj();
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, customStyle]}>
            <Text style={[styles.text, color && {color: color}]}>{name}</Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;