import React, { createContext, useContext, useState } from 'react';
import * as Location from "expo-location";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setCurrentLocation] = useState(null);
    const [fetchingLocation, setFetchingLocation] = useState(true);

    const updateCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        do {
            var newlocation = await Location.getCurrentPositionAsync({});
            if (newlocation == null || newlocation == undefined) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            else {
                break;
            }
        } while (newlocation == null || newlocation == undefined);

        setFetchingLocation(false);
        setCurrentLocation(newlocation);
    }

    return (
        <LocationContext.Provider value={{ location, fetchingLocation, updateCurrentLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);
