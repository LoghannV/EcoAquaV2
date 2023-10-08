import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map({ initialRegion }) {
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    // Atualize a região do mapa com a posição atual ou qualquer outra lógica de atualização.
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Sua Posição"
          description="Você está aqui"
        />
        {/* Adicione mais marcadores conforme necessário */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
