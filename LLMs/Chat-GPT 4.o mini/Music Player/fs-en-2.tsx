import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      {/* Song Title & Artist Information */}
      <Text style={styles.songTitle}>Song Title</Text>
      <Text style={styles.artist}>Artist Name</Text>

      {/* Album Artwork */}
      <Image
        source={{ uri: "https://example.com/album-art.jpg" }}
        style={styles.albumArt}
        accessibilityLabel="Album artwork for Song Title by Artist Name"
      />

      {/* Playback Controls */}
      <View style={styles.controlsContainer}>
        {/* Rewind Button */}
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Rewind 10 seconds"
        >
          <Text style={styles.buttonText}>Rewind</Text>
        </TouchableOpacity>

        {/* Play/Pause Button */}
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Toggle Play/Pause"
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Skip 10 seconds forward"
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Progress:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          accessibilityLabel="Song progress slider"
        />
      </View>

      {/* Playlist Section */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistHeader}>Playlist</Text>
        <Text style={styles.track}>Track 1</Text>
        <Text style={styles.track}>Track 2</Text>
        <Text style={styles.track}>Track 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Black text for high contrast
  },
  artist: {
    fontSize: 18,
    color: "#333333", // Dark gray text for good contrast
  },
  albumArt: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 8,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    minWidth: 60,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF", // A contrasting button color
    borderRadius: 8,
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF", // White text for high contrast
  },
  progressContainer: {
    marginVertical: 20,
  },
  progressLabel: {
    fontSize: 14,
    color: "#000000", // High contrast for progress label
  },
  slider: {
    width: "100%",
    height: 40,
  },
  playlistContainer: {
    marginTop: 30,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // High contrast header
  },
  track: {
    fontSize: 16,
    color: "#333333", // Good contrast for track names
  },
});

export default MusicPlayer;
