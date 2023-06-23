import React, { useState } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../MapScreen";
import MapView ,{Marker} from "react-native-maps";
import locs from "./MarkLocations";

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
  const latitude = 8.434534;
  const longitude = 77.031217;
  const desiredDistanceInMeters = 9000; // For example, 1 kilometer
  const latitudeDelta = desiredDistanceInMeters / 111000; // Approximate value, 1 degree of latitude is approximately 111 kilometers
  const longitudeDelta = desiredDistanceInMeters / (111000 * Math.cos(latitude * Math.PI / 180));

  return (
    <>
      <View style={styles.container}>
        <MapView initialRegion={{latitude, longitude, latitudeDelta, longitudeDelta}} showsMyLocationButton={true} style={styles.map}>
          
        
        {locs.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor={"violet"}
            title={marker.title}
            description={marker.subtitle}
          />
        ))}


        </MapView>
        <View style={styles.bottomBar}>
          {/* <MyButton
                  title="I am a parking lot owner"
                  onPress={() => {console.log("parking Lot Owner")}}
                  buttonStyle={styles.button}
            /> */}
          <MyButton
                  title="Look for Nearby Parking Spaces"
                  onPress={() => console.log("looking for parking space")}
                  buttonStyle={styles.button}
            />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
