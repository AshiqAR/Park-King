import React from "react";
import { Text, View, Alert, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../styles/profileStyles";
import MyButton from "../MyButton";

const ProfilePage = ({ navigation}) => {
    const name = "Arun"
    const address = "V V House Kallara"
    const mobileNumber = "9056787878"
    const email = "ahsiq374@gmail.com"
    const pincode = "567558"
    const totalBookings = "5"


    const addMyParkingSpace = () => {
        console.log("Add My Parking Space Clicked");
    };
    const logout = () => {
        Alert.alert("You are logged out !")
        navigation.navigate("Login")
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.userIcon}>
                <Image 
                    source={require('../images/userLogo.png')} 
                    style={styles.userLogoImg}
                />
            </View>
            <View style={styles.detailsView}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>{name}</Text>

                <Text style={styles.label}>Mobile Number:</Text>
                <Text style={styles.text}>{mobileNumber}</Text>

                <Text style={styles.label}>Email Id:</Text>
                <Text style={styles.text}>{email}</Text>

                <Text style={styles.label}>Address:</Text>
                <Text style={styles.text}>{address}</Text>

                <Text style={styles.label}>Pincode:</Text>
                <Text style={styles.text}>{pincode}</Text>

                <Text style={styles.label}>Total Number of Parkings: </Text>
                <Text style={styles.text}>{totalBookings}</Text>

            </View>

        </ScrollView>
        <View style={styles.buttonContainer}>

            {/* <TouchableOpacity onPress={()=>logout()}>
                <Text style={styles.logoutButton}>Logout</Text>
            </TouchableOpacity> */}
            <MyButton 
                title="Logout"
                onPress={() => logout()}
                buttonStyle={styles.logoutButton}
            />
            <MyButton 
                title="Add My Parking Space"
                onPress={() => addMyParkingSpace()}
                buttonStyle={styles.button}
            />
        </View>
        </SafeAreaView>
    )
}


export default ProfilePage;