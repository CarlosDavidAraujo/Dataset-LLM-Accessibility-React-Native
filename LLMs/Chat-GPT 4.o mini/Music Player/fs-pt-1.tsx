import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      {/* Informações sobre a música atual */}
      <Text style={styles.songTitle}>Nome da Música</Text>
      <Text style={styles.artistName}>Nome do Artista</Text>

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Retroceder 15 segundos"
          onPress={() => {
            /* Função de retroceder */
          }}
        >
          <Text style={styles.icon}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Reproduzir/Pausar"
          onPress={() => {
            /* Função de play/pause */
          }}
        >
          <Text style={styles.icon}>⏯</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Avançar 15 segundos"
          onPress={() => {
            /* Função de avançar */
          }}
        >
          <Text style={styles.icon}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de progresso */}
      <Text style={styles.progressLabel}>Progresso</Text>
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={0.5} // Exemplo de valor, que pode ser atualizado dinamicamente
        accessibilityLabel="Barra de progresso da música"
        accessibilityHint="Arraste para ajustar o progresso da música"
      />

      {/* Playlist */}
      <View style={styles.playlist}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Selecionar música 1"
          onPress={() => {
            /* Função de selecionar música */
          }}
        >
          <Text style={styles.playlistItemText}>🎵 Música 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Selecionar música 2"
          onPress={() => {
            /* Função de selecionar música */
          }}
        >
          <Text style={styles.playlistItemText}>🎵 Música 2</Text>
        </TouchableOpacity>
        {/* Adicionar mais itens de playlist conforme necessário */}
      </View>
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
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  artistName: {
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    marginBottom: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  controlButton: {
    minWidth: 64,
    minHeight: 64,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 32,
    backgroundColor: "#F0F0F0",
  },
  icon: {
    fontSize: 28,
    color: "#000000",
  },
  progressLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  playlist: {
    marginTop: 20,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  playlistItem: {
    padding: 12,
    backgroundColor: "#F0F0F0",
    marginBottom: 8,
    borderRadius: 5,
  },
  playlistItemText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default MusicPlayer;
