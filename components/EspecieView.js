import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function EspecieView(props) {
  const navigation = useNavigation();

  const style = StyleSheet.create({
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 180,
      borderColor: "black",
      borderWidth: 0.5,
      borderRadius: 10,
      height: 230,
      margin: 2,
    },
  });
  let imageSource = "";
  let nome = "Not found";
  if (
    props.especie &&
    props.especie["media"] &&
    props.especie["media"].length > 0
  ) {
    imageSource = { uri: props.especie["media"][0]["identifier"] };

    /* axios.get(`https://api.gbif.org/v1/species/${props.especie['speciesKey']}/media`).then((res)=>{
            console.log(`https://api.gbif.org/v1/species/${props.especie['speciesKey']}/media`)
            console.log(res.data)
      })*/
  }
  nome = props.especie["acceptedScientificName"];
  const visualizarAnimal = () => {
    navigation.navigate("Information", {
      info: props.especie,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        visualizarAnimal();
      }}
    >
      <View
        style={style.box}
        onPress={() => {
          alert("teste");
        }}
      >
        <Text style={{ fontSize: 12 }}>{nome}</Text>
        {imageSource !== "" ? (
          <Image
            source={imageSource}
            style={{
              borderWidth: 2,
              width: 150,
              height: 150,
              borderRadius: 10,
            }}
          />
        ) : (
          <>
            <View
              style={{
                width: 150,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
                borderRadius: 10,
              }}
            >
              <Text>Image not found</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
