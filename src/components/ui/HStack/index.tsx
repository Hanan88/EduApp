import { View, StyleSheet } from 'react-native';

type VStackProps = {
    children: string | JSX.Element | JSX.Element[];
    flex: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    gap?: number;
};

export default function HStack({ children, flex, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, gap }: VStackProps): JSX.Element {

    const styles = StyleSheet.create({
        vStack: {
            flex,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal,
            paddingVertical,
            marginHorizontal,
            marginVertical,
            gap,
        },
    });

    return (
        <View style={styles.vStack}>
            {children}
        </View>
    );
}