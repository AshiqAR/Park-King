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
    const [phonenumber, setPhonenumber] = useState("");
    const [usernameIsFocused, setUsernameIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [phonenumberIsFocused, setPhoneNumberIsFocused] = useState(false);

    const handleLogin = () => {
        if (username === " " && password === " "&&phonenumber===" ") {
          Alert.alert("Fields cannot be empty", "Welcome to the ParKing!");
        } else {
          Alert.alert("Sign Up Failed", "Invalid username or password");
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
                style={[styles.input,phonenumberIsFocused && styles.inputIsFocused]}
                placeholder="PhoneNumber"
                onChangeText={(text) => setPhoneNumber(text)}
                onFocus={() => setPhoneNumberIsFocused(true)}
                onBlur={() => setPhoneNumberIsFocused(false)}
                value={phonenumber}
            />
            <TextInput
                style={[styles.input,passwordIsFocused && styles.inputIsFocused]}
                placeholder=" New Password"
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
