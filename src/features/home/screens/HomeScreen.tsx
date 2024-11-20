import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/Image';
import Text from '../../../components/ui/Text';
import VStack from '../../../components/ui/VStack';

export default function HomeScreen({ navigation }: { navigation: any }) {

    return (
        <VStack flex={1}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            paddingHorizontal={30}
            paddingVertical={0}
            marginHorizontal={0}
            marginVertical={0}
            gap={50}>
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
                width={200}
                height={200}
                resizeMode='contain'
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
                onPress={() => { navigation.navigate('Login')}}
                text='GET STARTED'
            />
        </VStack>
    );
}
