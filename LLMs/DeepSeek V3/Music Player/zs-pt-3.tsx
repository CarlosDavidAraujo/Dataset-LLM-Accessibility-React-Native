import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  AccessibilityInfo,
} from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutos em segundos
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    { id: "1", title: "Música Exemplo 1", artist: "Artista 1" },
    { id: "2", title: "Música Exemplo 2", artist: "Artista 2" },
    { id: "3", title: "Música Exemplo 3", artist: "Artista 3" },
  ];

  const currentSong = songs[currentSongIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    setCurrentTime(Math.min(currentTime + 15, duration));
  };

  const skipBackward = () => {
    setCurrentTime(Math.max(currentTime - 15, 0));
  };

  const changeSong = (index) => {
    setCurrentSongIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Área de informações da música */}
      <View
        style={styles.songInfo}
        accessibilityLabel={`Tocando agora: ${currentSong.title} por ${currentSong.artist}`}
      >
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
        <Text style={styles.timeText}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Text>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={(value) => setCurrentTime(value)}
          minimumTrackTintColor="#1DB954" // Verde com bom contraste
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Barra de progresso da música"
          accessibilityHint="Arraste para avançar ou retroceder na música"
        />
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipBackward}
          accessibilityLabel="Retroceder 15 segundos"
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.controlText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={togglePlayPause}
          accessibilityLabel={isPlaying ? "Pausar" : "Reproduzir"}
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={[styles.controlText, styles.playButtonText]}>
            {isPlaying ? "⏸" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipForward}
          accessibilityLabel="Avançar 15 segundos"
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.controlText}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Playlist
        </Text>
        <FlatList
          data={songs}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.playlistItem,
                index === currentSongIndex && styles.currentPlaylistItem,
              ]}
              onPress={() => changeSong(index)}
              accessibilityLabel={`${item.title} por ${item.artist}`}
              accessibilityHint="Toque duas vezes para reproduzir esta música"
              accessibilityRole="button"
              activeOpacity={0.7}
            >
              <Text style={styles.playlistItemText}>
                {index + 1}. {item.title} - {item.artist}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 30,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333", // Contraste suficiente com fundo branco
    marginBottom: 5,
  },
  songArtist: {
    fontSize: 18,
    color: "#666666",
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: "#444444",
  },
  progressContainer: {
    width: "100%",
    marginBottom: 30,
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  controlButton: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#EEEEEE",
  },
  playButton: {
    backgroundColor: "#1DB954",
    padding: 20,
  },
  controlText: {
    fontSize: 24,
    color: "#333333",
  },
  playButtonText: {
    color: "#FFFFFF",
  },
  playlistContainer: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  playlistItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  currentPlaylistItem: {
    backgroundColor: "#E8F5E9",
  },
  playlistItemText: {
    fontSize: 16,
    color: "#333333",
  },
});

export default MusicPlayer;
