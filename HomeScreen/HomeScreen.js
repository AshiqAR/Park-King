import React, { useState } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../MapScreen";

import MyButton from "../MyButton.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
    Pressable,
  TextInput,
  Alert,
} from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <>
       <Image
                source={require("./images/park2.png")}
                style={ styles.containerlogo}
            />
      <View style={styles.container}>
        <View style={styles.card}>
        <MapScreen></MapScreen>
        <MyButton
                title="I am a parking lot owner"
                onPress={() => handleLogin()}
                buttonStyle={styles.button}
                
                />
        <MyButton
                title="I am looking for parking space"
                onPress={() => handleLogin()}
                buttonStyle={styles.button}
                />
      </View>
      </View>
    </>
  );
}

export default HomeScreen;