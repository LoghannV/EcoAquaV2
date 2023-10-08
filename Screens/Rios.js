import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "react-native-axios";
import { useNavigation } from "@react-navigation/native";

export default function Rios(router) {
  const [data, setData] = useState([]);
  const [web, setWeb] = useState("");

  console.log("rotas:"+JSON.stringify(router.route.params.latitude))
  const _latitude = router.route.params.latitude;
  const _Longitude = router.route.params.longitude;
  const navigation = useNavigation();
  useEffect(() => {
    const apiUrl = `https://www.waterqualitydata.us/data/Station/search?lat=${_latitude}&long=${_Longitude}&within=10&mimeType=geojson`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        const responseData = response.data;
        setData(responseData.features);

        const firstFeature = responseData.features[0];
        console.log(firstFeature.properties.siteUrl);
        setWeb({ uri: firstFeature.properties.siteUrl });
        console.log("rio:"+firstFeature.properties.MonitoringLocationName)
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);
  const styles = StyleSheet.create({
    btn:{
        display:'flex',
        width:350,
        height:150,
        borderRadius:20,
        padding:5,
        justifyContent:'center',
        borderWidth:2,
        margin:2,
        borderColor:'black'
    }
  })
  return (
    <>
      <View style={{padding:5}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Watercourses within 10 miles of you</Text>
        <Text>Click on the Watercourse you want to find out more information about it and the species that live in your region</Text>
        <ScrollView style={{ width: 400, heigth: 500 }}>
          {Object.keys(data).length > 0 ?
            data.map((e,i) => {
              return (
                <TouchableOpacity key={e.properties.MonitoringLocationName+""+i} style={styles.btn}
                    onPress={()=>{

                        console.log("latitude:"+e.geometry.coordinates[1]+"\nlongitude:"+e.geometry.coordinates[0])
                        navigation.navigate('Around You', {
                            latitudeRios:e.geometry.coordinates[1],
                            longitudeRios:e.geometry.coordinates[0],
                            url:e.properties.siteUrl
                          });

                    }}
                >
                  <Text>{e.properties.MonitoringLocationName}</Text>
                </TouchableOpacity>
              );
            }) : <Text style={{fontWeight:'bold'}}>Please wait while we are loading the rivers in your area</Text>}
        </ScrollView>
      </View>
    </>
  );
}
