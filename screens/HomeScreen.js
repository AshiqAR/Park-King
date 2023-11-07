import React, { useState, useEffect, useRef } from "react";
import { styles } from '../styles/homeStyles'
import MapView, { Marker } from "react-native-maps";
import locs from "./MarkLocations";
import { useLocation } from "../Context/LocationContext";

import MyButton from "../assets/components/MyButton.js";
import {
	View,
	Image,
	TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation, route }) => {
	const { location } = useLocation();

	const CustomMarker = ({ latitude, longitude, title, description }) => {
		return (
			<Marker
				coordinate={{ latitude: latitude, longitude: longitude }}
				title={title}
				description={description}
				image={require('../assets/images/parkSpace.png')}
				style={{ width: 50, height: 50 }}
			/>
		);
	};

	const mapRef = useRef(null);
	// const latitudeDelta = desiredDistanceInMeters / 111000;
	// const longitudeDelta = desiredDistanceInMeters / (111000 * Math.cos(latitude * Math.PI / 180));
	const loadCurrentLocation = () => {
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
				{ duration: 500 }
			);
		}
	};

	useEffect(() => {
		(async () => {
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

	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.topacity}
					onPress={() => navigation.navigate("Profile")}
				>
					<Image
						source={require('../assets/images/userLogo.png')}
						style={styles.userLogo}
					/>
				</TouchableOpacity>
				<MapView ref={mapRef} showsMyLocationButton={true} style={styles.map}>
					<Marker
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
						title={"You are here"}
					/>

					{locs.map((marker, index) => (
						<CustomMarker key={index} latitude={marker.latitude} longitude={marker.longitude} title={marker.title} description={marker.description} />
					))}
				</MapView>
				<View style={styles.bottomBar}>
					<MyButton
						title="Look for Nearby Parking Spaces"
						onPress={() => { loadCurrentLocation() }}
						buttonStyle={styles.button}
					/>
				</View>
			</View>
		</View>
	);
}

export default HomeScreen;
