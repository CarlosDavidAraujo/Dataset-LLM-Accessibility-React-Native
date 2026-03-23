import Slider from "@expo/vector-icons/MaterialCommunityIcons"; // Importando o slider como ícone para a barra de progresso
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (value: number) => {
    // Aqui você pode atualizar o estado do progresso conforme necessário
    setProgress(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player de Música</Text>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={() => console.log("Retroceder")}
          accessible={true}
          accessibilityLabel="Retroceder"
          accessibilityActions={[{ name: "increment", label: "Retroceder" }]}
        >
          <Text>⏪</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={togglePlayPause}
          accessible={true}
          accessibilityLabel="Reproduzir/Pausar"
          accessibilityActions={[
            { name: "activate", label: "Reproduzir/Pausar" },
          ]}
        >
          <Text>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Avançar")}
          accessible={true}
          accessibilityLabel="Avançar"
          accessibilityActions={[{ name: "increment", label: "Avançar" }]}
        >
          <Text>⏩</Text>
        </TouchableOpacity>
      </View>
      <Slider
        value={progress}
        onValueChange={handleProgressChange}
        minimumValue={0}
        maximumValue={100}
      />
      <Text style={styles.infoText}>Música Atual: "Despacito"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  infoText: {
    marginTop: 20,
  },
});

export default MusicPlayerScreen;
