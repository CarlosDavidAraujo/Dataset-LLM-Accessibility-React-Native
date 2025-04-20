import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const MusicPlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Song Title and Artist */}
      <Text style={styles.songTitle} accessibilityRole="header">
        Song Title - Artist Name
      </Text>

      {/* Playback Controls */}
      <View style={styles.controls}>
        {/* Rewind Button */}
        <TouchableOpacity
          style={styles.touchable}
          accessibilityLabel="Rewind 15 seconds"
          onPress={() => console.log("Rewind pressed")}
        >
          <Text style={styles.icon}>⏪</Text>
        </TouchableOpacity>

        {/* Play/Pause Button */}
        <TouchableOpacity
          style={styles.touchable}
          accessibilityLabel="Play/Pause"
          onPress={() => console.log("Play/Pause pressed")}
        >
          <Text style={styles.icon}>⏯</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity
          style={styles.touchable}
          accessibilityLabel="Skip forward 15 seconds"
          onPress={() => console.log("Skip pressed")}
        >
          <Text style={styles.icon}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <Text style={styles.label}>Progress</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={50}
        accessibilityLabel="Song progress"
        onValueChange={(value) => console.log("Progress changed", value)}
      />

      {/* Playlist */}
      <Text style={styles.playlistHeader}>Playlist</Text>
      <View style={styles.playlist}>
        <Text style={styles.playlistItem} accessibilityLabel="Song 1">
          🎵 Song 1
        </Text>
        <Text style={styles.playlistItem} accessibilityLabel="Song 2">
          🎵 Song 2
        </Text>
        <Text style={styles.playlistItem} accessibilityLabel="Song 3">
          🎵 Song 3
        </Text>
      </View>

      {/* Play/Pause Button with Accessibility Label */}
      <Button
        title="Play/Pause"
        onPress={() => console.log("Play/Pause pressed")}
        accessibilityLabel="Play or pause the song"
        color="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  songTitle: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  touchable: {
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#000",
  },
  slider: {
    width: "100%",
    marginBottom: 20,
  },
  playlistHeader: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
  },
  playlist: {
    marginBottom: 20,
  },
  playlistItem: {
    fontSize: 16,
    color: "#000000",
    padding: 8,
  },
  label: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 10,
  },
});

export default MusicPlayerScreen;
