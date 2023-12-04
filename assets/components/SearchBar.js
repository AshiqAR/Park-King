import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Text, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    [clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked, styles.commonStyle]
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
                    placeholder="Search Place "
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {searchPhrase!="" && (
                    <Entypo name="cross" size={25} color="black" onPress={() => {
                        setSearchPhrase("")
                    }} />
                )}
            </View>
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
    },
    searchBar__unclicked: {
        flexDirection: "row",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "flex-start",
    },
    searchBar__clicked: {
        flexDirection: "row",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.5,
        elevation: 1,
    },
    commonStyle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "100%",
        backgroundColor: "#d9dbda",
        borderWidth: 1,
        borderColor: "#dfdbfa",
        height: 50,
    },
    input: {
        fontSize: 20,
        marginHorizontal: 10,
        width: '85%',
    },
});