import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MusicPlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Informações da Música Atual */}
      <View style={styles.musicInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Substitua pelo caminho da sua imagem
          style={styles.albumCover}
          accessibilityLabel="Capa do álbum da música atual"
        />
        <View style={styles.textContainer}>
          <Text
            style={styles.title}
            accessibilityLabel="Título da música: Bohemian Rhapsody"
          >
            Bohemian Rhapsody
          </Text>
          <Text style={styles.artist} accessibilityLabel="Artista: Queen">
            Queen
          </Text>
        </View>
      </View>

      {/* Barra de Progresso */}
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={100}
        value={50} // Valor de exemplo
        accessibilityLabel="Progresso da reprodução da música"
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      {/* Controles de Reprodução */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Retroceder 10 segundos"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Substitua pelo caminho do seu ícone
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playButton}
          accessibilityLabel="Reproduzir ou pausar a música"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Substitua pelo caminho do seu ícone
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Avançar 10 segundos"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Substitua pelo caminho do seu ícone
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist}>
        <Text style={styles.playlistTitle} accessibilityLabel="Playlist">
          Playlist
        </Text>
        {/* Adicione aqui a lista de músicas da playlist */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Contraste adequado
    padding: 20,
  },
  musicInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  albumCover: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF", // Contraste adequado
    fontSize: 18,
    fontWeight: "bold",
  },
  artist: {
    color: "#CCCCCC", // Contraste adequado
    fontSize: 16,
  },
  progressBar: {
    height: 40,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  controlButton: {
    minWidth: 48, // Tamanho mínimo para toque
    minHeight: 48, // Tamanho mínimo para toque
    padding: 8, // Espaçamento adicional
  },
  playButton: {
    minWidth: 64, // Tamanho mínimo para toque
    minHeight: 64, // Tamanho mínimo para toque
    padding: 12, // Espaçamento adicional
  },
  controlIcon: {
    width: 32,
    height: 32,
  },
  playlist: {
    flex: 1,
  },
  playlistTitle: {
    color: "#FFFFFF", // Contraste adequado
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MusicPlayerScreen;
