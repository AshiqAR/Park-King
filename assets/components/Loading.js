import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useLocation } from '../../Context/LocationContext';

export default function Loading({navigation}) {
  const { fetchingLocation, updateCurrentLocation } = useLocation();
  useEffect(() => {
    if (!fetchingLocation){
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [fetchingLocation]);
  useEffect(() => {
    updateCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fetching Location Details...</Text>
      <ActivityIndicator size="large" color="green" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      paddingVertical: 20,
    },
})
