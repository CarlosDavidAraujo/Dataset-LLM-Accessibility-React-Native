import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.5);
  const currentSong = {
    title: "Sample Track",
    artist: "Sample Artist",
    artwork: "https://via.placeholder.com/150", // Replace with your image
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    console.log("Skip Forward");
  };

  const handleRewind = () => {
    console.log("Rewind");
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentSong.artwork }}
        style={styles.artwork}
        accessibilityLabel="Album artwork for the current song"
      />
      <Text style={styles.title} accessibilityLabel="Song title">
        {currentSong.title}
      </Text>
      <Text style={styles.artist} accessibilityLabel="Artist name">
        {currentSong.artist}
      </Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        onValueChange={handleProgressChange}
        accessibilityLabel="Song progress slider"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleRewind}
          accessibilityLabel="Rewind the song"
        >
          <Text style={styles.controlButtonText}>Rewind</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playPauseButton}
          onPress={handlePlayPause}
          accessibilityLabel={isPlaying ? "Pause the song" : "Play the song"}
        >
          <Text style={styles.playPauseButtonText}>
            {isPlaying ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleSkipForward}
          accessibilityLabel="Skip forward in the song"
        >
          <Text style={styles.controlButtonText}>Forward</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.playlist}>
        <Text style={styles.playlistTitle} accessibilityLabel="Playlist">
          Playlist
        </Text>
        {/* Example playlist items (replace with your data) */}
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Playlist item: Song 1"
        >
          <Text style={styles.playlistItemText}>Song 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playlistItem}
          accessibilityLabel="Playlist item: Song 2"
        >
          <Text style={styles.playlistItemText}>Song 2</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // High contrast text
    textAlign: "center",
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    color: "#B3B3B3", // High contrast text
    textAlign: "center",
    marginBottom: 20,
  },
  slider: {
    width: "100%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  playPauseButton: {
    minWidth: 60,
    minHeight: 60,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  controlButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  playPauseButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  playlist: {
    marginTop: 20,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  playlistItem: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
  },
  playlistItemText: {
    color: "#B3B3B3",
    fontSize: 16,
  },
});

export default MusicPlayer;
