import React, { createContext, useContext, useState } from 'react';
import * as Location from "expo-location";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setCurrentLocation] = useState(null);
    const [fetchingLocation, setFetchingLocation] = useState(true);

    const updateCurrentLocation = async () => {
        setFetchingLocation(true);
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let newlocation = await Location.getCurrentPositionAsync({});
        console.log(newlocation);
        while(newlocation == null || newlocation == undefined){
            await new Promise(resolve => setTimeout(resolve, 500));
            newlocation = await Location.getCurrentPositionAsync({});
        }

        setCurrentLocation(newlocation);
        setFetchingLocation(false);
    }

    return (
        <LocationContext.Provider value={{ location, fetchingLocation, setFetchingLocation, updateCurrentLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);
