import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header(props){
    const {showProfileIsClicked} = props;
    return (
      <View style={styles.container}>
        <View style={styles.ourLogo}>
          <Image
            style={styles.img}
            source={require('../images/parkingLogo.png')}
          />
          {/* <Text style={{color: 'black', padding: 5, fontSize: 22, fontWeight: "bold"}}>parKing</Text> */}
        </View>
        <TouchableOpacity onPress={showProfileIsClicked}>
        <Image 
          source={require('../images/userLogo.png')}
          style= {styles.userLogo}
        />
      </TouchableOpacity>
      </View>
      );
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ourLogo: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

    },
    img: { width: 120, height: 20 },
    userLogo:{
      width: 40,
      height: 40,
      padding: 5,
      marginRight: 28,
    }

})