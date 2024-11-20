import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/features/home/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/features/login/screens/AuthScreen';
import ProfileScreen from './src/features/profile/screens/ProfileScreen';
import OtpScreen from './src/features/login/screens/OtpScreen';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
