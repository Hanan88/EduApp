import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useRef, useState } from "react";
import Text from "../../../components/ui/Text";
import HStack from "../../../components/ui/HStack";
import { NavigationProp } from "@react-navigation/native";

export default function OtpScreen({ navigation }: { navigation: NavigationProp<any> }) {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef<(TextInput | null)[]>(Array(6).fill(null));

    // ----------------------------------------------------------------------------------------------------
    // MARK: Styles
    // ----------------------------------------------------------------------------------------------------
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

    // ----------------------------------------------------------------------------------------------------
    // MARK: Functions
    // ----------------------------------------------------------------------------------------------------
    function handleOTP(text: string, index: number) {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        } else if (index === otp.length - 1) {
            Alert.alert("Success", "OTP entered successfully!");
            navigation.navigate('Profile');
        }
    }

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
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
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        onChangeText={(text) => { handleOTP(text, index) }}
                    />
                ))}
            </HStack>

            <Text size={14} weight='normal' color='black' textAlign='center' textTransform='none' marginVertical={20}>
                1:00 minutes
            </Text>

        </View>
    );
}
