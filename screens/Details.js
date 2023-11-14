import React, { useState, useCallback } from "react";
import { ScrollView, Button, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Icon } from '@rneui/themed';
import MyButton from "../assets/components/MyButton.js";
import * as DocumentPicker from 'expo-document-picker';
import tw from 'twrnc'
const plus_symbol = require('../assets/plus_icon.png');


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
  Modal,
  TextInput,
  Alert,
} from "react-native";

const details = [
  {
    number: 'KL-05-AS-1234',
    model: 'Maruti Suzuki',
    color: 'Red',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'TN-06-JK-5678',
    model: 'Maruti Suzuki',
    color: 'Green',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'KL-11-FZ-9012',
    model: 'Mercedes Benz',
    color: 'Black',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'TN-06-JK-5678',
    model: 'Maruti Suzuki',
    color: 'Green',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'TN-06-JK-5678',
    model: 'Maruti Suzuki',
    color: 'Green',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'TN-06-JK-5678',
    model: 'Maruti Suzuki',
    color: 'Green',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  },
  {
    number: 'TN-06-JK-5678',
    model: 'Maruti Suzuki',
    color: 'Green',
    arrivalTime: '12:00 PM',
    departureTime: '2:00 PM',
    duration: '2 hours',
  }
]

const DetailsPage = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [vehicle, setVehicle] = useState({vehicleNumber: '', vehicleType: '', makeCompany: '', modelName: ''});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddVehicle = () => {
    console.log('Adding new vehicle with number:' + vehicle.vehicleNumber);
    toggleModal();
  };

  const handleInputChange = (key, formattedValue) => {
    if(key==='vehicleNumber')
      formattedValue = formattedValue.toUpperCase();
    setVehicle({ ...vehicle, [key]: formattedValue });
  }

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {isModalVisible ? "Add New Vehicle" : "My Vehicles"}
        </Text>
      </View>

      <View style={styles.safeArea}>
        <FlatList
          data={details}
          renderItem={({ item }) => (
            <View style={tw.style(`flex flex-row justify-between items-center border-b border-[#B8C6DB] py-[24px] px-[21px] w-full`)}>
              <Text style={tw.style(`text-[#4E4D4D] text-[18px] font-medium`)}>{item.number}</Text>
              <View style={tw.style(`flex flex-col items-end`)}>
                <Text style={tw.style(`text-[#4E4D4D] text-[12px] font-light`)}>{item.model}</Text>
                <Text style={tw.style(`text-[#4E4D4D] text-[12px] font-light`)}>{item.arrivalTime}</Text>
              </View>
            </View>
          )}
        />

      </View>
      <View style={{ width: "100%", backgroundColor: 'white', alignItems: 'center', paddingVertical: 20 }}>
        {!isModalVisible &&
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addButton}
            onPress={toggleModal}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Add a New Vehicle</Text>
          </TouchableOpacity>
        }
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        style={{ backgroundColor: 'rgba(0,0,0,1)' }}
      >
        <View style={styles.modalView}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Vehicle Number:</Text>
            <TextInput
              style={styles.input}
              value={vehicle.vehicleNumber}
              placeholder="Enter Vehicle Number"
              onChangeText={(value) => handleInputChange('vehicleNumber', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Type of Vehicle:</Text>
            <Picker
              selectedValue={vehicle.vehicleType}
              onValueChange={(itemValue) => handleInputChange('vehicleType', itemValue)}
            >
              <Picker.Item label="Two Wheeler" value="Two Wheeler" />
              <Picker.Item label="Three Wheeler" value="Three Wheeler" />
              <Picker.Item label="Four Wheeler" value="Four Wheeler" />
              {/* Add more options as needed */}
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Make Company:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Make Company"
              onChangeText={(value) => handleInputChange('makeCompany', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Model Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Model Name"
              onChangeText={(value) => handleInputChange('modelName', value)}
            />
          </View>
          {/* Add more input fields as needed */}
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.modalButton, styles.modalCancelButton]}
              onPress={toggleModal}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.modalAddButton]}
              onPress={handleAddVehicle}
            >
              <Text style={styles.modalButtonText}>Add Vehicle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>


  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white'
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 15,
    alignSelf: 'center'
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  addButton: {
    backgroundColor: '#066',
    borderRadius: 4,
    padding: 3,
    height: 50,
    width: "70%",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonStyle: {
    backgroundColor: 'green',
    height: 50,
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 2,
    position: 'relative',
    bottom: 10,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "beige",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#88f",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    top: '10%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottomColor: '#066',
    borderBottomWidth: 2,
    width: '100%',
    paddingBottom: 10,
    textAlign: 'center',
    borderStyle: 'dashed',
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    borderRadius: 6,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  modalCancelButton: {
    backgroundColor: '#f00',
  },
  modalAddButton: {
    backgroundColor: '#066',
  },
  modalButtonText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});


export default DetailsPage;
