import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View 
} from 'react-native';
import LoginScreen from './LoginModules/LoginScreen';
import SignupScreen from './LoginModules/SignUp/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen></LoginScreen> */}
      <SignupScreen></SignupScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffeee',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
