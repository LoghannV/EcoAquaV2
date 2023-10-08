import { Text, View, ScrollView, StyleSheet } from "react-native";
import EspecieView from "../components/EspecieView";
import { useState, useEffect } from "react";
import axios from "react-native-axios";
import Water from "../components/Water";
export default function Especies({ route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    map: {
      display: "flex",
      width: 200,
      height: 400,
      margin: "auto",
      borderWidth: 1,
      borderRadius: 10,
    },
    btnRoud: {
      borderRadius: 10,
      width: 100,
      height: 100,
      backgroundColor: "#1e3f5a",
      color: "#1e3f5a",
      fontSize: 14,
    },

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
  });

  const [especies, setEspecies] = useState([]);

  useEffect(() => {

    const apiUrl = `https://api.gbif.org/v1/occurrence/search?q=aquatic&mediaType=StillImage&limit=25&geo=bbox:${
      route.params.longitudeRios - 0.5
    },${route.params.latitudeRios - 0.5},${route.params.longitudeRios + 0.5},${
      route.params.latitudeRios + 0.5
    }&threatened=true&hasGeospatialIssue=false&hasTaxonKey=true&hasCoordinate=true`;
    console.log(apiUrl)
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.status === 200) {
          setEspecies(res.data.results);
        }
      })
      .catch((error) => {
        console.log("Ocorreu um erro: ", error);
      });

  }, [route.params.latitudeRios, route.params.longitudeRios]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ width: 400, height: 360 }}
      >
        <Water

          url={route.params.url}
        />
      </ScrollView>
      <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}>
      Species found in the region{"\n"}
      </Text>
      <Text>
        {"\t"}Click on the species to find out more information{"\n"}
      </Text>
      <ScrollView
        style={styles.EspecieBox}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Object.keys(especies).length > 0 &&
          especies.map((e) => <EspecieView key={e["key"]} especie={e} />)}
      </ScrollView>
    </View>
  );
}
