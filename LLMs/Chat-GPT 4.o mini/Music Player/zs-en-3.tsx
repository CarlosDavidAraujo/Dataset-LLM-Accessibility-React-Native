import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
} from "react-native";
import { ProgressBar } from "react-native-paper";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playlist = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" },
  ];

  const currentSong = playlist[currentSongIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setProgress(0);
    }
  };

  const skipRewind = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setProgress(0);
    }
  };

  const onProgressChange = (event) => {
    setProgress(event.nativeEvent.progress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      <ProgressBar
        style={styles.progressBar}
        progress={progress}
        indeterminate={false}
        accessibilityLabel="Song progress"
        accessible={true}
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={skipRewind}
          accessibilityLabel="Rewind"
          accessible={true}
        >
          <Text style={styles.buttonText}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={togglePlayPause}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessible={true}
        >
          <Text style={styles.buttonText}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={skipForward}
          accessibilityLabel="Skip forward"
          accessible={true}
        >
          <Text style={styles.buttonText}>⏩</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.playlistContainer}>
        <Text style={styles.playlistTitle}>Playlist</Text>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playlistItem}
            onPress={() => setCurrentSongIndex(index)}
            accessibilityLabel={`Play ${song.title}`}
            accessible={true}
          >
            <Text style={styles.playlistItemText}>
              {song.title} - {song.artist}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  artist: {
    fontSize: 18,
    color: "#666",
  },
  progressBar: {
    width: "100%",
    height: 10,
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  playlistContainer: {
    width: "100%",
    marginTop: 20,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  playlistItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  playlistItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default MusicPlayerScreen;
