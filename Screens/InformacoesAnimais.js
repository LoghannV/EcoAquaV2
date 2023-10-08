import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function InformacoesAnimais({ route }) {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 10,
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    imageBox: {
      width: 350,
      height: 350,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 20,
    },
    textBox: {
      marginTop: 10,
      width: 380,
      height: "100%",
    },
  });
  const info = route.params.info;
  const wikipediaApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${info["family"]}`;
  const [descricao, setDescricao] = useState("");

  axios
    .get(wikipediaApiUrl)
    .then((response) => {
      if (response.status === 200) {
        setDescricao(response.data.extract);
      }
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
    const ImageUri = {uri:info["media"][0]['identifier']}
  return (
    <View style={style.container}>
      <View style={style.imageBox}>

         <Image
          source={ImageUri}
          style={{
            borderWidth: 2,
            width: 350,
            height: 350,
            borderRadius: 10,
          }}
        />


      </View>
      <View style={style.textBox}>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}>
          {info["acceptedScientificName"]}
        </Text>
        <Text>
          Country:{info["country"]}
          {"\n"}
        </Text>
        <Text>
          Family:{info["family"]}
          {"\n"}
        </Text>
        <Text style={{ width: "95%", textAlign: "justify" }}>{descricao}</Text>
      </View>
    </View>
  );
}
