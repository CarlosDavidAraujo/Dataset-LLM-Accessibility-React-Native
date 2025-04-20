import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MusicPlayer = () => {
  // Estado do player
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Dados da playlist
  const [songs] = useState([
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
      duration: "5:55",
      currentTime: "0:00",
    },
    {
      id: 2,
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Imagine_cover.jpg",
      duration: "3:04",
      currentTime: "0:00",
    },
    {
      id: 3,
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
      duration: "4:54",
      currentTime: "0:00",
    },
  ]);

  const currentSong = songs[currentSongIndex];

  // Simulação do progresso da música
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          // Atualiza o tempo formatado na música atual
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          songs[currentSongIndex].currentTime = `${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSongIndex]);

  // Funções de controle
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setCurrentTime(0);
    if (!isPlaying) setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setCurrentTime(0);
    if (!isPlaying) setIsPlaying(true);
  };

  const handleSeek = (value) => {
    setCurrentTime(value);
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    songs[currentSongIndex].currentTime = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleSelectSong = (index) => {
    setCurrentSongIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Reprodutor de música"
    >
      {/* Área de informações da música atual */}
      <View style={styles.songInfo}>
        <Image
          source={{ uri: currentSong.cover }}
          style={styles.albumCover}
          accessibilityLabel={`Capa do álbum ${currentSong.album}`}
        />
        <View style={styles.textInfo}>
          <Text style={styles.songTitle} accessibilityRole="header">
            {currentSong.title}
          </Text>
          <Text style={styles.songArtist}>{currentSong.artist}</Text>
          <Text style={styles.songAlbum}>{currentSong.album}</Text>
        </View>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`Tempo atual: ${currentSong.currentTime}`}
        >
          {currentSong.currentTime}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={354} // 5:54 em segundos para a primeira música
          value={currentTime}
          onValueChange={handleSeek}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#666666"
          thumbTintColor="#000000"
          accessibilityLabel="Barra de progresso da música"
          accessibilityHint="Deslize para avançar ou retroceder na música"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duração total: ${currentSong.duration}`}
        >
          {currentSong.duration}
        </Text>
      </View>

      {/* Controles de reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePrevious}
          accessibilityLabel="Música anterior"
          accessibilityHint="Toca a música anterior na playlist"
        >
          <Text style={styles.controlText}>&#x23EE;</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.mainControl]}
          onPress={handlePlayPause}
          accessibilityLabel={isPlaying ? "Pausar" : "Tocar"}
          accessibilityHint={
            isPlaying ? "Pausa a reprodução" : "Inicia a reprodução"
          }
        >
          <Text style={[styles.controlText, styles.mainControlText]}>
            {isPlaying ? "❚❚" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleNext}
          accessibilityLabel="Próxima música"
          accessibilityHint="Toca a próxima música na playlist"
        >
          <Text style={styles.controlText}>&#x23ED;</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist} accessibilityLabel="Playlist">
        <Text style={styles.playlistTitle}>Playlist</Text>
        {songs.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={[
              styles.playlistItem,
              currentSongIndex === index && styles.currentPlaylistItem,
            ]}
            onPress={() => handleSelectSong(index)}
            accessibilityLabel={`Música: ${song.title}, Artista: ${song.artist}`}
            accessibilityHint="Selecione para tocar esta música"
          >
            <Text style={styles.playlistText}>{song.title}</Text>
            <Text style={styles.playlistSubText}>{song.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Estilos permanecem os mesmos do exemplo anterior
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  songInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  albumCover: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  textInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 4,
  },
  songAlbum: {
    fontSize: 16,
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
    fontSize: 14,
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
    marginHorizontal: 8,
  },
  mainControl: {
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
    marginBottom: 12,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  currentPlaylistItem: {
    backgroundColor: "#00000010",
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
