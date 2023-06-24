import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {styles} from '../styles/loginStyles.js'

const ParkOwner = ( {navigation}) => {
    const [ownerName, setOwnerName] = useState("");
  const [parkSpaceName, setParkSpaceName] = useState("");
  const [numVehicles, setNumVehicles] = useState("");
  const [location, setLocation] = useState("");

  const handleLogin = () => {
    // Handle form submission, e.g., save owner details to a database
    const ownerDetails = {
      ownerName,
      parkSpaceName,
      numVehicles,
      location,
    };

    console.log('Submitted owner details:', ownerDetails);
  };

    return(
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}/>
          <Text style={styles.heading}>Enter Owner Details</Text>
  
          <View style={styles.formItem}>
            <Text style={styles.label}>Owner Name :</Text>
            <TextInput
              style={styles.input}
              value={ownerName}
              onChangeText={setOwnerName}
            />
          </View>
  
          <View style={styles.formItem}>
            <Text style={styles.label}>Park Space Name :</Text>
            <TextInput
              style={styles.input}
              value={parkSpaceName}
              onChangeText={setParkSpaceName}
            />
          </View>
  
          <View style={styles.formItem}>
            <Text style={styles.label}>Number of Vehicles :</Text>
            <TextInput
              style={styles.input}
              value={numVehicles}
              onChangeText={setNumVehicles}
              keyboardType="numeric"
            />
          </View>
  
          <View style={styles.formItem}>
            <Text style={styles.label}>Location:</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
            />
          </View>
  
          <View>
              <MyButton
                  title="Sign Up"
                  // onPress={() => handleLogin()}
                  onPress= {navigation.navigate("Owner")}
                  buttonStyle={styles.button}
                  />
              </View>
        </View>
      
      </ScrollView>
    )
};

export default ParkOwner;
