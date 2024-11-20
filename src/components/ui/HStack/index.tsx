import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

type VStackProps = {
    children: string | JSX.Element | JSX.Element[];
    flex: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    gap?: number;
    style?: StyleProp<ViewStyle>
};

export default function HStack({ children, flex, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, gap, style }: VStackProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
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

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <View style={[styles.vStack, style]}>
            {children}
        </View>
    );
}