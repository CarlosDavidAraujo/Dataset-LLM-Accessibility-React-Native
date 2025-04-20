import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MusicPlayer = () => {
  // Estado do reprodutor
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Dados da playlist
  const [playlist] = useState([
    {
      id: "1",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      duration: "5:55",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Bohemian_Rhapsody.png/220px-Bohemian_Rhapsody.png",
    },
    {
      id: "2",
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
      duration: "3:04",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/ImagineCover.jpg/220px-ImagineCover.jpg",
    },
    {
      id: "3",
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      duration: "4:54",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Michael_Jackson_-_Thriller.png/220px-Michael_Jackson_-_Thriller.png",
    },
  ]);

  const currentTrack = playlist[currentTrackIndex];
  const durationInSeconds = 355; // 5:55 em segundos para exemplo

  // Simulação do avanço do tempo quando a música está tocando
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationInSeconds) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Funções de controle
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTime(0);
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentTime(0);
    setCurrentTrackIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length
    );
  };

  const handleSeek = (value) => {
    setCurrentTime(value);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Reprodutor de música"
    >
      {/* Informações da música atual */}
      <View style={styles.trackInfo} accessibilityRole="summary">
        <Image
          source={{ uri: currentTrack.cover }}
          style={styles.cover}
          accessibilityLabel={`Capa do álbum: ${currentTrack.album}`}
        />
        <Text style={styles.trackTitle} accessibilityRole="header">
          {currentTrack.title}
        </Text>
        <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
        <Text style={styles.trackAlbum}>{currentTrack.album}</Text>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`Tempo decorrido: ${formatTime(currentTime)}`}
        >
          {formatTime(currentTime)}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={durationInSeconds}
          value={currentTime}
          onValueChange={handleSeek}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#666666"
          thumbTintColor="#000000"
          accessibilityLabel={`Barra de progresso da música. Atualmente em ${formatTime(
            currentTime
          )} de ${currentTrack.duration}`}
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duração total: ${currentTrack.duration}`}
        >
          {currentTrack.duration}
        </Text>
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controls} accessibilityRole="toolbar">
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePrevious}
          accessibilityLabel="Voltar para a música anterior"
          accessibilityRole="button"
        >
          <Text style={styles.controlText}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.mainControl]}
          onPress={handlePlayPause}
          accessibilityLabel={isPlaying ? "Pausar música" : "Reproduzir música"}
          accessibilityRole="button"
        >
          <Text style={[styles.controlText, styles.mainControlText]}>
            {isPlaying ? "⏸" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleNext}
          accessibilityLabel="Avançar para a próxima música"
          accessibilityRole="button"
        >
          <Text style={styles.controlText}>⏭</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist} accessibilityRole="list">
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Playlist
        </Text>
        {playlist.map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[
              styles.playlistItem,
              index === currentTrackIndex && styles.currentPlaylistItem,
            ]}
            onPress={() => {
              setCurrentTrackIndex(index);
              setCurrentTime(0);
              setIsPlaying(true);
            }}
            accessibilityLabel={`Música: ${track.title}, Artista: ${
              track.artist
            }. ${index + 1} de ${playlist.length}`}
            accessibilityRole="button"
          >
            <Text style={styles.playlistTrackText}>{track.title}</Text>
            <Text style={styles.playlistArtistText}>{track.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  trackInfo: {
    alignItems: "center",
    marginBottom: 24,
  },
  cover: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  trackArtist: {
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
  },
  trackAlbum: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
  },
  timeText: {
    fontSize: 14,
    color: "#000000",
    minWidth: 48,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 24,
    backgroundColor: "#EEEEEE",
  },
  mainControl: {
    minWidth: 64,
    minHeight: 64,
    marginHorizontal: 24,
    backgroundColor: "#000000",
  },
  controlText: {
    fontSize: 24,
    color: "#000000",
  },
  mainControlText: {
    color: "#FFFFFF",
  },
  playlist: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    minHeight: 48,
  },
  currentPlaylistItem: {
    backgroundColor: "#F0F0F0",
  },
  playlistTrackText: {
    fontSize: 16,
    color: "#000000",
  },
  playlistArtistText: {
    fontSize: 14,
    color: "#333333",
  },
});

export default MusicPlayer;
