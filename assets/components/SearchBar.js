import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Text, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                <Feather
                    name="search"
                    size={17}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search Place or Nearby Parking"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {clicked && (
                    <Entypo name="cross" size={25} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )}
            </View>
            {clicked && (
                <TouchableOpacity
                    onPress={() => {
                        Keyboard.dismiss();
                        setClicked(false);
                    }}
                    style={{ backgroundColor: 'tomato', padding: 5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 5}}
                >
                    <Text style={{fontWeight: 'bold'}}>Cancel</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    searchBar__unclicked: {
        padding: 5,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: "center",
    },
    searchBar__clicked: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        width: "85%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        overflow: 'scroll',
        fontSize: 18,
        marginLeft: 10,
        width: "90%",
    },
});