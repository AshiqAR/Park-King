import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './HomeScreen/Header';
import LoginScreen from './LoginModules/LoginScreen';
import SignupScreen from './LoginModules/SignupScreen';
import HomeScreen from './HomeScreen/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Header />,  headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

