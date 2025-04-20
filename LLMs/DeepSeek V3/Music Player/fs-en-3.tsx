import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(30);
  const [duration, setDuration] = React.useState(180);

  // Mock playlist data
  const playlist = [
    { id: 1, title: "Current Song", artist: "Artist Name" },
    { id: 2, title: "Next Song", artist: "Another Artist" },
    { id: 3, title: "Future Hit", artist: "Popular Band" },
  ];

  return (
    <View style={styles.container} accessible={true}>
      {/* Current Song Info */}
      <View style={styles.songInfo}>
        {/* Album art placeholder */}
        <View
          style={styles.albumArtPlaceholder}
          accessibilityLabel="Album cover placeholder"
        >
          <Text style={styles.placeholderText}>🎵</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.songTitle} accessibilityRole="header">
            Current Song
          </Text>
          <Text style={styles.artistName}>Artist Name</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`${Math.floor(currentTime / 60)} minutes ${
            currentTime % 60
          } seconds played`}
        >
          {formatTime(currentTime)}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          minimumTrackTintColor="#1DB954" // High contrast green
          maximumTrackTintColor="#535353" // Dark gray
          thumbTintColor="#FFFFFF" // White thumb for contrast
          accessibilityLabel="Song progress"
          accessibilityHint="Drag to seek through the song"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`${Math.floor(duration / 60)} minutes ${
            duration % 60
          } seconds remaining`}
        >
          {formatTime(duration)}
        </Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {}}
          accessibilityLabel="Rewind 15 seconds"
          accessibilityRole="button"
        >
          <Text style={styles.iconText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.mainControl]}
          onPress={() => setIsPlaying(!isPlaying)}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <Text style={styles.mainIconText}>{isPlaying ? "⏸" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {}}
          accessibilityLabel="Skip forward 15 seconds"
          accessibilityRole="button"
        >
          <Text style={styles.iconText}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist}>
        <Text style={styles.playlistHeader} accessibilityRole="header">
          Up Next
        </Text>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={styles.playlistItem}
            onPress={() => {}}
            accessibilityLabel={`Play ${song.title} by ${song.artist}`}
            accessibilityRole="button"
          >
            <Text style={styles.playlistSongTitle}>{song.title}</Text>
            <Text style={styles.playlistArtist}>{song.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background for high contrast
    padding: 16,
  },
  songInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  albumArtPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 50,
  },
  textContainer: {
    marginLeft: 16,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  artistName: {
    fontSize: 18,
    color: "#B3B3B3",
    marginTop: 4,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 40,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
    height: 4,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  mainControl: {
    minWidth: 64,
    minHeight: 64,
    marginHorizontal: 24,
  },
  iconText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  mainIconText: {
    fontSize: 32,
    color: "#FFFFFF",
  },
  playlist: {
    marginTop: 16,
  },
  playlistHeader: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    minHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  playlistSongTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  playlistArtist: {
    color: "#B3B3B3",
    fontSize: 14,
    marginTop: 4,
  },
});

export default MusicPlayerScreen;
