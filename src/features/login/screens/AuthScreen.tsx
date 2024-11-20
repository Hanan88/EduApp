import { StyleSheet, View } from 'react-native';
import Button from '../../../components/ui/Button';
import VStack from '../../../components/ui/VStack';
import HStack from '../../../components/ui/HStack';
import Login from '../components/Login';
import { useState } from 'react';
import Signup from '../components/Signup';

export default function AuthScreen() {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [isLogin, setIsLogin] = useState(true);

    const styles = StyleSheet.create({
        hStack: {
            backgroundColor: 'purple',
            width: '100%',
        },
        authView: {
            flex: 3,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            width: '100%',
            marginTop: -40,
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <VStack flex={1}>
            <HStack flex={1} gap={10} style={styles.hStack}>
                <Button
                    size={20}
                    weight='normal'
                    color='white'
                    borderRadius={10}
                    paddingHorizontal={30}
                    paddingVertical={10}
                    onPress={() => { setIsLogin(false) }}
                    text='SIGNUP'
                />
                <Button
                    size={20}
                    weight='normal'
                    color='white'
                    borderRadius={10}
                    paddingHorizontal={30}
                    paddingVertical={10}
                    onPress={() => { setIsLogin(true) }}
                    text='LOGIN'
                />
            </HStack>

            <View style={styles.authView}>
                {isLogin ? <Login /> : <Signup />}
            </View>
        </VStack>
    );
}
