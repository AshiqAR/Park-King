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

const DetailsPage = ({navigation}) => {



  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
   
   <Text>
    Details Page
   </Text>

  </ScrollView>
  </SafeAreaView>
    
   
  );
};



export default DetailsPage;
