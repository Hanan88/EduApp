import { View, StyleSheet } from 'react-native';
import { JustifyContent } from '../../types/justifyContent';
import { AlignItems } from '../../types/AlignItems';

type VStackProps = {
    children: string | JSX.Element | JSX.Element[];
    flex: number;
    flexDirection: 'row' | 'column';
    alignItems: AlignItems;
    justifyContent: JustifyContent;
    paddingHorizontal: number;
    paddingVertical: number;
    marginHorizontal: number;
    marginVertical: number;
    gap: number;
};

export default function VStack({ children, flex, flexDirection, alignItems, justifyContent, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, gap }: VStackProps): JSX.Element {

    const styles = StyleSheet.create({
        vStack: {
            flex,
            flexDirection,
            alignItems,
            justifyContent,
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