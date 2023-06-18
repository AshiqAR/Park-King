import React, { useState } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../MapScreen";
import MapView from "react-native-maps";

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
      <View style={styles.container}>
        <MapView style={styles.map}></MapView>
        <View style={styles.bottomBar}>
          <MyButton
                  title="I am a parking lot owner"
                  onPress={() => {console.log("parking Lot Owner")}}
                  buttonStyle={styles.button}
            />
          <MyButton
                  title="I am looking for parking space"
                  onPress={() => console.log("looking for parking space")}
                  buttonStyle={styles.button}
            />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;