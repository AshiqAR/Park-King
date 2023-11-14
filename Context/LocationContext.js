import React, { createContext, useContext, useState } from 'react';
import * as Location from "expo-location";
import axios from 'axios';

const LocationContext = createContext();



const getLocation = async () => {
    const def_location = { "coords": { "latitude": 8.5460191, "longitude": 76.9039599 } };
    let newLocation;
    do {
        const timeoutPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve(def_location);
            }, 500);
        });
        const locationPromise = Location.getCurrentPositionAsync();
        newLocation = await Promise.race([locationPromise, timeoutPromise]);
    } while (newLocation == def_location);
    return newLocation;
};

export const LocationProvider = ({ children }) => {
    // const [location, setCurrentLocation] = useState({"coords": {"accuracy": 14.954999923706055, "altitude": -20.700000762939453, "altitudeAccuracy": 2.138155698776245, "heading": 0, "latitude": 8.5460191, "longitude": 76.9039599, "speed": 0}, "mocked": false, "timestamp": 1699951332667});
    const [location, setCurrentLocation] = useState(null);
    const [fetchingLocation, setFetchingLocation] = useState(true);
    const [place, setPlace] = useState(null);

    const reverseGeocode = async (location) => {
        try {
            const { latitude, longitude } = location.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
            const { data } = await axios.get(url);
            console.log(data.name);
            setPlace(data.name);
        }
        catch (error) {
            console.log(error);
        }
    };

    const getCoordinates = async (address) => {

    }

    const updateCurrentLocation = async () => {
        setFetchingLocation(true);
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            };
            if (status === 'granted') {
                const newLocation = await getLocation();

                console.log('Current Position:', newLocation);
                setCurrentLocation(newLocation);
                reverseGeocode(newLocation);

                setFetchingLocation(false);
            } else {
                console.warn('Location permission not granted');
                setFetchingLocation(false);
            }
        } catch (error) {
            console.error('Error requesting location permission:', error);
            setFetchingLocation(false);
        }
    };


    return (
        <LocationContext.Provider value={{ location, fetchingLocation, setFetchingLocation, updateCurrentLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);
