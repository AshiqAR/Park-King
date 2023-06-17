import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
    },
    containerlogo:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:445,
        height:10,
    },
    button: {
        backgroundColor: 'green',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5 ,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        color: 'pink',
        fontSize: 20,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        width: "90%",
        // borderColor: "green",
        // borderWidth: 1,
        borderRadius: 5,
        shadowColor: "black",
        shadowRadius: 3,
        shadowOpacity: 1,
        paddingBottom: 20,
        elevation: 3,
    },
})