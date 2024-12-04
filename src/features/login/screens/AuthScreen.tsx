import { StyleSheet, View } from 'react-native';
import Button from '../../../components/ui/Button';
import VStack from '../../../components/ui/VStack';
import HStack from '../../../components/ui/HStack';
import Login from '../components/Login';
import { useState } from 'react';
import Signup from '../components/Signup';

export default function AuthScreen({ navigation }: { navigation: any }) {
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
            <HStack flex={1} gap={5} style={styles.hStack}>
                <Button
                    size={20}
                    weight='normal'
                    color='white'
                    paddingHorizontal={25}
                    paddingVertical={10}
                    onPress={() => { setIsLogin(false) }}
                    text='SIGNUP'
                    borderBottom={!isLogin}
                />
                <Button
                    size={20}
                    weight='normal'
                    color='white'
                    paddingHorizontal={25}
                    paddingVertical={10}
                    onPress={() => { setIsLogin(true) }}
                    text='LOGIN'
                    borderBottom={isLogin}
                />
            </HStack>

            <View style={styles.authView}>
                {isLogin ? <Login navigation={navigation} /> : <Signup navigation={navigation} />}
            </View>
        </VStack>
    );
}
