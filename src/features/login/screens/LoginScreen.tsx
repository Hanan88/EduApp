import { TextInput } from 'react-native';
import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/Image';
import Text from '../../../components/ui/Text';
import VStack from '../../../components/ui/VStack';

export default function LoginScreen() {

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

            <TextInput
                placeholder='Email'
                placeholderTextColor='gray'
                keyboardType='email-address'
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='gray'
                keyboardType='default'
                secureTextEntry={true}
            />

            <Button
                size={25}
                weight='bold'
                color='white'
                backgroundColor='blue'
                borderRadius={10}
                paddingHorizontal={30}
                paddingVertical={10}
                onPress={() => { }}
                text='LOGIN'
            />
        </VStack>
    );
}
