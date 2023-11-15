import React, { createContext, useContext, useState } from 'react';
import parkAreas from '../assets/data/parkAreas.js';

const ParkSpaceContext = createContext();

export const ParkSpaceDetailsProvider = ({ children }) => {
    const [index, setIndex] = useState(null);
    const [lookingForSpaces, setLookingForSpaces] = useState(false);

    const handleLookForSpacesClick = () => {
        setLookingForSpaces(true);
        setIndex(0);
    };

    const handleCarouselClose = () => {
        setIndex(null);
        setLookingForSpaces(false);
    };

    return (
        <ParkSpaceContext.Provider value={{parkAreas, index, setIndex, lookingForSpaces, setLookingForSpaces, handleCarouselClose, handleLookForSpacesClick }}>
            {children}
        </ParkSpaceContext.Provider>
    );
};

export const useParkSpaceContext = () => useContext(ParkSpaceContext);
