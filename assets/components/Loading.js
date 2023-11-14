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
    container: {
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    text: {
      fontSize: 20,
      paddingVertical: 20,
    },
})
