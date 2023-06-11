import React, { useState } from "react";
import MyButton from "../../MyButton.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
    Pressable,
  TextInput,
  Alert,
} from "react-native";
import {styles} from './styles.js'

const SignupScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameIsFocused, setUsernameIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
          Alert.alert("Sign In Successful", "Welcome to the ParKing!");
        } else {
          Alert.alert("Sign in Failed", "Invalid username or password");
        }
    };

  return (
    <>
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={require("../images/park2.png")}
                style={{ width: 700, height: 200 }}
            />
            <TextInput
                style={[styles.input,usernameIsFocused && styles.inputIsFocused]}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                onFocus={() => setUsernameIsFocused(true)}
                onBlur={() => setUsernameIsFocused(false)}
                value={username}
            />
            <TextInput
                style={[styles.input,passwordIsFocused && styles.inputIsFocused]}
                placeholder="Phone Number"
                onFocus={() => setPasswordIsFocused(true)}
                onBlur={() => setPasswordIsFocused(false)}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
           <View style={styles.signUpPart}>
        <Text>Verify your phone number: </Text>
        <Pressable onPress={()=>console.log("Verify phone number")}>
        <Text style={styles.signUp}>Send OTP</Text>
        </Pressable>
    </View>

            <View>

            <MyButton
                title="Sign-Up"
                onPress={() => handleLogin()}
                buttonStyle={styles.button}
                />
            </View>
        </View>
    </View>
   
    </>
  );
};

export default SignupScreen;
