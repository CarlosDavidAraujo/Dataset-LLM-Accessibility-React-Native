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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Dados de exemplo para a playlist
  const playlist = [
    {
      id: "1",
      title: "Música Exemplo 1",
      artist: "Artista 1",
      duration: "3:45",
    },
    {
      id: "2",
      title: "Música Exemplo 2",
      artist: "Artista 2",
      duration: "4:20",
    },
    {
      id: "3",
      title: "Música Exemplo 3",
      artist: "Artista 3",
      duration: "2:55",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Feedback para leitores de tela
    AccessibilityInfo.announceForAccessibility(
      isPlaying ? "Música pausada" : "Música tocando"
    );
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setProgress(0);
    AccessibilityInfo.announceForAccessibility(
      `Tocando agora: ${playlist[nextIndex].title}`
    );
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setProgress(0);
    AccessibilityInfo.announceForAccessibility(
      `Tocando agora: ${playlist[prevIndex].title}`
    );
  };

  const renderTrackItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.trackItem,
        index === currentTrackIndex && styles.selectedTrack,
      ]}
      onPress={() => {
        setCurrentTrackIndex(index);
        setProgress(0);
      }}
      accessible={true}
      accessibilityLabel={`${item.title} por ${item.artist}, duração ${item.duration}`}
      accessibilityRole="button"
      accessibilityHint="Toque duas vezes para selecionar esta música"
    >
      <Text style={styles.trackTitle}>{item.title}</Text>
      <Text style={styles.trackArtist}>{item.artist}</Text>
      <Text style={styles.trackDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} accessible={true}>
      {/* Área de informações da música atual */}
      <View
        style={styles.currentTrackInfo}
        accessibilityLabel={`Tocando agora: ${currentTrack.title} por ${currentTrack.artist}`}
      >
        <Text style={styles.trackTitle}>{currentTrack.title}</Text>
        <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={100}
          value={progress}
          onValueChange={setProgress}
          minimumTrackTintColor="#1DB954" // Verde com bom contraste
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Progresso da música"
          accessibilityHint="Deslize para avançar ou retroceder na música"
        />
        <View style={styles.timeLabels}>
          <Text style={styles.timeText}>{formatTime(progress)}</Text>
          <Text style={styles.timeText}>{formatTime(100)}</Text>
        </View>
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePrevious}
          accessible={true}
          accessibilityLabel="Música anterior"
          accessibilityRole="button"
          accessibilityHint="Toque duas vezes para voltar para a música anterior"
        >
          <Text style={styles.controlButtonText}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={handlePlayPause}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pausar" : "Tocar"}
          accessibilityRole="button"
          accessibilityHint="Toque duas vezes para pausar ou continuar a música"
        >
          <Text style={styles.controlButtonText}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleNext}
          accessible={true}
          accessibilityLabel="Próxima música"
          accessibilityRole="button"
          accessibilityHint="Toque duas vezes para avançar para a próxima música"
        >
          <Text style={styles.controlButtonText}>⏭</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Playlist
        </Text>
        <FlatList
          data={playlist}
          renderItem={renderTrackItem}
          keyExtractor={(item) => item.id}
          accessibilityLabel="Lista de músicas na playlist"
        />
      </View>
    </View>
  );
};

// Função auxiliar para formatar o tempo (simplificada)
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  currentTrackInfo: {
    marginBottom: 24,
    alignItems: "center",
  },
  trackTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000", // Preto para alto contraste
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 18,
    color: "#333333", // Cinza escuro para bom contraste
  },
  trackDuration: {
    fontSize: 14,
    color: "#666666",
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  timeText: {
    fontSize: 14,
    color: "#333333",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    backgroundColor: "#F0F0F0",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  playButton: {
    backgroundColor: "#1DB954",
    width: 80,
    height: 80,
  },
  controlButtonText: {
    fontSize: 24,
    color: "#000000",
  },
  playlistContainer: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  trackItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  selectedTrack: {
    backgroundColor: "#E8F5E9",
  },
});

export default MusicPlayer;
