import { View, TextInput, StyleSheet } from "react-native"; // Added TextInput import
import { useState } from "react"; // Added useState import
import Text from "../../../components/ui/Text";
import HStack from "../../../components/ui/HStack";
import Button from "../../../components/ui/Button";
import { NavigationProp } from "@react-navigation/native";
import { TextAlign } from '../../../components/types/textAlign';

export default function OtpScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const [otp, setOtp] = useState(Array(6).fill(""));

    const styles = StyleSheet.create({
        input: {
            borderWidth: 1,
            borderColor: 'purple',
            color: 'purple',
            borderRadius: 5,
            width: 40,
            height: 40,
            textAlign: 'center',
            padding: 10,
        },
    });

    return (
        <View>
            <Text size={30} weight='bold' color='black' textAlign='center' textTransform='none' marginVertical={20}>
                Enter OTP
            </Text>
            <HStack flex={1} gap={10} marginVertical={30}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        placeholder="0"
                        keyboardType="numeric"
                        maxLength={1}
                        style={styles.input}
                        value={value}
                        onChangeText={(text) => {
                            const newOtp = [...otp];
                            newOtp[index] = text;
                            setOtp(newOtp);
                        }}
                    />
                ))}
            </HStack>

            <Text size={14} weight='normal' color='black' textAlign='center' textTransform='none' marginVertical={20}>
                1:00 minutes
            </Text>
        </View>
    );
}