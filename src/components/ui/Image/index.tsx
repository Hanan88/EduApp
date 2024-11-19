import { ImageSourcePropType, Image as RNImage, StyleSheet } from 'react-native';

type ImageProps = {
    width: number;
    height: number;
    resizeMode: 'contain' | 'cover' | 'stretch' | 'repeat';
    source: ImageSourcePropType; // Updated type here
};

export default function Image({ width, height, resizeMode, source }: ImageProps): JSX.Element {

    const styles = StyleSheet.create({
        image: {
            width,
            height,
            resizeMode,
        },
    });
    return (
        <RNImage style={styles.image} source={source} />
    );
}