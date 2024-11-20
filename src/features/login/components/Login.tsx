import { TextInput } from 'react-native';
import Button from '../../../components/ui/Button';
import VStack from '../../../components/ui/VStack';
import { StyleSheet } from 'react-native';

export default function Login() {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        input: {
            borderBottomWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            width: '100%',
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <VStack flex={1} paddingHorizontal={30} gap={50}>
            <TextInput
                placeholder='Email'
                placeholderTextColor='gray'
                keyboardType='email-address'
                style={styles.input}
            />

            <TextInput
                placeholder='Password'
                placeholderTextColor='gray'
                keyboardType='default'
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                size={20}
                weight='normal'
                color='white'
                backgroundColor='purple'
                borderRadius={6}
                paddingHorizontal={40}
                paddingVertical={10}
                onPress={() => { }}
                text='LOGIN'
            />
        </VStack>
    );
}
