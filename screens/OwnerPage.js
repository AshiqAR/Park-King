import React, { useState, useCallback } from "react";
import { ScrollView, Button } from 'react-native';
import { Icon } from '@rneui/themed';
import MyButton from "../assets/components/MyButton.js";
import * as DocumentPicker from 'expo-document-picker';
import tw from 'twrnc'


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
import { styles } from '../styles/ownerPageStyles.js'

const OwnerPage = ({ navigation }) => {
  const [ownerName, setOwnerName] = useState('');
  const [parkSpaceName, setParkSpaceName] = useState('');
  const [numVehicles, setNumVehicles] = useState('');
  const [location, setLocation] = useState('');

  const handleLogin = () => {
    // Handle form submission, e.g., save owner details to a database
    if (!ownerName || !parkSpaceName || !numVehicles || !location) {
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
      {/* <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>

        <View style={styles.container}>
          <Image style={styles.ownerImage} source={require("../images/location.jpg")} />
          <View style={styles.card}>
            <View style={{ paddingVertical: 20 }}>
              <Text
                style={{ fontFamily: 'sans-serif-condensed', fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}
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

      </ScrollView> */}
      <ScrollView style={tw.style(`flex flex-col`)} contentContainerStyle={tw.style(`justify-start items-center px-7`)}>
        <View style={tw.style(`mt-[32px]`)}>
          <Image
            source={require("../assets/images/location.jpg")}
            style={tw.style(`w-[180px] h-[180px] rounded-full`)}
          />
        </View>

        <View style={tw.style(`w-full mt-[24px] flex flex-col gap-[16px]`)}>
          <TextInput
            style={tw.style(`bg-[#FDFDFD] border border-[#D9D9D9] text-[#4E4D4D] px-[21px] py-[12px] rounded-[12px]`)}
            value={ownerName}
            onChangeText={setOwnerName}
            placeholder="Owner's Name"
            placeholderTextColor={'#8C8C8C'}
          />
          <TextInput
            style={tw.style(`bg-[#FDFDFD] border border-[#D9D9D9] text-[#4E4D4D] px-[21px] py-[12px] rounded-[12px]`)}
            value={parkSpaceName}
            onChangeText={setParkSpaceName}
            placeholder="Park Space Name"
            placeholderTextColor={'#8C8C8C'}
          />
          <TextInput
            style={tw.style(`bg-[#FDFDFD] border border-[#D9D9D9] text-[#4E4D4D] px-[21px] py-[12px] rounded-[12px]`)}
            value={numVehicles}
            onChangeText={setNumVehicles}
            placeholder="Number of Vehicles"
            placeholderTextColor={'#8C8C8C'}
          />
          <TextInput
            style={tw.style(`bg-[#FDFDFD] border border-[#D9D9D9] text-[#4E4D4D] px-[21px] py-[12px] rounded-[12px]`)}
            value={location}
            onChangeText={setLocation}
            placeholder="Location"
            placeholderTextColor={'#8C8C8C'}
          />
          <TouchableWithoutFeedback>
            {/* <Button
                title="Upload Document"
                onPress={this.pickDocument}
                
              /> */}
            <View style={tw.style(`flex justify-center items-center bg-[#C6D3FF] border border-[#B1BDFF] px-[21px] py-[16px] rounded-[12px]`)}>
              <Text style={tw.style(`font-light text-[18px] text-[#262628]`)}>
                Upload Document
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>

      <View style={tw.style(`absolute bottom-[16px] left-0 right-0 px-[26px]`)}>
        <TouchableWithoutFeedback>
          <View style={tw.style(`flex justify-center items-center bg-[#C7FFC6] border border-[#00AA07] px-[21px] py-[16px] rounded-[12px]`)}>
            <Text style={tw.style(`font-medium text-[20px] text-[#262826] `)}>
            Verify
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>


  );
};



export default OwnerPage;
