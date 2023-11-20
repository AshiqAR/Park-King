import React, { createContext, useContext, useState } from 'react';
import parkAreas from '../assets/data/parkAreas';

const ParkSpaceContext = createContext();

export const ParkSpaceDetailsProvider = ({ children }) => {
    const [index, setIndex] = useState(null);
    const [lookingForSpaces, setLookingForSpaces] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);
    const [searchForPlace, setSearchForPlace] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    const handleCarouselClose = () => {
        setIndex(null);
        setShowCarousel(false);
    };

    const getNearbyParkAreas = (location) => {
        setSearchForPlace(false);
        setSearchPhrase("");
        setShowCarousel(true);
        setIndex(0);
    };

    return (
        <ParkSpaceContext.Provider value={{parkAreas, index,showCarousel, setIndex, handleCarouselClose, searchForPlace, setSearchForPlace, searchPhrase, setSearchPhrase, getNearbyParkAreas }}>
            {children}
        </ParkSpaceContext.Provider>
    );
};

export const useParkSpaceContext = () => useContext(ParkSpaceContext);
