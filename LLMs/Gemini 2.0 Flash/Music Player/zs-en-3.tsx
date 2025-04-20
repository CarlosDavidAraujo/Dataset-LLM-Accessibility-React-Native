import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  AccessibilityInfo,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Or any icon library
import Slider from "@react-native-community/slider";

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const playlist = [
    {
      id: "1",
      title: "Song 1",
      artist: "Artist 1",
      artwork: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Song 2",
      artist: "Artist 2",
      artwork: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      title: "Song 3",
      artist: "Artist 3",
      artwork: "https://via.placeholder.com/150",
    },
    // ... more tracks
  ];

  const currentTrack = playlist[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (Platform.OS === "ios" || Platform.OS === "android") {
      const announcement = isPlaying ? "Paused" : "Playing";
      AccessibilityInfo.announceForAccessibility(announcement);
    }
  };

  const skipForward = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
      if (Platform.OS === "ios" || Platform.OS === "android") {
        AccessibilityInfo.announceForAccessibility("Skipped forward");
      }
    }
  };

  const rewind = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
      if (Platform.OS === "ios" || Platform.OS === "android") {
        AccessibilityInfo.announceForAccessibility("Rewinded");
      }
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      accessible={true}
      accessibilityLabel={`${item.title} by ${item.artist}`}
    >
      <Text style={styles.listItemText}>{item.title}</Text>
      <Text style={styles.listItemSubText}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.artworkContainer}>
        <Image source={{ uri: currentTrack.artwork }} style={styles.artwork} />
      </View>
      <View style={styles.trackInfo}>
        <Text
          style={styles.title}
          accessible={true}
          accessibilityLabel={`Song Title: ${currentTrack.title}`}
        >
          {currentTrack.title}
        </Text>
        <Text
          style={styles.artist}
          accessible={true}
          accessibilityLabel={`Artist: ${currentTrack.artist}`}
        >
          {currentTrack.artist}
        </Text>
      </View>

      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={100}
        value={progress}
        onValueChange={setProgress}
        accessibilityRole="adjustable"
        accessibilityLabel="Playback progress"
        accessibilityHint="Use slider to adjust song playback"
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={rewind}
          accessible={true}
          accessibilityLabel="Rewind"
        >
          <Ionicons name="play" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={togglePlay}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={48}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipForward}
          accessible={true}
          accessibilityLabel="Skip Forward"
        >
          <Ionicons name="play-forward" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={playlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.playlist}
        accessible={true}
        accessibilityLabel="Playlist"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  artworkContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  artwork: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 8,
  },
  trackInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    color: "gray",
  },
  progressBar: {
    width: "100%",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  playlist: {
    flex: 1,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  listItemText: {
    fontSize: 18,
    color: "white",
  },
  listItemSubText: {
    fontSize: 14,
    color: "gray",
  },
});

export default MusicPlayer;
