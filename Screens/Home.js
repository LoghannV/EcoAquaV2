import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonLocation from "../components/ButtonLocation";

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    btnRoud: {
      borderRadius: 10,
      width: 100,
      height: 100,
      backgroundColor: "#1e3f5a",
      color: "#1e3f5a",
      fontSize: 14,
    },
    texto: {
      fontSize: 16,
      width: 250,
      textAlign: "justify",
      marginBottom: 10,
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
    TextBtn: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
        Welcome to EcoAqua!
      </Text>

      <Image
        source={require("../assets/logo.png")}
        style={{
          marginBottom: 0,
          padding: 0,
          width: 350,
          height: 350,
        }}
      />
      <Text style={styles.texto}>
        EcoAqua is your app for learning about aquatic life in your area. With
        it, you can:
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "justify",
          width: 350,
          marginBottom: 10,
        }}
      >
        - Discover the life forms that live hidden in the water
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "justify",
          width: 350,
          marginBottom: 10,
        }}
      >
        - Learn about species, including common names, scientific names and
        conservation status
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "justify",
          width: 350,
          marginBottom: 10,
        }}
      >
        - Find out about the waterways close to your life in them
      </Text>
      <Text style="">
          Click the button below to start{"\n"}
      </Text>
      <StatusBar style="auto" />
      <ButtonLocation />
    </View>
  );
}
