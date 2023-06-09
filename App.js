import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View 
} from 'react-native';
import LoginScreen from './LoginModules/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
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
