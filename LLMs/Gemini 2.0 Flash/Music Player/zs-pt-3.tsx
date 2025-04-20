import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Música Exemplo",
    artist: "Artista Exemplo",
  });
  const [playlist, setPlaylist] = useState([
    { id: "1", title: "Música 1", artist: "Artista 1" },
    { id: "2", title: "Música 2", artist: "Artista 2" },
    { id: "3", title: "Música 3", artist: "Artista 3" },
  ]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const skipToNext = () => {
    // Implementar a lógica para pular para a próxima música
  };

  const skipToPrevious = () => {
    // Implementar a lógica para pular para a música anterior
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      onPress={() => setCurrentTrack(item)}
    >
      <Text style={styles.playlistItemTitle}>{item.title}</Text>
      <Text style={styles.playlistItemArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{currentTrack.title}</Text>
        <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
      </View>

      <Slider
        style={styles.progressBar}
        value={progress}
        onValueChange={setProgress}
        accessibilityLabel="Barra de progresso da música"
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipToPrevious}
          accessibilityLabel="Música anterior"
        >
          <Text style={styles.controlButtonText}>{"<<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={togglePlay}
          accessibilityLabel={isPlaying ? "Pausar" : "Reproduzir"}
        >
          <Text style={styles.controlButtonText}>{isPlaying ? "||" : ">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipToNext}
          accessibilityLabel="Próxima música"
        >
          <Text style={styles.controlButtonText}>{">>"}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={playlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.playlist}
        accessibilityLabel="Lista de reprodução"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  trackInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  trackTitle: {
    fontSize: 24,
    color: "#fff",
  },
  trackArtist: {
    fontSize: 18,
    color: "#ccc",
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
  },
  controlButtonText: {
    fontSize: 24,
    color: "#fff",
  },
  playlist: {
    flex: 1,
  },
  playlistItem: {
    padding: 10,
  },
  playlistItemTitle: {
    fontSize: 18,
    color: "#fff",
  },
  playlistItemArtist: {
    fontSize: 14,
    color: "#ccc",
  },
});

export default MusicPlayer;
