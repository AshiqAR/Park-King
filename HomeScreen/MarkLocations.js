import React, { useState } from "react";
import {styles} from '../styles/homeStyles'
import MapScreen from "../MapScreen";
import MapView ,{Marker} from "react-native-maps";


const MarkLocations = () => {
    <>
    <Marker coordinate = {{latitude: 8.434534,longitude: 77.031217}}
          pinColor = {"purple"} // any color
          title={"Ajiths's Parking Lot"}
          description={""}/>
    </>
}

export default MarkLocations;