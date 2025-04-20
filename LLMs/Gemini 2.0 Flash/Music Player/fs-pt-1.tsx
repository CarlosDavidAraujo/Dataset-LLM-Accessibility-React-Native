import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

const MusicPlayer = () => {
  const music = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    artwork: "https://via.placeholder.com/150", // Substitua pelo caminho da sua imagem
    progress: 0.5, // Exemplo de progresso da música
  };

  return (
    <View style={styles.container}>
      {/* Informações da música */}
      <Image
        source={{ uri: music.artwork }}
        style={styles.artwork}
        accessibilityLabel={`Capa do álbum ${music.title} por ${music.artist}`}
      />
      <View style={styles.musicInfo}>
        <Text style={styles.title}>{music.title}</Text>
        <Text style={styles.artist}>{music.artist}</Text>
      </View>

      {/* Barra de progresso */}
      <ProgressBar
        progress={music.progress}
        style={styles.progressBar}
        accessibilityLabel="Progresso da música"
      />

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Retroceder"
        >
          <Text style={styles.controlButtonText}>{"<<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Reproduzir/Pausar"
        >
          <Text style={styles.controlButtonText}>{"▶️/⏸️"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Avançar"
        >
          <Text style={styles.controlButtonText}>{">>"}</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de reprodução (simplificada) */}
      <View style={styles.playlist}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Música 1: Outra música"
        >
          <Text>Outra música</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Música 2: Mais uma música"
        >
          <Text>Mais uma música</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF",
  },
  artwork: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  musicInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // Contraste adequado
  },
  artist: {
    fontSize: 18,
    color: "#333", // Contraste adequado
  },
  progressBar: {
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  controlButtonText: {
    fontSize: 24,
    color: "#007AFF", // Cor com contraste adequado
  },
  playlist: {
    marginTop: 20,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  playlistItem: {
    minHeight: 48,
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default MusicPlayer;
