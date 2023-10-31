import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fetching Location Details...</Text>
      <ActivityIndicator size="large" color="green" />
    </View>
  )
}


const styles = StyleSheet.create({
    // container: {
    //     position: 'absolute',
    //     backgroundColor: "transparent",
    //     width: '100%',
    //     height: '50%',
    // }
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      paddingVertical: 20,
    },
})
