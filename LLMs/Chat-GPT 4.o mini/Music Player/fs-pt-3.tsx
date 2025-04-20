import Slider from "@react-native-community/slider";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      {/* Nome da música */}
      <Text style={styles.songTitle}>Nome da Música</Text>

      {/* Informações sobre o artista */}
      <Text style={styles.artistName}>Nome do Artista</Text>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTime}>00:00</Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={100}
          value={50}
          accessibilityLabel="Barra de progresso da música"
          accessibilityHint="Deslize para avançar ou retroceder a música."
        />
        <Text style={styles.progressTime}>03:45</Text>
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Retroceder 10 segundos"
          accessibilityRole="button"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/32?text=<<" }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Play/Pause"
          accessibilityRole="button"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/32?text=▶" }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Avançar 10 segundos"
          accessibilityRole="button"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/32?text=>>" }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <Text style={styles.playlistTitle}>Playlist</Text>
      <View style={styles.playlist}>
        <Text style={styles.playlistItem}>Música 1</Text>
        <Text style={styles.playlistItem}>Música 2</Text>
        <Text style={styles.playlistItem}>Música 3</Text>
      </View>

      {/* Botão de informações adicionais */}
      <Button
        title="Informações da Música"
        accessibilityLabel="Abrir informações detalhadas da música"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Contraste adequado com o fundo branco
    marginBottom: 8,
  },
  artistName: {
    fontSize: 18,
    color: "#333333", // Contraste adequado
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressTime: {
    fontSize: 14,
    color: "#000000", // Contraste adequado
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  icon: {
    width: 32,
    height: 32,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Contraste adequado
    marginBottom: 8,
  },
  playlist: {
    marginBottom: 16,
  },
  playlistItem: {
    fontSize: 16,
    color: "#333333", // Contraste adequado
    marginBottom: 4,
  },
});

export default MusicPlayer;
