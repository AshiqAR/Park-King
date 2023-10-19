import React, { useState,useCallback } from "react";
import { ScrollView ,Button} from 'react-native';
import { Icon } from '@rneui/themed';
import MyButton from "../components/MyButton.js";
import * as DocumentPicker from 'expo-document-picker';


import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
    Pressable,
  TextInput,
  Alert,
} from "react-native";
import {styles} from '../styles/ownerPageStyles.js'

const OwnerPage = ({navigation}) => {
  const [ownerName, setOwnerName] = useState('');
  const [parkSpaceName, setParkSpaceName] = useState('');
  const [numVehicles, setNumVehicles] = useState('');
  const [location, setLocation] = useState('');

  const handleLogin = () => {
    // Handle form submission, e.g., save owner details to a database
    if(!ownerName || !parkSpaceName || !numVehicles || !location) {
      Alert.alert('Please fill all the details');
      return;
    }
    const ownerDetails = {
      ownerName,
      parkSpaceName,
      numVehicles,
      location,
    };
    setLocation('');
    setNumVehicles('');
    setParkSpaceName('');
    setOwnerName('');
    Alert.alert('Details submitted successfully');
    console.log('Submitted owner details:', ownerDetails);
  };
//////////////////////


pickDocument = async () => {

  let result = await DocumentPicker.getDocumentAsync({});
  
  alert(result.uri);
  
  console.log(result);
  
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
   
    <View style={styles.container}>
      <Image style={styles.ownerImage} source={require("../images/location.jpg")}/>
    <View style={styles.card}>
    <View style={{paddingVertical:20}}>
        <Text
          style={{fontFamily: 'sans-serif-condensed', fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'gray'}}
        >Be a Parking Space Provider with us</Text>
      </View>
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
      
<TouchableOpacity>

<Button
title="Select Document"
onPress={this.pickDocument}
/>
<Text style={styles.label1}>
  Upload File
  <Icon
        
        name='cloud-upload-sharp'
        type='ionicon'
        color='black'

      />
</Text>

</TouchableOpacity>

      <View>
            <MyButton
                title="Verify"
                onPress={() => handleLogin()}
                buttonStyle={styles.button}
                />
            </View>
    </View>
  </View>

  </ScrollView>
  </SafeAreaView>
    
   
  );
};



export default OwnerPage;
