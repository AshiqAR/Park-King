import React, { useState } from "react";
import MyButton from "../../assets/components/MyButton";
import {useAuth} from '../../Context/AuthContext';
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";

import { styles } from '../../styles/loginStyles.js'
import {BACKEND_URL} from '@env'

const LoginScreen = ({ navigation, route }) => {
  const { signIn } = useAuth();
  const url = BACKEND_URL;

  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumberIsFocused, setmobileNumberIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);

  const handleLogin = () => {
    const apiUrl = url+"/signin";

    const requestData = {
      mobileNumber: "9074873430",
      password: "ashiq",
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else {
          Alert.alert("Sign in Failed", "Invalid Mobile Number or password");
          return {success: "false"};
        }
      })
      .then((data) => {
        if (data.success == "true") {
          signIn(data.userDetails);
        }
      })
      .catch((error) => {
        Alert.alert("Error", "An error occurred while signing in.");
      });
  };
  handleLogin();

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/quikspot.png")}
            style={{ width: 150, height: 50, marginVertical: 30 }}
          />
          <TextInput
            style={[styles.input, mobileNumberIsFocused && styles.inputIsFocused]}
            placeholder="Mobile Number"
            onChangeText={(text) => setmobileNumber(text)}
            onFocus={() => setmobileNumberIsFocused(true)}
            onBlur={() => setmobileNumberIsFocused(false)}
            value={mobileNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, passwordIsFocused && styles.inputIsFocused]}
            placeholder="Password"
            onFocus={() => setPasswordIsFocused(true)}
            onBlur={() => setPasswordIsFocused(false)}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {/* <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={()=>console.log("Forgot Password pressed")}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                
            </View> */}

          <View>

            <MyButton
              title="Sign In"
              onPress={() => handleLogin()}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </View>
      <View style={styles.signUpPart}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigateToSignUp()}>
          <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
      </View>
    </>
  );
};

export default LoginScreen;
