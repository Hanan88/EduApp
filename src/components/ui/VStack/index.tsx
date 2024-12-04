import { View, StyleSheet } from 'react-native';
import { Color } from '../../types/Color';

type VStackProps = {
    children: string | JSX.Element | JSX.Element[];
    flex: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    gap?: number;
};

export default function VStack({ children, flex, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, gap }: VStackProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        vStack: {
            flex,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal,
            paddingVertical,
            marginHorizontal,
            marginVertical,
            gap,
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <View style={styles.vStack}>
            {children}
        </View>
    );
}