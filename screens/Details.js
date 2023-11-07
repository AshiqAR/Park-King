import React, { useState, useCallback } from "react";
import { ScrollView, Button, FlatList } from 'react-native';
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
  }
]

const DetailsPage = ({ navigation }) => {



  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}> */}

      <FlatList style={styles.flatList}
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


      {/* </ScrollView> */}
    </SafeAreaView>


  );
};



export default DetailsPage;
