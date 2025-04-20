import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
  Platform,
} from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(200); // Duração fictícia da música
  const [trackIndex, setTrackIndex] = useState(0);

  const playlist = [
    { title: "Música 1", artist: "Artista A" },
    { title: "Música 2", artist: "Artista B" },
    { title: "Música 3", artist: "Artista C" },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setTrackIndex((trackIndex + 1) % playlist.length);
    setCurrentTime(0);
  };

  const handlePrevious = () => {
    setTrackIndex((trackIndex - 1 + playlist.length) % playlist.length);
    setCurrentTime(0);
  };

  const handleSeek = (value) => {
    setCurrentTime(value);
  };

  const track = playlist[trackIndex];

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: "#FFFFFF" }]}>
        Reprodutor de Música
      </Text>

      <View style={styles.trackInfo}>
        <Text
          style={[styles.trackTitle, { color: "#FFFFFF" }]}
          accessible={true}
          accessibilityLabel={`Música atual: ${track.title}`}
        >
          {track.title}
        </Text>
        <Text
          style={[styles.trackArtist, { color: "#FFFFFF" }]}
          accessible={true}
          accessibilityLabel={`Artista: ${track.artist}`}
        >
          {track.artist}
        </Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePrevious}
          accessible={true}
          accessibilityLabel="Retroceder"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePlayPause}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pausar" : "Tocar"}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          accessible={true}
          accessibilityLabel="Avançar"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>⏩</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>{Math.floor(currentTime)}s</Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={handleSeek}
          thumbTintColor="#FF6347"
          minimumTrackTintColor="#FF6347"
          maximumTrackTintColor="#CCCCCC"
          accessibilityLabel="Barra de progresso"
        />
        <Text style={styles.timeText}>{Math.floor(duration)}s</Text>
      </View>

      <View style={styles.playlist}>
        <Text style={styles.playlistHeader}>Playlist</Text>
        {playlist.map((track, index) => (
          <Text
            key={index}
            style={styles.playlistItem}
            accessible={true}
            accessibilityLabel={`Música na posição ${index + 1}: ${
              track.title
            }`}
            accessibilityRole="link"
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
    backgroundColor: "#333333",
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  trackInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  trackArtist: {
    fontSize: 16,
  },
  controls: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: "#FF6347",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timeText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginHorizontal: 10,
  },
  progressBar: {
    width: 200,
    height: 40,
  },
  playlist: {
    marginTop: 20,
    width: "100%",
  },
  playlistHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  playlistItem: {
    fontSize: 16,
    color: "#FFFFFF",
    paddingVertical: 5,
  },
});

export default MusicPlayer;
