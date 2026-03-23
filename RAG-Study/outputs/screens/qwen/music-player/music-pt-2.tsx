import React, { useRef, useState } from "react";
import {
  AccessibilityInfo,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Slider from "@react-native-community/slider";

// Mock data for playlist
const mockPlaylist = [
  { id: "1", title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { id: "2", title: "Imagine", artist: "John Lennon", duration: "3:07" },
  {
    id: "3",
    title: "Billie Jean",
    artist: "Michael Jackson",
    duration: "4:54",
  },
  {
    id: "4",
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    duration: "6:13",
  },
  {
    id: "5",
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    duration: "5:01",
  },
];

const MusicPlayerScreen = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef<View>(null);

  const currentTrack = mockPlaylist[currentTrackIndex];

  // Handle accessibility actions
  const handleAccessibilityAction = (event: any) => {
    switch (event.nativeEvent.actionName) {
      case "play":
        togglePlay();
        break;
      case "pause":
        togglePlay();
        break;
      case "next":
        nextTrack();
        break;
      case "previous":
        previousTrack();
        break;
      default:
        break;
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    AccessibilityInfo.announceForAccessibility(
      isPlaying ? "Pausado" : "Reproduzindo",
    );
  };

  const nextTrack = () => {
    if (currentTrackIndex < mockPlaylist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
      AccessibilityInfo.announceForAccessibility(
        `Próxima faixa: ${mockPlaylist[currentTrackIndex + 1].title}`,
      );
    }
  };

  const previousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
      AccessibilityInfo.announceForAccessibility(
        `Faixa anterior: ${mockPlaylist[currentTrackIndex - 1].title}`,
      );
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressChange = (value: number) => {
    setProgress(value);
    AccessibilityInfo.announceForAccessibility(
      `Progresso: ${Math.round(value * 100)}%`,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      accessible={false}
      accessibilityLabel="Tela do reprodutor de música"
    >
      {/* Current Track Info */}
      <View
        style={styles.trackInfoContainer}
        accessible={true}
        accessibilityLabel={`Tocando agora: ${currentTrack.title} por ${currentTrack.artist}`}
        accessibilityHint="Informações da faixa atual"
      >
        <Text style={styles.trackTitle}>{currentTrack.title}</Text>
        <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
      </View>

      {/* Progress Bar */}
      <View
        style={styles.progressContainer}
        accessible={true}
        accessibilityLabel="Barra de progresso"
        accessibilityRole="adjustable"
        accessibilityValue={{
          min: 0,
          max: 100,
          now: Math.round(progress * 100),
        }}
        onAccessibilityAction={handleAccessibilityAction}
        accessibilityActions={[
          { name: "increment", label: "Avançar" },
          { name: "decrement", label: "Retroceder" },
        ]}
      >
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{formatTime(progress * 180)}</Text>
          <Text style={styles.timeText}>{currentTrack.duration}</Text>
        </View>
        <Slider
          style={styles.progressBar}
          value={progress}
          onValueChange={handleProgressChange}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#1DB954"
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ddd"
          accessibilityLabel="Controle de progresso"
          accessibilityHint="Arraste para mudar a posição na faixa"
        />
      </View>

      {/* Player Controls */}
      <View
        ref={playerRef}
        style={styles.controlsContainer}
        accessible={true}
        accessibilityActions={[
          { name: "play", label: "Reproduzir" },
          { name: "pause", label: "Pausar" },
          { name: "next", label: "Próxima faixa" },
          { name: "previous", label: "Faixa anterior" },
        ]}
        onAccessibilityAction={handleAccessibilityAction}
        accessibilityLabel="Controles do reprodutor"
      >
        <TouchableOpacity
          onPress={previousTrack}
          accessible={true}
          accessibilityLabel="Faixa anterior"
          accessibilityRole="button"
          accessibilityHint="Voltar para a faixa anterior"
        >
          <Text style={styles.controlButton}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={togglePlay}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pausar" : "Reproduzir"}
          accessibilityRole="button"
          accessibilityHint={
            isPlaying ? "Pausar reprodução" : "Iniciar reprodução"
          }
        >
          <Text style={styles.playButton}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={nextTrack}
          accessible={true}
          accessibilityLabel="Próxima faixa"
          accessibilityRole="button"
          accessibilityHint="Ir para a próxima faixa"
        >
          <Text style={styles.controlButton}>⏭</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View
        style={styles.playlistContainer}
        accessible={true}
        accessibilityLabel="Lista de reprodução"
        accessibilityHint="Lista de todas as faixas disponíveis"
      >
        <Text style={styles.playlistHeader}>Lista de Reprodução</Text>
        {mockPlaylist.map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[
              styles.playlistItem,
              index === currentTrackIndex && styles.currentTrack,
            ]}
            onPress={() => {
              setCurrentTrackIndex(index);
              setProgress(0);
              setIsPlaying(true);
              AccessibilityInfo.announceForAccessibility(
                `Tocando: ${track.title} por ${track.artist}`,
              );
            }}
            accessible={true}
            accessibilityLabel={`${track.title} por ${track.artist}`}
            accessibilityRole="button"
            accessibilityHint="Toque duas vezes para reproduzir esta faixa"
          >
            <View style={styles.trackInfo}>
              <Text style={styles.trackNumber}>{index + 1}.</Text>
              <View>
                <Text style={styles.trackTitleList}>{track.title}</Text>
                <Text style={styles.trackArtistList}>{track.artist}</Text>
              </View>
            </View>
            <Text style={styles.trackDuration}>{track.duration}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  trackInfoContainer: {
    alignItems: "center",
    marginVertical: 32,
    padding: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  trackArtist: {
    fontSize: 18,
    color: "#b3b3b3",
    textAlign: "center",
  },
  progressContainer: {
    marginVertical: 24,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  timeText: {
    color: "#b3b3b3",
    fontSize: 14,
  },
  progressBar: {
    height: 40,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 32,
  },
  controlButton: {
    fontSize: 32,
    color: "#fff",
  },
  playButton: {
    fontSize: 48,
    color: "#1DB954",
  },
  playlistContainer: {
    marginTop: 16,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  playlistItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  currentTrack: {
    borderLeftWidth: 4,
    borderLeftColor: "#1DB954",
    paddingLeft: 12,
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  trackNumber: {
    color: "#b3b3b3",
    width: 30,
  },
  trackTitleList: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  trackArtistList: {
    fontSize: 14,
    color: "#b3b3b3",
  },
  trackDuration: {
    color: "#b3b3b3",
    fontSize: 14,
  },
});

export default MusicPlayerScreen;
