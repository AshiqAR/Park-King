import React, { useState } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../MapScreen";
import MapView ,{Marker} from "react-native-maps";
import MarkLocations from "./MarkLocations";

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
  const markers = [
    {
      latitude: 8.434534,
      longitude: 77.031217,
      title: 'jijis Parking Lot',
      subtitle: '20 lots available'
    },
    {
      latitude: 8.500730,
      longitude: 77.081300,
      title: 'happy Lots',
      subtitle: '5 lots available'
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <MapView initialRegion={{latitude: 8.434534, longitude: 77.031217, latitudeDelta: 0.2, longitudeDelta: 0.5}} showsMyLocationButton={true} style={styles.map}>
          

        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor={"purple"}
            title={marker.title}
            description={marker.subtitle}
          />
        ))}


        </MapView>
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
