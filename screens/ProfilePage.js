import React from "react";
import { Text, View, Alert, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../styles/profileStyles";
import MyButton from "../components/MyButton";
import { useRoute } from '@react-navigation/native';

const ProfilePage = ({ navigation}) => {
    const name = "Ashiq"
    const address = "V V House Kallara"
    const mobileNumber = "9056787878"
    const email = "ahsiq374@gmail.com"
    const pincode = "567558"
    const totalBookings = "5"


    const logout = () => {
        // Alert.alert("You are logged out !")
        navigation.navigate("Login")
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };

    const addMyParkingSpace = () => {
        navigation.navigate("ParkOwner")
    };

    const route = useRoute();
  const dataReceived = route.params?.id;
  const moveTopage = (page) => {
    navigation.navigate(page)
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
                <Text style={styles.label}>Name:{dataReceived}</Text>
                <Text style={styles.text}>{name}</Text>

                <Text style={styles.label}>Mobile Number:</Text>
                <Text style={styles.text}>{mobileNumber}</Text>

                <Text style={styles.label}>Email Id:</Text>
                <Text style={styles.text}>{email}</Text>

                <Text style={styles.label}>Address:</Text>
                <Text style={styles.text}>{address}</Text>

                <Text style={styles.label}>Pincode:</Text>
                <Text style={styles.text}>{pincode}</Text>


            </View>
            <View style={styles.list}>
                <TouchableOpacity onPress={()=>moveTopage("History")}>
                    <Text style={styles.listText}>Your Previous Parkings</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity onPress={()=>moveTopage("Details")}>
                    <Text style={styles.listText}>Vehicle Details</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity onPress={()=>moveTopage("Settings")}>
                    <Text style={styles.listText}>Settings</Text>
                </TouchableOpacity>
            </View>

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
                </ScrollView>
        </SafeAreaView>
    )
}


export default ProfilePage;