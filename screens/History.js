import React, { useState, useCallback } from "react";
import { ScrollView, Button, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';
import MyButton from "../components/MyButton.js";
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

const history = [
  {
    location: "Kallara",
    date: "12/12/2021",
    time: "12:00 PM",
    duration: "2 hours",
    price: "Rs. 20"
  },
  {
    location: 'Alathanpara',
    date: "12/12/2021",
    time: "12:00 PM",
    duration: "2 hours",
    price: "Rs. 20"
  },
  {
    location: 'Trivandrum',
    date: "12/12/2021",
    time: "12:00 PM",
    duration: "2 hours",
    price: "Rs. 20"
  },
]

const HistoryPage = ({ navigation }) => {



  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}> */}
      <FlatList style={styles.flatList}
        data={history}
        renderItem={({ item }) => (
          <View style={tw.style(`flex flex-row justify-between items-center border-b border-[#B8C6DB] py-[24px] px-[21px] w-full`)}>
            <Text style={tw.style(`text-[#4E4D4D] text-[18px] font-medium`)}>{item.location}</Text>
            <View style={tw.style(`flex flex-col items-end`)}>
              <Text style={tw.style(`text-[#4E4D4D] text-[12px] font-light`)}>{item.date}</Text>
              <Text style={tw.style(`text-[#4E4D4D] text-[12px] font-light`)}>{item.time}</Text>
            </View>
          </View>
        )}
      />
      {/* </ScrollView> */}
    </SafeAreaView>


  );
};



export default HistoryPage;
