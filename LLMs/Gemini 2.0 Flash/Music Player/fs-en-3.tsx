import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MusicPlayerScreen = () => {
  const song = {
    title: "Awesome Song",
    artist: "Great Artist",
    artwork: "https://via.placeholder.com/150", // Replace with your image path
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: song.artwork }}
        style={styles.artwork}
        accessibilityLabel="Album artwork for Awesome Song by Great Artist"
      />
      <View style={styles.songInfo}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>

      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={100}
        value={50} // Example value
        accessibilityLabel="Song progress"
        accessibilityHint="Adjust to change song playback position"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Rewind 10 seconds"
        >
          <Text style={styles.controlText}>{"<<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} accessibilityLabel="Play">
          <Text style={styles.playText}>▶️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Skip forward 10 seconds"
        >
          <Text style={styles.controlText}>{">>"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.playlist}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Song 1 in playlist"
        >
          <Text>Song 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Song 2 in playlist"
        >
          <Text>Song 2</Text>
        </TouchableOpacity>
        {/* Add more playlist items */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212", // Dark background for good contrast
  },
  artwork: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF", // White text for good contrast
  },
  artist: {
    fontSize: 16,
    color: "#B3B3B3", // Lighter text for good contrast
  },
  progressBar: {
    width: "100%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  playButton: {
    minWidth: 60,
    minHeight: 60,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  controlText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  playText: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  playlist: {
    marginTop: 20,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  playlistItem: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default MusicPlayerScreen;
