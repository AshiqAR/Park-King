import React, { useState, useEffect, useRef } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../components/MapScreen";
import MapView ,{Marker} from "react-native-maps";
import locs from "./MarkLocations";
import * as Location from "expo-location";

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
  const latitude = 9.057485;
  const longitude = 76.536725;
  const desiredDistanceInMeters = 800;
  const latitudeDelta = desiredDistanceInMeters / 111000;
  const longitudeDelta = desiredDistanceInMeters / (111000 * Math.cos(latitude * Math.PI / 180));

  // const [currentlocation,setCurrentLocation] = {latitude: 8.545871, longitude: 76.903870};
  // const [showPrompt, setShowPromt] = useState(false);
  const [currentLocation,setCurrentLocation] = useState({latitude: 8.545871, longitude: 76.903870});
  const [pinColor, setPinColor] = useState("blue");
  const [showMarker, setShowMarker] = useState(false);
  const handleButtonPress = () => {
    setShowMarker(true);
  };
  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) {
        setShowMarker(true);
        mapRef.current.animateCamera(
          {
            center: {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            },
            zoom: 19 ,
            heading: 80,
            pitch: 0,
          },
          { duration: 5500}
        );
        setPinColor("blue");
      }
    }, 100);
  }, [pinColor]);



  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude,
              longitude,
            },
            zoom: 16 ,
            heading: 0,
            pitch: 0,
          },
          { duration: 0}
        );
      }
    }, 100);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView ref={mapRef} showsMyLocationButton={true} style={styles.map}>
          {/* <Marker 
            coordinate={{latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            }}
            pinColor={pinColor}
            title="You are here"
          /> */}

          {showMarker && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title={"You are here"}
            />
          )}
        
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
          >
          </Marker>
        ))}


        </MapView>
        <View style={styles.bottomBar}>
          <MyButton
              title="Look for Nearby Paring Spaces"
              onPress={()=>{setPinColor("violet")}}
              buttonStyle={styles.button}
            />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
