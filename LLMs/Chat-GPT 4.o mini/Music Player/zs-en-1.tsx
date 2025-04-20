import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState("Song 1");
  const [playlist, setPlaylist] = useState([
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4",
    "Song 5",
  ]);
  const [progress, setProgress] = useState(0);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForwardHandler = () => {
    const currentIndex = playlist.indexOf(currentSong);
    const nextSong = playlist[(currentIndex + 1) % playlist.length];
    setCurrentSong(nextSong);
  };

  const rewindHandler = () => {
    const currentIndex = playlist.indexOf(currentSong);
    const prevSong =
      playlist[(currentIndex - 1 + playlist.length) % playlist.length];
    setCurrentSong(prevSong);
  };

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Current Song Info */}
      <Text
        style={styles.songTitle}
        accessible={true}
        accessibilityLabel="Current song"
        accessibilityRole="header"
      >
        Now Playing: {currentSong}
      </Text>

      {/* Playback Controls */}
      <View style={styles.controlsContainer}>
        {/* Rewind Button */}
        <TouchableOpacity
          onPress={rewindHandler}
          style={styles.button}
          accessible={true}
          accessibilityLabel="Rewind"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>⏪</Text>
        </TouchableOpacity>

        {/* Play/Pause Button */}
        <TouchableOpacity
          onPress={playPauseHandler}
          style={styles.button}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>{isPlaying ? "⏸" : "▶️"}</Text>
        </TouchableOpacity>

        {/* Skip Forward Button */}
        <TouchableOpacity
          onPress={skipForwardHandler}
          style={styles.button}
          accessible={true}
          accessibilityLabel="Skip Forward"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Slider
          style={styles.slider}
          value={progress}
          minimumValue={0}
          maximumValue={100}
          onValueChange={handleSliderChange}
          accessible={true}
          accessibilityLabel="Progress slider"
          accessibilityRole="adjustable"
        />
      </View>

      {/* Playlist */}
      <Text style={styles.playlistHeader}>Playlist</Text>
      <View style={styles.playlist}>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playlistItem}
            onPress={() => setCurrentSong(song)}
            accessible={true}
            accessibilityLabel={`Play ${song}`}
            accessibilityRole="button"
          >
            <Text style={styles.playlistText}>{song}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: "#007BFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    minHeight: 50,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
  },
  playlistHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  playlist: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  playlistItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  playlistText: {
    fontSize: 16,
    color: "#333",
  },
});

export default MusicPlayerScreen;
