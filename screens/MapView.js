 // const [currentLocation, setLocation] = useState();
  // const [address, setAddress] = useState("Engineers Book Center (EBC), Thiruvananthapuram, Kerala, India");


  // useEffect(() => {
  //   const getPermission = async () => {
  //     console.log("getPermission");
  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       console.log(status);
  //       if(status !== 'granted'){
  //         console.log("Permission not granted");
  //         return;
  //       }
  //       let currentLocation = await Location.getCurrentPositionAsync({});
  //       setLocation(currentLocation);
  //       console.log(currentLocation);
  //       getPermission();
  //   }
  // }, [] );

  // addresss to coordinates
  // const geocode = async () => {
  //   console.log("geocode");
  //   const geocodeLocation = await Location.geocodeAsync(address);
  //   console.log("geocode Location")
  //   console.log(geocodeLocation);
  // };

  // coordinates to address
  // const reverseGeocode = async () => {
  //   const reverseGeocodeLocation = await Location.reverseGeocodeAsync({
  //     longitude: currentLocation.coords.longitude,
  //     latitude: currentLocation.coords.latitude,
  //   });
  //   console.log("reverse geocode Location")
  //   console.log(reverseGeocodeLocation);
  // };



  // useEffect(() => {

  // }, [currentLocation]);