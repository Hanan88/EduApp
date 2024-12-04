import { Pressable, Text, View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
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
    borderBottom?: boolean;
    shadowColor?: Color;
    elevation?: number;
    style?: StyleProp<ViewStyle>
    onPress: () => void;
};

export default function Button({ style, text, size, weight, color, backgroundColor, borderRadius, paddingHorizontal, paddingVertical, borderBottom, shadowColor, elevation, onPress }: ButtonProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            color,
            fontWeight: weight,
            textAlign: 'center',
        },
        button: {
            backgroundColor,
            borderRadius,
            paddingHorizontal,
            paddingVertical,
            borderBottomWidth: borderBottom ? 2 : 0,
            borderBottomColor: borderBottom ? color : 'transparent',
            shadowColor,
            elevation,
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.button, style]}>
                <Text style={[styles.text, style]}>
                    {text}
                </Text>
            </View>
        </Pressable>
    );
}