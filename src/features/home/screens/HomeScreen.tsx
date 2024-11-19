import { View, StyleSheet, Image } from 'react-native';
import Button from '../../../components/ui/Button';
import Text from '../../../components/ui/Text';

export default function HomeScreen() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            gap: 50,
        },
        title: {
            fontSize: 40,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
        },
        logo: {
            width: 200,
            height: 200,
            resizeMode: 'contain',
        },
        text: {
            textAlign: 'center',
        }

    });

    return (
        <View style={styles.container}>
            <Text
                size={40}
                weight='bold'
                color='black'
                textAlign='center'
                textTransform='uppercase'
                marginHorizontal={0}
                marginVertical={0}
            >education app</Text>
            <Image
                style={styles.logo}
                source={require('../../../../assets/logo.png')}
            />
            <Text
                size={16}
                weight='normal'
                color='black'
                textAlign='center'
                textTransform='none'
                marginHorizontal={0}
                marginVertical={0}
            >
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type
            </Text>

            <Button
                size={25}
                weight='bold'
                color='white'
                backgroundColor='blue'
                borderRadius={10}
                paddingHorizontal={30}
                paddingVertical={10}
                onPress={() => { }}
            >GET STARTED</Button>
        </View>
    );
}
