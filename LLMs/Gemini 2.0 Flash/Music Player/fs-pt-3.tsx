import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";

const MusicPlayerScreen = () => {
  const currentSong = {
    title: "Música Exemplo",
    artist: "Artista Exemplo",
    albumCover: "https://via.placeholder.com/150",
    progress: 0.5, // Exemplo de progresso de reprodução
  };

  return (
    <View style={styles.container}>
      {/* Informações da Música Atual */}
      <Image
        source={{ uri: currentSong.albumCover }}
        style={styles.albumCover}
        accessibilityLabel="Capa do álbum da música atual"
      />
      <View style={styles.songInfo}>
        <Text
          style={styles.songTitle}
          accessibilityLabel={`Título da música atual: ${currentSong.title}`}
        >
          {currentSong.title}
        </Text>
        <Text
          style={styles.artistName}
          accessibilityLabel={`Artista da música atual: ${currentSong.artist}`}
        >
          {currentSong.artist}
        </Text>
      </View>

      {/* Barra de Progresso */}
      <ProgressBar
        style={styles.progressBar}
        progress={currentSong.progress}
        accessibilityLabel="Progresso da reprodução da música"
      />

      {/* Controles de Reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Retroceder"
        >
          <Text style={styles.controlButtonText}>Retroceder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Reproduzir/Pausar"
        >
          <Text style={styles.controlButtonText}>Reproduzir/Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Avançar"
        >
          <Text style={styles.controlButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist}>
        <Text
          style={styles.playlistTitle}
          accessibilityLabel="Lista de reprodução"
        >
          Lista de Reprodução
        </Text>
        {/* Adicione aqui a lista de músicas da playlist */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF", // Contraste adequado
  },
  albumCover: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 16,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 16,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // Contraste adequado
  },
  artistName: {
    fontSize: 16,
    color: "#333333", // Contraste adequado
  },
  progressBar: {
    marginBottom: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 8,
  },
  controlButtonText: {
    fontSize: 16,
    color: "#000000", // Contraste adequado
  },
  playlist: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Contraste adequado
    marginBottom: 8,
  },
});

export default MusicPlayerScreen;
