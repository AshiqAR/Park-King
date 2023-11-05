import React, { useState, useCallback } from "react";
import { ScrollView, Button } from 'react-native';
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

const SettingPage = ({ navigation }) => {



  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={tw.style(`flex`)} contentContainerStyle={tw.style(`justify-start items-center`)}>
        <TouchableWithoutFeedback>
          <View style={tw.style(`flex flex-row justify-between items-center border-b border-[#B8C6DB] py-[24px] px-[21px] w-full`)}>
            <Text style={tw.style(`text-[#4E4D4D] text-[18px] font-medium`)}>Setting 1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={tw.style(`flex flex-row justify-between items-center border-b border-[#B8C6DB] py-[24px] px-[21px] w-full`)}>
            <Text style={tw.style(`text-[#4E4D4D] text-[18px] font-medium`)}>Setting 2</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={tw.style(`flex flex-row justify-between items-center border-b border-[#B8C6DB] py-[24px] px-[21px] w-full`)}>
            <Text style={tw.style(`text-[#4E4D4D] text-[18px] font-medium`)}>Setting 2</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>


  );
};



export default SettingPage;
