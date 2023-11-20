import React, { useEffect, useRef, useState, useCallback } from "react";
import { styles } from '../styles/homeStyles'
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../Context/LocationContext";
import { useParkSpaceContext } from "../Context/ParkSpaceContext";
import Loading from "../assets/components/Loading.js";
import BottomCarousel from "../assets/components/BottomCarousel.js";
import SearchBar from "../assets/components/SearchBar.js";
import List from "../assets/components/List.js";

import MyButton from "../assets/components/MyButton.js";
import {
	TextInput,
	Animated,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	const { location, fetchingLocation, updateCurrentLocation, getSamePlaces } = useLocation();
	const { index, parkAreas, searchForPlace, setSearchForPlace, searchPhrase, setSearchPhrase, getNearbyParkAreas, showCarousel } = useParkSpaceContext();

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
								title={"Your Location"}
							/>

							{parkAreas.map((parkArea, i) => (
								<CustomMarker key={i} coords={parkArea.coords} name={parkArea.name} no_free_slots={parkArea.no_free_slots} />
							))}
						</MapView>

						{/* {searchForPlace &&
							// <List
							// 	searchPhrase={searchPhrase}
							// 	setClicked={setSearchForPlace}
							// 	data={parkAreas}
							// />
							<View
								style={{ position: 'absolute', bottom: 100, left: 0, zIndex: 5, height: 100, width: "100%", backgroundColor: "red" }}
							>
								<Text>Sample</Text>
							</View>
						} */}

						{showCarousel ?
							<BottomCarousel
								handleLocateMeClick={handleLocateMeClick}
							/>
							:
							<View style={styles.bottomBar}>
								{searchForPlace &&
									<View
										style={{ maxHeight: 300, width: "100%" ,flexDirection: 'column', justifyContent: 'flex-start', marginBottom: 30}}
									>
										<List
											searchPhrase={searchPhrase}
											setClicked={setSearchForPlace}
											data={getSamePlaces(searchPhrase, 5)}
										/>
										<TouchableOpacity
											style={{marginVertical: 5, backgroundColor: 'lightblue', alignSelf: 'center', width: '100%', padding: 5, borderRadius: 10 }}
											onPress={() => { getNearbyParkAreas(location) }}
										>
											<Text
												style={{ color: 'green', fontSize: 17, fontWeight: "bold", textAlign: "center" }}
											>
												Parking Spaces Near Me
											</Text>
										</TouchableOpacity>

									</View>
								}
								<SearchBar
									clicked={searchForPlace}
									setClicked={setSearchForPlace}
									searchPhrase={searchPhrase}
									setSearchPhrase={setSearchPhrase}
								/>
							</View>
						}
					</View>
				</View>
			</>
	);
}

export default HomeScreen;
