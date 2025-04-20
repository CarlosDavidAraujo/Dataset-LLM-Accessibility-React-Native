import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MusicPlayer = () => {
  // Estado da playlist e música atual
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Bohemian_Rhapsody.png/220px-Bohemian_Rhapsody.png",
      duration: "5:55",
      currentTime: "0:00",
      progress: 0,
      isPlaying: false,
    },
    {
      id: 2,
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Imagine_John_Lennon_album_cover.jpg/220px-Imagine_John_Lennon_album_cover.jpg",
      duration: "3:04",
      currentTime: "0:00",
      progress: 0,
      isPlaying: false,
    },
    {
      id: 3,
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Michael_Jackson_-_Thriller.png/220px-Michael_Jackson_-_Thriller.png",
      duration: "4:54",
      currentTime: "0:00",
      progress: 0,
      isPlaying: false,
    },
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  // Simulação do player de música
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.5;
          // Atualiza o tempo atual formatado
          const totalSeconds = Math.floor(
            (newProgress / 100) *
              convertTimeToSeconds(playlist[currentTrackIndex].duration)
          );
          setCurrentTime(formatTime(totalSeconds));

          // Verifica se a música acabou
          if (newProgress >= 100) {
            handleNext();
            return 0;
          }
          return newProgress;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex]);

  // Funções auxiliares para manipulação de tempo
  const convertTimeToSeconds = (timeStr) => {
    const [minutes, seconds] = timeStr.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Manipuladores de eventos
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setProgress(0);
    setCurrentTime("0:00");
    if (isPlaying) setIsPlaying(true); // Mantém o estado de play se estava tocando
  };

  const handlePrevious = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length
    );
    setProgress(0);
    setCurrentTime("0:00");
    if (isPlaying) setIsPlaying(true);
  };

  const handleSeek = (value) => {
    const newProgress =
      (value / convertTimeToSeconds(playlist[currentTrackIndex].duration)) *
      100;
    setProgress(newProgress);
    setCurrentTime(formatTime(value));
  };

  const handleSelectTrack = (index) => {
    setCurrentTrackIndex(index);
    setProgress(0);
    setCurrentTime("0:00");
    setIsPlaying(true);
  };

  const currentTrack = playlist[currentTrackIndex];

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Reprodutor de música"
    >
      {/* Informações da música atual */}
      <View style={styles.trackInfo}>
        <Image
          source={{ uri: currentTrack.cover }}
          style={styles.cover}
          accessibilityLabel={`Capa do álbum: ${currentTrack.album}`}
        />
        <View style={styles.textInfo}>
          <Text
            style={styles.trackTitle}
            accessibilityLabel={`Música atual: ${currentTrack.title}`}
          >
            {currentTrack.title}
          </Text>
          <Text
            style={styles.trackArtist}
            accessibilityLabel={`Artista: ${currentTrack.artist}`}
          >
            {currentTrack.artist}
          </Text>
          <Text
            style={styles.trackAlbum}
            accessibilityLabel={`Álbum: ${currentTrack.album}`}
          >
            {currentTrack.album}
          </Text>
        </View>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`Tempo decorrido: ${currentTime}`}
        >
          {currentTime}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={convertTimeToSeconds(currentTrack.duration)}
          value={convertTimeToSeconds(currentTime)}
          onValueChange={handleSeek}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#666666"
          thumbTintColor="#000000"
          accessibilityLabel="Barra de progresso da música"
          accessibilityHint="Arraste para avançar ou retroceder na música"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duração total: ${currentTrack.duration}`}
        >
          {currentTrack.duration}
        </Text>
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePrevious}
          accessibilityLabel="Voltar para a música anterior"
          accessibilityHint="Toca a música anterior na playlist"
        >
          <Text style={styles.controlText}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={handlePlayPause}
          accessibilityLabel={isPlaying ? "Pausar" : "Tocar"}
          accessibilityHint={
            isPlaying ? "Pausa a reprodução" : "Inicia a reprodução"
          }
        >
          <Text style={[styles.controlText, styles.playText]}>
            {isPlaying ? "⏸" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleNext}
          accessibilityLabel="Avançar para a próxima música"
          accessibilityHint="Toca a próxima música na playlist"
        >
          <Text style={styles.controlText}>⏭</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist} accessibilityLabel="Lista de músicas">
        <Text style={styles.playlistTitle}>Playlist</Text>
        {playlist.map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[
              styles.playlistItem,
              index === currentTrackIndex && styles.currentPlaylistItem,
            ]}
            onPress={() => handleSelectTrack(index)}
            accessibilityLabel={`Música: ${track.title}, Artista: ${track.artist}`}
            accessibilityHint="Toque duas vezes para selecionar esta música"
          >
            <Text style={styles.playlistText}>{track.title}</Text>
            <Text style={styles.playlistSubText}>{track.artist}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 4,
  },
  trackAlbum: {
    fontSize: 14,
    color: "#555555",
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
    fontSize: 12,
    color: "#000000",
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
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 24,
    backgroundColor: "#EEEEEE",
  },
  playButton: {
    backgroundColor: "#000000",
    marginHorizontal: 20,
    minWidth: 64,
    minHeight: 64,
  },
  controlText: {
    fontSize: 24,
    color: "#000000",
  },
  playText: {
    color: "#FFFFFF",
  },
  playlist: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    minHeight: 48,
  },
  currentPlaylistItem: {
    backgroundColor: "#F0F0F0",
  },
  playlistText: {
    fontSize: 16,
    color: "#000000",
  },
  playlistSubText: {
    fontSize: 14,
    color: "#333333",
  },
});

export default MusicPlayer;
