import React, { useState } from "react";
import MyButton from "../../components/MyButton";
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
import {styles} from '../../styles/loginStyles.js'

const SignupScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [nameIsFocused, setNameIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [phonenumberIsFocused, setPhoneNumberIsFocused] = useState(false);
    const [confirmPasswordIsFocused, setConfirmPasswordIsFocused] = useState(false);
    const [address, setAddress] = useState("");
    const [addressIsFocused, setAddressIsFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [pincode, setPincode] = useState("");
    const [pincodeIsFocused, setPincodeIsFocused] = useState(false);

    const signUp = () => {
        if (name === "" && password === ""&&phonenumber==="") {
          Alert.alert("Required Fields are empty", "Please fill all the required * fields");
        } else {
          Alert.alert("Sign Up Successful", "You are successfully registered!");
          navigation.navigate("Login");
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }
    };

  return (
    <>
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={require("../../images/parkingLogo.png")}
                style={{ width:200, height: 30, marginVertical: 40  }}
            />
            <TextInput
                style={[styles.input,nameIsFocused && styles.inputIsFocused]}
                placeholder="Name *"
                onChangeText={(text) => setName(text)}
                onFocus={() => setNameIsFocused(true)}
                onBlur={() => setNameIsFocused(false)}
                value={name}
            />
            <TextInput
                style={[styles.input,emailIsFocused && styles.inputIsFocused]}
                placeholder="Email *"
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setEmailIsFocused(true)}
                onBlur={() => setEmailIsFocused(false)}
                value={email}
            />
            <TextInput
                style={[styles.input,phonenumberIsFocused && styles.inputIsFocused]}
                placeholder="Mobile Number *"
                onChangeText={(text) => setPhoneNumber(text)}
                onFocus={() => setPhoneNumberIsFocused(true)}
                onBlur={() => setPhoneNumberIsFocused(false)}
                value={phonenumber}
            />
            <TextInput
                style={[styles.input,addressIsFocused && styles.inputIsFocused]}
                placeholder="Address"
                onChangeText={(text) => setAddress(text)}
                onFocus={() => setAddressIsFocused(true)}
                onBlur={() => setAddressIsFocused(false)}
                value={address}
            />
            <TextInput
                style={[styles.input,pincodeIsFocused && styles.inputIsFocused]}
                placeholder="Pincode"
                onChangeText={(text) => setPincode(text)}
                onFocus={() => setPincodeIsFocused(true)}
                onBlur={() => setPincodeIsFocused(false)}
                value={pincode}
            />
            <TextInput
                style={[styles.input,passwordIsFocused && styles.inputIsFocused]}
                placeholder="Enter Password"
                onFocus={() => setPasswordIsFocused(true)}
                onBlur={() => setPasswordIsFocused(false)}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput
                style={[styles.input,confirmPasswordIsFocused && styles.inputIsFocused]}
                placeholder="Confirm Password"
                onFocus={() => setConfirmPasswordIsFocused(true)}
                onBlur={() => setConfirmPasswordIsFocused(false)}
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />
            {/* <View style={styles.signUpPart}>
              <Text>Verify your phone number: </Text>
              <Pressable onPress={()=>console.log("Verify phone number")}>
              <Text style={styles.signUp}>Send OTP</Text>
              </Pressable>
            </View> */}

          <View>
            <MyButton
                title="Sign Up"
                onPress={() => signUp()}
                buttonStyle={styles.button}
                />
            </View>
        </View>
    </View>
   
    </>
  );
};

export default SignupScreen;
