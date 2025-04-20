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
  const playlist = [
    { id: 1, title: "Música 1", artist: "Artista 1" },
    { id: 2, title: "Música 2", artist: "Artista 2" },
    { id: 3, title: "Música 3", artist: "Artista 3" },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
    setProgress(0);
  };

  const handlePrevious = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const previousIndex =
      (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[previousIndex]);
    setProgress(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.trackInfo}>
        <Text style={styles.title} accessibilityRole="header">
          {currentTrack.title}
        </Text>
        <Text style={styles.artist} accessibilityRole="text">
          {currentTrack.artist}
        </Text>
      </View>
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={100}
        value={progress}
        onValueChange={(value) => setProgress(value)}
        accessibilityRole="adjustable"
        accessibilityLabel="Progresso da música"
        accessibilityHint="Use deslize para ajustar o progresso da música"
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={handlePrevious}>
          <Text style={styles.controlButtonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePlayPause}
        >
          <Text style={styles.controlButtonText}>
            {isPlaying ? "Pausar" : "Reproduzir"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={handleNext}>
          <Text style={styles.controlButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playlist}>
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Playlist
        </Text>
        {playlist.map((track) => (
          <TouchableOpacity
            key={track.id}
            style={styles.playlistItem}
            onPress={() => {
              setCurrentTrack(track);
              setProgress(0);
            }}
          >
            <Text style={styles.playlistItemText}>{track.title}</Text>
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
    backgroundColor: "#F5FCFF",
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
    fontSize: 18,
    color: "#666",
  },
  progressBar: {
    width: "100%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  controlButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  playlist: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  playlistItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  playlistItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default MusicPlayer;
