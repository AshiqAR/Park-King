import React, { useState } from "react";
import { ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import MyButton from "../components/MyButton.js";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
    const ownerDetails = {
      ownerName,
      parkSpaceName,
      numVehicles,
      location,
    };

    console.log('Submitted owner details:', ownerDetails);
  };

  return (
   
    <View style={styles.container}>
      <Image style={styles.ownerImage} source={require("../images/beProvider.png")}/>
    <View style={styles.card}>
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
    
   
  );
};



export default OwnerPage;
