import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  AccessibilityInfo,
  Dimensions,
} from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutos em segundos
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Dados de exemplo para a playlist
  const playlist = [
    {
      id: "1",
      title: "Música Exemplo 1",
      artist: "Artista A",
      duration: "3:00",
    },
    {
      id: "2",
      title: "Música Exemplo 2",
      artist: "Artista B",
      duration: "4:30",
    },
    {
      id: "3",
      title: "Música Exemplo 3",
      artist: "Artista C",
      duration: "2:45",
    },
  ];

  const currentSong = playlist[currentSongIndex];

  // Funções de controle do player
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    setCurrentTime(Math.min(currentTime + 15, duration));
  };

  const skipBackward = () => {
    setCurrentTime(Math.max(currentTime - 15, 0));
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Formata o tempo (segundos) para MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Área de informações da música atual */}
      <View
        style={styles.songInfo}
        accessibilityLabel={`Tocando agora: ${currentSong.title} por ${currentSong.artist}`}
      >
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`Tempo atual: ${formatTime(currentTime)}`}
        >
          {formatTime(currentTime)}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={setCurrentTime}
          minimumTrackTintColor="#1DB954" // Verde com bom contraste
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Barra de progresso da música"
          accessibilityHint="Arraste para avançar ou retroceder na música"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duração total: ${formatTime(duration)}`}
        >
          {formatTime(duration)}
        </Text>
      </View>

      {/* Controles do player */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipBackward}
          accessibilityLabel="Retroceder 15 segundos"
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.controlButtonText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={togglePlayPause}
          accessibilityLabel={isPlaying ? "Pausar" : "Tocar"}
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.controlButtonText}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipForward}
          accessibilityLabel="Avançar 15 segundos"
          accessibilityRole="button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.controlButtonText}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Playlist
        </Text>
        <FlatList
          data={playlist}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.playlistItem,
                index === currentSongIndex && styles.currentPlaylistItem,
              ]}
              onPress={() => selectSong(index)}
              accessibilityLabel={`${item.title} por ${item.artist}, duração ${item.duration}`}
              accessibilityHint="Toque duas vezes para selecionar esta música"
              accessibilityRole="button"
              activeOpacity={0.7}
            >
              <Text style={styles.playlistItemText}>
                {item.title} - {item.artist}
              </Text>
              <Text style={styles.playlistItemDuration}>{item.duration}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

// Estilos com contraste adequado e tamanhos acessíveis
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 24,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  songArtist: {
    color: "#B3B3B3",
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  progressBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 14,
    minWidth: 40,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    marginHorizontal: 16,
    padding: 12,
  },
  playButton: {
    backgroundColor: "#1DB954",
    borderRadius: 50,
    padding: 20,
  },
  controlButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    minWidth: 48,
  },
  playlistContainer: {
    flex: 1,
  },
  playlistTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  playlistItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  currentPlaylistItem: {
    backgroundColor: "#282828",
  },
  playlistItemText: {
    color: "#FFFFFF",
    fontSize: 16,
    flex: 1,
  },
  playlistItemDuration: {
    color: "#B3B3B3",
    fontSize: 14,
    marginLeft: 8,
  },
});

export default MusicPlayer;
