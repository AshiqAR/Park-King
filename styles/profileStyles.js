import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection: 'column',
  },
    scrollView: {
    },
  contentContainerStyle: {
    // alignItems: 'center',
  },
  userIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userLogoImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  detailsView: {
    padding: 20,
  },
  label: {
    fontSize: 23,
    paddingTop: 13,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
    bottom: 20,
  },
  button: {
    backgroundColor: 'green',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    color: 'pink',
    fontSize: 20,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logoutButton: {
        backgroundColor: 'red',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        color: 'pink',
        fontSize: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
