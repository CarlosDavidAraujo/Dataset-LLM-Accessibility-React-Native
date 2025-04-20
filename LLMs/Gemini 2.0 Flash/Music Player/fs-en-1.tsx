import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.5); // Example progress
  const currentSong = {
    title: "Sample Song",
    artist: "Sample Artist",
    artwork: "https://via.placeholder.com/150", // Replace with actual artwork
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentSong.artwork }}
        style={styles.artwork}
        accessibilityLabel={`Artwork for ${currentSong.title}`}
      />
      <View style={styles.songInfo}>
        <Text style={styles.title} accessibilityRole="header">
          {currentSong.title}
        </Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        onValueChange={setProgress}
        accessibilityLabel="Song Progress"
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Rewind"
          accessibilityHint="Go to previous song"
        >
          <Text style={styles.controlText}>{"<<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playButton}
          onPress={togglePlay}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint={isPlaying ? "Pause the song" : "Play the song"}
        >
          <Text style={styles.playText}>{isPlaying ? "||" : ">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Fast Forward"
          accessibilityHint="Go to next song"
        >
          <Text style={styles.controlText}>{">>"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333", // Dark background for good contrast
    padding: 20,
  },
  artwork: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White text for good contrast
  },
  artist: {
    fontSize: 18,
    color: "#CCCCCC", // Light gray text for good contrast
  },
  progressBar: {
    width: "100%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  playButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    fontSize: 30,
  },
  controlText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  playText: {
    fontSize: 30,
    color: "#FFFFFF",
  },
});

export default MusicPlayer;
