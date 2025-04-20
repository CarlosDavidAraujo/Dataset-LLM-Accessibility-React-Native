import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(30); // Progress in percentage

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForwardHandler = () => {
    setCurrentProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const rewindHandler = () => {
    setCurrentProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };

  return (
    <View style={styles.container}>
      {/* Song Title and Artist */}
      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>Song Title</Text>
        <Text style={styles.artistName}>Artist Name</Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={rewindHandler}
          accessibilityLabel="Rewind the song"
        >
          <Text style={styles.buttonText}>Rewind</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={playPauseHandler}
          accessibilityLabel={isPlaying ? "Pause the music" : "Play the music"}
        >
          <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={skipForwardHandler}
          accessibilityLabel="Skip to the next song"
        >
          <Text style={styles.buttonText}>Skip Forward</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <ProgressBar
        style={styles.progressBar}
        progress={currentProgress / 100}
        indeterminate={false}
        accessibilityLabel="Current song progress"
        accessibilityValue={{ min: 0, max: 100, now: currentProgress }}
      />

      {/* Playlist Section */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Go to Song 1"
        >
          <Text style={styles.playlistItemText}>Song 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Go to Song 2"
        >
          <Text style={styles.playlistItemText}>Song 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Go to Song 3"
        >
          <Text style={styles.playlistItemText}>Song 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  songInfoContainer: {
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    color: "#000000", // Black text for good contrast
    fontWeight: "bold",
  },
  artistName: {
    fontSize: 18,
    color: "#333333", // Dark grey text for better contrast and readability
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 24,
  },
  buttonText: {
    color: "#FFFFFF", // White text for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBar: {
    width: "80%",
    height: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    marginBottom: 20,
  },
  playlistContainer: {
    width: "100%",
    marginTop: 30,
  },
  playlistTitle: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  playlistItem: {
    padding: 10,
    backgroundColor: "#F1F1F1",
    marginBottom: 10,
    borderRadius: 5,
  },
  playlistItemText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default MusicPlayerScreen;
