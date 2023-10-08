import { useState,useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
export default function ButtonLocation() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState([]);
  const styles = StyleSheet.create({
    ScreenButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 40,
      width: 300,
      height: 60,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#120a8f",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#120a8f",
    },
    TextBtn: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    EspecieBox: {
      borderTopColor: "black",
      borderRadius: 5,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      width: 380,
      padding: 10,
    },
  });
  const getSpecies = async () => {
    requestLocationPermission();
    const PosicaoAtual = await getCurrentPositionAsync();
    setLatitude(PosicaoAtual.coords.latitude);
    setLongitude(PosicaoAtual.coords.longitude);

    console.log(latitude + " - " + longitude);

    if(latitude!==null){
      navigation.navigate('Water Course in the Region', {
        latitude:PosicaoAtual.coords.latitude,
        longitude:PosicaoAtual.coords.longitude,
      });
    }

  };

  useEffect(()=>{
      if(latitude===null){
        getSpecies()
      }
  },[latitude])
  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();
    return granted;
  }
  return (
    <>
      <TouchableOpacity
        onPress={async () => {
          await getSpecies();
        }}
        style={styles.ScreenButton}
        underlayColor="#120a8f"
      >
        <Text style={styles.TextBtn}>Search Nearby Watercourses</Text>
      </TouchableOpacity>

    </>
  );
}
