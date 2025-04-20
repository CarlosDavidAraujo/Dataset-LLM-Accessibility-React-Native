import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Música Exemplo",
    artist: "Artista Exemplo",
  });
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Música 1", artist: "Artista 1" },
    { id: 2, title: "Música 2", artist: "Artista 2" },
    { id: 3, title: "Música 3", artist: "Artista 3" },
  ]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // Lógica para reproduzir a próxima música na playlist
  };

  const prevTrack = () => {
    // Lógica para reproduzir a música anterior na playlist
  };

  const handleProgressChange = (value) => {
    setProgress(value);
    // Lógica para atualizar a posição de reprodução da música
  };

  return (
    <View style={styles.container}>
      <View style={styles.trackInfo}>
        <Text style={styles.title} accessibilityRole="header" aria-level="3">
          {currentTrack.title}
        </Text>
        <Text style={styles.artist}>{currentTrack.artist}</Text>
      </View>

      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={100}
        value={progress}
        onValueChange={handleProgressChange}
        accessibilityRole="adjustable"
        accessibilityLabel="Progresso da música"
      />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={prevTrack}>
          <Text style={styles.controlButtonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={togglePlay}>
          <Text style={styles.controlButtonText}>
            {isPlaying ? "Pausar" : "Reproduzir"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={nextTrack}>
          <Text style={styles.controlButtonText}>Próxima</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.playlist}>
        {playlist.map((track) => (
          <TouchableOpacity
            key={track.id}
            style={styles.playlistItem}
            onPress={() => setCurrentTrack(track)}
          >
            <Text style={styles.playlistTitle}>{track.title}</Text>
            <Text style={styles.playlistArtist}>{track.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  trackInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  artist: {
    fontSize: 16,
    color: "#666",
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  controlButton: {
    padding: 10,
    minWidth: 80,
    alignItems: "center",
  },
  controlButtonText: {
    fontSize: 16,
    color: "#007AFF",
  },
  playlist: {
    marginTop: 20,
  },
  playlistItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  playlistTitle: {
    fontSize: 18,
    color: "#333",
  },
  playlistArtist: {
    fontSize: 14,
    color: "#666",
  },
});

export default MusicPlayer;
