import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useParkSpaceContext } from "../../Context/ParkSpaceContext";

const BottomCarousel = (props) => {
    const { index, parkAreas, setIndex, handleCarouselClose } = useParkSpaceContext();
    const { handleLocateMeClick } = props;
    const length = parkAreas.length;
    const handleNext = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    };
    const handlePrevious = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    };

    return (
        <>
            <View style={{ position: 'absolute', bottom: 10, flex: 1, width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'green', padding: 5, borderRadius: 10, margin: 10 }}
                        onPress={() => { handleLocateMeClick() }}
                    >
                        <Text style={{ color: 'white' }}>Locate Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', borderRadius: 10, padding: 5, margin: 10 }}
                        onPress={() => { handleCarouselClose() }}
                    >
                        <Text style={{ color: 'white' }}>Close</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100, width: '95%', zIndex: 1, backgroundColor: 'lightblue', alignSelf: 'center', borderRadius: 9, }}>
                    <TouchableOpacity onPress={handlePrevious} style={{ height: '100%', backgroundColor: 'gray', justifyContent: 'center', borderBottomLeftRadius: 9, borderTopLeftRadius: 9 }}>
                        {/* <Image source={require('../images/arrow-left.png')} style={{ width: 50, height: 50 }} /> */}
                        <Text>Prev</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold' }}>{parkAreas[index].name}</Text>
                        <Text style={{ fontSize: 10 }}>Place: {parkAreas[index].place}</Text>
                        <Text style={{ fontSize: 10 }}>Distance: {parkAreas[index].distance}m</Text>
                        <Text style={{ fontSize: 15, color: 'brown' }}>Rating: {parkAreas[index].average_rating}   Price Per Hour: Rs.{parkAreas[index].price_per_hr}</Text>
                    </View>
                    <TouchableOpacity onPress={handleNext} style={{ height: '100%', backgroundColor: 'gray', justifyContent: 'center', borderBottomRightRadius: 9, borderTopRightRadius: 9 }}>
                        {/* <Image source={require('../images/arrow-right.png')} style={{ width: 50, height: 50 }} /> */}
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default BottomCarousel;
