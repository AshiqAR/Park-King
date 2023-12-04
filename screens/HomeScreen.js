import React, { useEffect, useRef, useState, useCallback } from "react";
import { styles } from '../styles/homeStyles'
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../Context/LocationContext";
import { useParkSpaceContext } from "../Context/ParkSpaceContext";
import Loading from "../assets/components/Loading.js";
import BottomCarousel from "../assets/components/BottomCarousel.js";
import SearchBar from "../assets/components/SearchBar.js";
import BottomDrawer from '../assets/components/BottomDrawer';

import {
	TextInput,
	Animated,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	const { location, fetchingLocation, updateCurrentLocation } = useLocation();
	const { showBottomSheet, setShowBottomSheet, index, parkAreas, searchForPlace, setSearchForPlace, searchPhrase, setSearchPhrase, getNearbyParkAreas, showCarousel, listData } = useParkSpaceContext();
	const [selectedParkArea, setSelectedParkArea] = useState(null);

	const handleMarkerClick = (parkArea) => {
		setSelectedParkArea(parkArea);
		setShowBottomSheet(true);
	};

	const handleLocateMeClick = () => {
		loadCurrentLocation();
	}

	const CustomMarker = (props) => {
		const { parkArea } = props;
		return (
			<Marker
				coordinate={{ latitude: parkArea.coords.latitude, longitude: parkArea.coords.longitude }}
				onPress={() => { handleMarkerClick(parkArea) }}
				key={parkArea.area_id}
				icon={require('../assets/images/parkSpace.png')}
				style={{ justifyContent: 'center', alignItems: 'center' }}
			>
				<View style={{ marginTop: 25 }}>
					{/* <Text>{parkArea.name.length > 5 ? `${parkArea.name.slice(0, 5)}...` : parkArea.name}</Text> */}
					<Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>{parkArea.name}</Text>
				</View>
			</Marker>
		);
	};

	const mapRef = useRef(null);
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
								<CustomMarker key={i} parkArea={parkArea} />
							))}
						</MapView>

						{!showBottomSheet && (showCarousel ?
							<BottomCarousel
								handleLocateMeClick={handleLocateMeClick}
							/>
							:
							<View style={styles.bottomBar}>
								<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
									<TouchableOpacity
										style={{ height: 40, width: "45%", backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 9, borderRadius: 15, shadowColor: 'black', shadowOpacity: 0.5, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 5 }}
										onPress={() => getNearbyParkAreas(location)}
										activeOpacity={0.5}
									>
										<Text style={{fontSize: 17, fontWeight: 'bold', color: '#4A4A4A'}}>Nearby Park Spaces</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ height: 40, width: "45%", backgroundColor: 'lightgreen', alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 9, borderRadius: 15, shadowColor: 'black', shadowOpacity: 0.5, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 5 }}
										onPress={() => navigation.navigate("SearchPlace")}
										activeOpacity={0.5}
									>
										<Text style={{fontSize: 17, fontWeight: 'bold', color: '#4A4A4A'}}>Search Place</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
						{showBottomSheet &&
							<BottomDrawer
								parkArea={selectedParkArea}
							/>
						}
					</View>
				</View>
			</>
	);
}

export default HomeScreen;
