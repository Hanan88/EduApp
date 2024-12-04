import { StyleSheet, View } from 'react-native';
import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/Image';
import Text from '../../../components/ui/Text';
import VStack from '../../../components/ui/VStack';

export default function ProfileScreen() {

    const styles = StyleSheet.create({
        view: {
            width: '100%',
            flex: 1,
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <View style={styles.view}>
            <VStack flex={1} gap={10}>
                <Image
                    width={200}
                    height={200}
                    resizeMode='contain'
                    source={require('../../../../assets/logo.png')}
                />
                <Text size={32} weight='bold' color='black' textAlign='center' textTransform='none'>Hanan Elhariri</Text>

                <VStack flex={1} gap={10}>
                    <Button
                        text='My Courses'
                        size={20}
                        backgroundColor='white'
                        color='black'
                        paddingVertical={18}
                        borderRadius={10}
                        style={{ width: 350 }}
                        shadowColor='black'
                        elevation={5}
                        onPress={() => { }}
                    />
                    <Button
                        text='Assignments'
                        size={20}
                        backgroundColor='white'
                        color='black'
                        paddingVertical={18}
                        borderRadius={10}
                        style={{ width: 350 }}
                        shadowColor='black'
                        elevation={5}
                        onPress={() => { }}
                    />
                    <Button
                        text='My Progress'
                        size={20}
                        backgroundColor='white'
                        color='black'
                        paddingVertical={18}
                        borderRadius={10}
                        style={{ width: 350 }}
                        shadowColor='black'
                        elevation={5}
                        onPress={() => { }}
                    />
                    <Button
                        text='Info'
                        size={20}
                        backgroundColor='white'
                        color='black'
                        paddingVertical={18}
                        borderRadius={10}
                        style={{ width: 350 }}
                        shadowColor='black'
                        elevation={5}
                        onPress={() => { }}
                    />
                </VStack>
            </VStack>
        </View>
    );
}
