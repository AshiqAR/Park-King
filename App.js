import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";

const LoginPage = () => {
  const { height, width } = Dimensions.get("screen");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // You can add your login logic here, such as calling an API to validate the credentials

    if (username === "admin" && password === "password") {
      // Successful login, navigate to the next screen
      Alert.alert("Login Successful", "Welcome to the ParKing!");
      // Navigate to the next screen
    } else {
      // Invalid credentials, show an error message
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  const handleSignUp = () => {
    // Implement your sign up logic here
    Alert.alert("Sign Up", "Redirecting to sign up page");
    // Navigate to the sign up page
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Text style={styles.title}>Par'K'ing</Text> */}
      <Image
        style={{
          height: height,
          resizeMode: "cover",
          position: "absolute",
          opacity:0.4,
        }}
        source={require("./images/2.webp")}
      />
      <Image 
        source={require("./images/park1.png")}
        style={{ width: 900, height: 200 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title="Log In"
        onPress={() => console.log("Log In pressed")}
        style={styles.button}
      />
      <Text style={styles.signUpText}>Don't have an account?</Text>
      <Button
        title="Sign Up"
        onPress={() => console.log("Sign Up pressed")}
        style={styles.button}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 28,
          }}
        >
          <Text>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 15,
            fontWeight: "900",
          }}
        >
          <Text>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
