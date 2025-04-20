import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(200); // example duration of song in seconds
  const [currentSong, setCurrentSong] = useState({
    title: "Song Title",
    artist: "Artist Name",
  });

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    setCurrentTime((prevTime) => Math.min(prevTime + 10, duration));
  };

  const rewind = () => {
    setCurrentTime((prevTime) => Math.max(prevTime - 10, 0));
  };

  return (
    <View style={styles.container}>
      {/* Song Title and Artist */}
      <View style={styles.infoContainer}>
        <Text
          style={styles.songTitle}
          accessibilityRole="header"
          accessibilityLabel="Current song title"
        >
          {currentSong.title}
        </Text>
        <Text
          style={styles.artist}
          accessibilityRole="header"
          accessibilityLabel="Artist name"
        >
          {currentSong.artist}
        </Text>
      </View>

      {/* Playback controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={rewind}
          style={styles.button}
          accessible={true}
          accessibilityLabel="Rewind 10 seconds"
          accessibilityRole="button"
        >
          <FontAwesome name="backward" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={togglePlayPause}
          style={[styles.button, styles.playPauseButton]}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <FontAwesome
            name={isPlaying ? "pause" : "play"}
            size={40}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={skipForward}
          style={styles.button}
          accessible={true}
          accessibilityLabel="Skip forward 10 seconds"
          accessibilityRole="button"
        >
          <FontAwesome name="forward" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>
          {Math.floor(currentTime / 60)}:
          {String(currentTime % 60).padStart(2, "0")}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={setCurrentTime}
          thumbTintColor="#4CAF50"
          minimumTrackTintColor="#4CAF50"
          maximumTrackTintColor="#D3D3D3"
          accessible={true}
          accessibilityLabel="Song progress"
        />
        <Text style={styles.timeText}>
          {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, "0")}
        </Text>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text
          style={styles.playlistHeader}
          accessibilityRole="header"
          accessibilityLabel="Playlist"
        >
          Playlist:
        </Text>
        <Text
          style={styles.playlistItem}
          accessible={true}
          accessibilityLabel="Next Song"
        >
          Next Song Title
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  artist: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    padding: 15,
  },
  playPauseButton: {
    paddingHorizontal: 30,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  progressBar: {
    width: 200,
    marginHorizontal: 10,
  },
  timeText: {
    color: "#fff",
    fontSize: 14,
  },
  playlistContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  playlistHeader: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  playlistItem: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
});

export default MusicPlayerScreen;
