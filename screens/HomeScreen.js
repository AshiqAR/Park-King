import React, { useState, useEffect, useRef } from "react";
import { styles } from '../styles/homeStyles'
import MapScreen from "../components/MapScreen";
import MapView, { Marker } from "react-native-maps";
import locs from "./MarkLocations";
import * as Location from "expo-location";
import Loading from "../components/Loading";

import MyButton from "../components/MyButton.js";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation, route }) => {

	const CustomMarker = ({ latitude, longitude, title, description }) => {
		return (
			<Marker
				coordinate={{ latitude: latitude, longitude: longitude }}
				title={title}
				description={description}
				image={require('../images/parkSpace.png')}
				style={{ width: 50, height: 50 }}
			/>
		);
	};

	const mapRef = useRef(null);
	const latitude = 9.057485;
	const longitude = 76.536725;
	const desiredDistanceInMeters = 800;
	const latitudeDelta = desiredDistanceInMeters / 111000;
	const longitudeDelta = desiredDistanceInMeters / (111000 * Math.cos(latitude * Math.PI / 180));

	const [currentLocation, setCurrentLocation] = useState({ latitude: 8.545871, longitude: 76.903870 });
	const [pinColor, setPinColor] = useState("blue");
	const [showMarker, setShowMarker] = useState(false);


	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);


	const [fetchingLocation, setFetchingLocation] = useState(true);


	const handleButtonPress = () => {
		setShowMarker(true);
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			console.log(location);
			if (location) {
				setFetchingLocation(false);
			}

			setTimeout(() => {
				if (mapRef.current) {
					mapRef.current.animateCamera(
						{
							center: {
								latitude: location.coords.latitude,
								longitude: location.coords.longitude
							},
							zoom: 16,
							heading: 0,
							pitch: 0,
						},
						{ duration: 0 }
					);
				}
			}, 100);
		})();
	}, []);




	// useEffect(() => {
	//   setTimeout(() => {
	//     if (mapRef.current) {
	//       setShowMarker(true);
	//       mapRef.current.animateCamera(
	//         {
	//           center: {
	//             latitude: currentLocation.latitude,
	//             longitude: currentLocation.longitude,
	//           },
	//           zoom: 19 ,
	//           heading: 0,
	//           pitch: 0,
	//         },
	//         { duration: 5500}
	//       );
	//       setPinColor("blue");
	//     }
	//   }, 100);
	// }, [pinColor]);



	// useEffect(() => {
	//   setTimeout(() => {
	//     if (mapRef.current) {
	//       mapRef.current.animateCamera(
	//         {
	//           center: {
	//             latitude: location.coord.latitude,
	//             longitude: location.coord.longitude
	//           },
	//           zoom: 16 ,
	//           heading: 0,
	//           pitch: 0,
	//         },
	//         { duration: 0}
	//       );
	//     }
	//   }, 100);
	// }, [location]);

	return (
		<View style={styles.container}>
			{fetchingLocation ? <Loading /> :
				<View>
					<TouchableOpacity
						style={styles.topacity}
						onPress={() => navigation.navigate("Profile")}
					>
						<Image
							source={require('../images/userLogo.png')}
							style={styles.userLogo}
						/>
					</TouchableOpacity>
					<MapView ref={mapRef} showsMyLocationButton={true} style={styles.map}>
						{showMarker && (
							<Marker
								coordinate={{
									latitude: location.latitude,
									longitude: location.longitude,
								}}
								title={"You are here"}
							/>
						)}

						{locs.map((marker, index) => (
							<CustomMarker key={index} latitude={marker.latitude} longitude={marker.longitude} title={marker.title} description={marker.description} />
						))}


					</MapView>
					<View style={styles.bottomBar}>
						<MyButton
							title="Look for Nearby Parking Spaces"
							onPress={() => { setPinColor("violet") }}
							buttonStyle={styles.button}
						/>
					</View>
				</View>
			}
		</View>
	);
}

export default HomeScreen;
