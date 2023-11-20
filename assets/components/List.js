import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
} from "react-native";

const Item = ({ city, district }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{city}</Text>
        <Text>{district}</Text>
    </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }) => {
        if (searchPhrase === "") {
            return <Item city={item.city} district={item.district} key={item.index}/>;
        }
        return <Item city={item.city} district={item.district} key={item.index}/>;
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        maxHeight: "100%",
        width: "100%",
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
});