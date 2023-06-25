import React, { useState, useEffect, useRef } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../components/MapScreen";
import MapView ,{Marker} from "react-native-maps";
import locs from "./MarkLocations";

import MyButton from "../components/MyButton.js";
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
  const mapRef = useRef(null);
  const latitude = 8.546339;
  const longitude = 76.905738;
  const desiredDistanceInMeters = 800;
  const latitudeDelta = desiredDistanceInMeters / 111000;
  const longitudeDelta = desiredDistanceInMeters / (111000 * Math.cos(latitude * Math.PI / 180));

  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude,
              longitude,
            },
            zoom: 17 ,
            heading: 80,
            pitch: 0,
          },
          { duration: 3500 }
        );
      }
    }, 100);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView ref={mapRef} showsMyLocationButton={true} style={styles.map}>
          
        
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
