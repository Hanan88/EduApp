import { Text as RNText, StyleSheet } from 'react-native';
import { TextSize } from '../../types/TextSize';
import { Color } from '../../types/Color';
import { TextWeight } from '../../types/TextWeight';
import { TextTransform } from '../../types/TextTransform';
import { TextAlign } from '../../types/textAlign';

type TextProps = {
    children: string;
    size: TextSize;
    weight: TextWeight;
    color: Color;
    textAlign: TextAlign;
    textTransform: TextTransform;
    marginHorizontal: number;
    marginVertical: number;
};

export default function Text({ children, size, weight, color, textAlign, textTransform, marginHorizontal, marginVertical }: TextProps): JSX.Element {

    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            color,
            fontWeight: weight,
            textAlign,
            textTransform,
            marginHorizontal,
            marginVertical,
        },
    });

    return (
        <RNText style={styles.text}>
            {children}
        </RNText>
    );
}