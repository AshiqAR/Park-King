import React, { useEffect, useRef, useState } from "react";
import { styles } from '../styles/homeStyles'
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../Context/LocationContext";
import { useParkSpaceContext } from "../Context/ParkSpaceContext";
import Loading from "../assets/components/Loading.js";
import BottomCarousel from "../assets/components/BottomCarousel.js";

import MyButton from "../assets/components/MyButton.js";
import {
	View,
	Image,
	TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	const { location, fetchingLocation, updateCurrentLocation } = useLocation();
	const { index, parkAreas, lookingForSpaces, handleLookForSpacesClick } = useParkSpaceContext();

	const handleLocateMeClick = () => {
		loadCurrentLocation();
	}

	const CustomMarker = ({ coords, name, no_free_slots }) => {
		return (
			<Marker
				coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
				title={name}
				description={`${no_free_slots} slots available`}
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
					zoom: 17,
					heading: 0,
					pitch: 0,
				},
				{ duration: 500 }
			);
		}
	};

	const loadToParkSpaceLocation = (coords) => {
		if (mapRef.current) {
			mapRef.current.animateCamera(
				{
					center: {
						latitude: coords.latitude,
						longitude: coords.longitude
					},
					zoom: 15,
					heading: 0,
					pitch: 0,
				},
				{ duration: 1000 }
			);
		}
	};

	useEffect(() => {
		if (index != null) {
			loadToParkSpaceLocation(parkAreas[index].coords);
		}
	}, [index]);

	useEffect(() => {
		if (location != null || location != undefined) {
			(async () => {
				setTimeout(() => {
					if (mapRef.current) {
						mapRef.current.animateCamera(
							{
								center: {
									latitude: location.coords.latitude,
									longitude: location.coords.longitude
								},
								zoom: 17,
								heading: 0,
								pitch: 0,
							},
							{ duration: 0 }
						);
					}
				}, 100);
			})();
		}
	}, [location]);

	useEffect(() => {
		updateCurrentLocation();
	}, []);

	return (
		fetchingLocation ? <Loading /> :
			<>
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

							{parkAreas.map((parkArea, i) => (
								<CustomMarker key={i} coords={parkArea.coords} name={parkArea.name} no_free_slots={parkArea.no_free_slots} />
							))}
						</MapView>

						{lookingForSpaces ?
							<BottomCarousel
								handleLocateMeClick={handleLocateMeClick}
							>
							</BottomCarousel>
							:
							<View style={styles.bottomBar}>
								<MyButton
									title="Look for Nearby Parking Spaces"
									onPress={() => { handleLookForSpacesClick() }}
									buttonStyle={styles.button}
								/>
							</View>
						}
					</View>
				</View>
			</>
	);
}

export default HomeScreen;
