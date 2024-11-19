import { Pressable, Text, View, StyleSheet } from 'react-native';

type ButtonProps = {
    children: string;
    size: 'sm' | 'md' | 'lg';
    weight: 'normal' | 'semibold' | 'bold';
    color: 'red' | 'blue' | 'green' | 'black' | 'white';
    backgroundColor: 'red' | 'blue' | 'green' | 'black' | 'white';
    borderRadius: number;
    paddingHorizontal: number;
    paddingVertical: number;
    onPress: () => void;
};

export default function Button({ children, size, weight, color, backgroundColor, borderRadius, paddingHorizontal, paddingVertical, onPress }: ButtonProps): JSX.Element {

    const styles = StyleSheet.create({
        text: {
            fontSize: size === 'sm' ? 14 : size === 'md' ? 16 : 30,
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

    return (
        <Pressable onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );
}