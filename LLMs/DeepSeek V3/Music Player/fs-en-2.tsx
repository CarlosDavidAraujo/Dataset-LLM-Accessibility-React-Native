import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(30);
  const [duration, setDuration] = React.useState(180);

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Music player screen"
    >
      {/* Album Art Placeholder */}
      <View
        style={styles.albumArtPlaceholder}
        accessibilityLabel="Album cover placeholder"
      >
        <Text style={styles.placeholderText}>🎵</Text>
      </View>

      {/* Song Info */}
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} accessibilityRole="header">
          Current Song
        </Text>
        <Text style={styles.artistName} accessibilityRole="text">
          Artist Name
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text
          style={styles.timeText}
          accessibilityLabel={`${Math.floor(currentTime / 60)} minutes and ${
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
          minimumTrackTintColor="#1DB954" // Spotify green
          maximumTrackTintColor="#535353"
          thumbTintColor="#FFFFFF"
          accessibilityLabel="Song progress"
          accessibilityHint="Drag to seek through the song"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`${Math.floor(duration / 60)} minutes and ${
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
          accessibilityLabel="Previous song"
          accessibilityHint="Plays the previous song in the playlist"
        >
          <Text style={styles.controlIcon}>⏮</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.mainControlButton]}
          onPress={() => setIsPlaying(!isPlaying)}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint={
            isPlaying ? "Pauses the current song" : "Plays the current song"
          }
        >
          <Text style={styles.mainControlIcon}>{isPlaying ? "⏸" : "⏵"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Next song"
          accessibilityHint="Plays the next song in the playlist"
        >
          <Text style={styles.controlIcon}>⏭</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlist}>
        <Text style={styles.playlistHeader} accessibilityRole="header">
          Playlist
        </Text>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={styles.playlistItem}
            accessibilityLabel={`Song ${index + 1}: ${song.title} by ${
              song.artist
            }`}
            accessibilityHint="Double tap to play this song"
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
    backgroundColor: "#121212", // Dark background for better contrast
    padding: 16,
  },
  albumArtPlaceholder: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: "#535353",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 100,
    color: "#B3B3B3",
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  artistName: {
    color: "#B3B3B3",
    fontSize: 18,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 14,
    minWidth: 40,
    textAlign: "center",
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 10,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  mainControlButton: {
    backgroundColor: "#1DB954",
    borderRadius: 24,
  },
  controlIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  mainControlIcon: {
    fontSize: 32,
    color: "#FFFFFF",
  },
  playlist: {
    marginTop: 20,
  },
  playlistHeader: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#535353",
  },
  playlistSongTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  playlistArtist: {
    color: "#B3B3B3",
    fontSize: 14,
  },
});

const playlist = [
  { id: 1, title: "Current Song", artist: "Artist Name" },
  { id: 2, title: "Next Track", artist: "Other Artist" },
  { id: 3, title: "Popular Hit", artist: "Famous Band" },
];

export default MusicPlayerScreen;
