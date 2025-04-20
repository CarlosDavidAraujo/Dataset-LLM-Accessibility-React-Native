import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
} from "react-native";
import { ProgressBar } from "react-native-paper";

// Dummy data para a playlist
const playlist = [
  { title: "Song 1", artist: "Artist 1", duration: 240 },
  { title: "Song 2", artist: "Artist 2", duration: 180 },
  { title: "Song 3", artist: "Artist 3", duration: 210 },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const currentSong = playlist[currentSongIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Notificar leitores de tela sobre o estado da reprodução
    AccessibilityInfo.announceForAccessibility(
      isPlaying ? "Pausado" : "Reproduzindo"
    );
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setProgress(0);
    AccessibilityInfo.announceForAccessibility(
      `Próxima música: ${playlist[nextIndex].title}`
    );
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    setProgress(0);
    AccessibilityInfo.announceForAccessibility(
      `Música anterior: ${playlist[prevIndex].title}`
    );
  };

  const handleSeek = (event) => {
    const newProgress = event.nativeEvent.contentOffset.x;
    setProgress(newProgress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.artistName}>{currentSong.artist}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePrevious}
          accessible={true}
          accessibilityLabel="Música anterior"
        >
          <Text style={styles.buttonText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePlayPause}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pausar música" : "Reproduzir música"}
        >
          <Text style={styles.buttonText}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          accessible={true}
          accessibilityLabel="Próxima música"
        >
          <Text style={styles.buttonText}>⏩</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{`Progresso: ${Math.round(
          (progress / currentSong.duration) * 100
        )}%`}</Text>
        <ProgressBar
          indeterminate={false}
          progress={progress / currentSong.duration}
        />
      </View>

      <View style={styles.playlist}>
        <Text style={styles.playlistHeader}>Playlist</Text>
        {playlist.map((song, index) => (
          <Text
            key={index}
            style={[
              styles.playlistItem,
              currentSongIndex === index && styles.activeSong,
            ]}
            accessible={true}
            accessibilityLabel={`Música ${song.title} de ${song.artist}`}
          >
            {song.title} - {song.artist}
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
    backgroundColor: "#ffffff",
    padding: 20,
  },
  songInfo: {
    marginBottom: 20,
    alignItems: "center",
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  artistName: {
    fontSize: 18,
    color: "#555555",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: "#007bff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  progressContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 5,
  },
  playlist: {
    width: "100%",
    marginTop: 20,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  playlistItem: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 5,
  },
  activeSong: {
    fontWeight: "bold",
    color: "#ff0000",
  },
});

export default MusicPlayer;
