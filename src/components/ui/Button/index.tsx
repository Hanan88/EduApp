import { Pressable, Text, View, StyleSheet } from 'react-native';
import { TextSize } from '../../types/TextSize';
import { Color } from '../../types/Color';
import { TextWeight } from '../../types/TextWeight';

type ButtonProps = {
    text: string;
    size: TextSize;
    weight?: TextWeight;
    color: Color;
    backgroundColor?: Color;
    borderRadius?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    onPress: () => void;
};

export default function Button({ text, size, weight, color, backgroundColor, borderRadius, paddingHorizontal, paddingVertical, onPress }: ButtonProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            color,
            fontWeight: weight,
        },
        button: {
            backgroundColor,
            borderRadius,
            paddingHorizontal,
            paddingVertical,
        },
    });
    
    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <Pressable onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </Pressable>
    );
}