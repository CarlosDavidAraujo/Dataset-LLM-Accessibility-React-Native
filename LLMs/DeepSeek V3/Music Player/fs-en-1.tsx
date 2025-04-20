import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Using common icon libraries
import Slider from "@react-native-community/slider";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(30);
  const [totalDuration, setTotalDuration] = React.useState(180);

  return (
    <View style={styles.container} accessible={true}>
      {/* Album Cover Placeholder */}
      <View
        style={styles.albumCoverPlaceholder}
        accessibilityLabel="Album cover placeholder"
      >
        <MaterialIcons name="album" size={80} color="#555" />
      </View>

      {/* Song Info */}
      <View style={styles.songInfoContainer}>
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
          accessibilityLabel={`Current position: ${formatTime(currentTime)}`}
        >
          {formatTime(currentTime)}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={totalDuration}
          value={currentTime}
          onValueChange={setCurrentTime}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Song progress"
          accessibilityHint="Drag to scrub through the song"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Total duration: ${formatTime(totalDuration)}`}
        >
          {formatTime(totalDuration)}
        </Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Previous song"
          accessibilityHint="Double tap to go to previous track"
        >
          <Ionicons name="play-skip-back" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.mainControlButton]}
          onPress={() => setIsPlaying(!isPlaying)}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={36}
            color="#000"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Next song"
          accessibilityHint="Double tap to skip to next track"
        >
          <Ionicons name="play-skip-forward" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle} accessibilityRole="header">
          Up Next
        </Text>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={styles.playlistItem}
            accessibilityLabel={`${song.title} by ${song.artist}`}
            accessibilityHint="Double tap to play this song"
          >
            <Text style={styles.playlistSongText}>{song.title}</Text>
            <Text style={styles.playlistArtistText}>{song.artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const playlist = [
  { id: 1, title: "Current Song", artist: "Artist Name" },
  { id: 2, title: "Next Song", artist: "Artist Name" },
  { id: 3, title: "Third Song", artist: "Another Artist" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  albumCoverPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  songInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  artistName: {
    fontSize: 18,
    color: "#333333",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
  },
  timeText: {
    fontSize: 14,
    color: "#000000",
    minWidth: 40,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  mainControlButton: {
    minWidth: 64,
    minHeight: 64,
    marginHorizontal: 24,
  },
  playlistContainer: {
    marginTop: 16,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  playlistItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  playlistSongText: {
    fontSize: 16,
    color: "#000000",
  },
  playlistArtistText: {
    fontSize: 14,
    color: "#333333",
  },
});

export default MusicPlayerScreen;
