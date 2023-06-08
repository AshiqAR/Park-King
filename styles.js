import { StyleSheet } from "react-native";


export const styles=StyleSheet.create({
      container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'grey',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 22,
      },
      input: {
        width: '82%',
        
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 20, // Added border radius
        backgroundColor: 'gainsboro', // Added background color
        fontSize: 16, // Added font size
        color: 'black', // Added text color
        padding:9,
        
      },
      button: {
        flex:0.08,
        backgroundColor: 'lightgrey',
        marginHorizontal: 8,
        padding: 6,
        borderRadius: 25  ,
        width: '200px',
        height: '100px',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      signUpText: {
        textAlign: 'center',
        marginBottom: 5,
        marginVertical:8,
        fontWeight: '900',
      },
     
});
