import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Usando ícones populares
import Slider from "@react-native-community/slider";

// Lista simulada de músicas
const playlist = [
  { id: 1, title: "Música 1", artist: "Artista 1", duration: 180 },
  { id: 2, title: "Música 2", artist: "Artista 2", duration: 210 },
  { id: 3, title: "Música 3", artist: "Artista 3", duration: 240 },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextTrack = playlist[(currentIndex + 1) % playlist.length];
    setCurrentTrack(nextTrack);
  };

  const prevTrack = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const prevTrack =
      playlist[(currentIndex - 1 + playlist.length) % playlist.length];
    setCurrentTrack(prevTrack);
  };

  const onProgressChange = (value) => {
    setProgress(value);
  };

  return (
    <View style={styles.container}>
      {/* Informações sobre a música atual */}
      <Text
        style={styles.trackInfo}
        accessibilityLabel={`Tocando ${currentTrack.title} de ${currentTrack.artist}`}
        accessibilityRole="header"
      >
        {currentTrack.title} - {currentTrack.artist}
      </Text>

      {/* Barra de progresso */}
      <Slider
        style={styles.slider}
        value={progress}
        onValueChange={onProgressChange}
        minimumValue={0}
        maximumValue={currentTrack.duration}
        step={1}
        thumbTintColor="#3498db"
        minimumTrackTintColor="#2980b9"
        maximumTrackTintColor="#7f8c8d"
        accessibilityLabel="Barra de progresso"
        //accessibilityRole="slider" valor inexistente
        accessibilityValue={{
          min: 0,
          max: currentTrack.duration,
          now: progress,
        }}
      />

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={prevTrack}
          accessibilityLabel="Retroceder música"
          accessibilityRole="button"
        >
          <Ionicons name="repeat" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={togglePlayPause}
          accessibilityLabel={isPlaying ? "Pausar música" : "Reproduzir música"}
          accessibilityRole="button"
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={50}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={nextTrack}
          accessibilityLabel="Avançar música"
          accessibilityRole="button"
        >
          <Ionicons name="play-forward" size={40} color="white" />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist}>
        {playlist.map((track) => (
          <Text
            key={track.id}
            style={[
              styles.playlistItem,
              track.id === currentTrack.id && styles.activeTrack,
            ]}
            accessibilityLabel={`Música ${track.title} por ${track.artist}`}
            accessibilityRole="link"
            onPress={() => setCurrentTrack(track)}
          >
            {track.title} - {track.artist}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    padding: 20,
  },
  trackInfo: {
    fontSize: 24,
    color: "#ecf0f1",
    fontWeight: "bold",
    marginBottom: 20,
  },
  slider: {
    width: "80%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  controlButton: {
    marginHorizontal: 15,
    padding: 10,
  },
  playlist: {
    marginTop: 20,
    width: "100%",
  },
  playlistItem: {
    color: "#ecf0f1",
    fontSize: 18,
    padding: 5,
  },
  activeTrack: {
    fontWeight: "bold",
    color: "#3498db",
  },
});

export default MusicPlayer;
