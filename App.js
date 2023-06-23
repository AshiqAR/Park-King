import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Header from './HomeScreen/Header';
import ProfilePage from './HomeScreen/ProfilePage';
import LoginScreen from './LoginModules/LoginScreen';
import SignupScreen from './LoginModules/SignupScreen';
import HomeScreen from './HomeScreen/HomeScreen';


const Stack = createNativeStackNavigator();


function App() {
  const showProfile = () => {
    console.log("showProfile clicked");
    navigation.navigate("Profile")
  };

  const [users, setUsers] = useState([
    { 
      "id": "1",
      "name": 'Ashiq',
      "email": 'ashiq3489@gmail.com',
      "mobileNumber": '9074873430',
      "address": 'V V House Kallara',
      "pincode": '691506',
      "totalBookings": "9",
      "password": "hello",
      },
      {
        "id": "2",
        "name": 'Ajith',
        "email": "praveen345@gmail.com",
        "mobileNumber": '8766543239',
        "address": 'H S Cottage Karamana',
        "pincode": '696746',
        "totalBookings": "5",
        "password": "hello",
      },
  ]);
  return (

    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Login" component={LoginScreen} props={users} />
        <Stack.Screen name="SignUp" component={SignupScreen} props={setUsers} />
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({ headerTitle: () => <Header showProfileIsClicked={()=>{navigation.navigate("Profile")}}/>,  headerShown: true})} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{ headerTitle: () => <Header />,  headerShown: true}} props={users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

