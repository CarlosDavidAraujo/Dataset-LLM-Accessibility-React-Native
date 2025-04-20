import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  AccessibilityInfo,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Sample playlist data
  const playlist = [
    {
      id: 1,
      title: "Song Title One",
      artist: "Artist Name",
      album: "Album Name",
      duration: "3:00",
      coverArt: "https://example.com/cover1.jpg",
    },
    {
      id: 2,
      title: "Song Title Two",
      artist: "Artist Name",
      album: "Album Name",
      duration: "3:30",
      coverArt: "https://example.com/cover2.jpg",
    },
    {
      id: 3,
      title: "Song Title Three",
      artist: "Artist Name",
      album: "Album Name",
      duration: "4:15",
      coverArt: "https://example.com/cover3.jpg",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // Announce playback state change for screen readers
    AccessibilityInfo.announceForAccessibility(
      isPlaying ? "Paused" : "Playing"
    );
  };

  const skipForward = () => {
    const newIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(newIndex);
    setCurrentTime(0);
    // Announce track change for screen readers
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[newIndex].title}`
    );
  };

  const skipBackward = () => {
    const newIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(newIndex);
    setCurrentTime(0);
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[newIndex].title}`
    );
  };

  const seekToTime = (value) => {
    setCurrentTime(value);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[index].title}`
    );
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Current Track Info */}
      <View
        style={styles.trackInfoContainer}
        accessibilityLabel={`Now playing: ${currentTrack.title} by ${currentTrack.artist} from album ${currentTrack.album}`}
      >
        <Image
          source={{ uri: currentTrack.coverArt }}
          style={styles.coverArt}
          accessibilityLabel={`Album art for ${currentTrack.album}`}
        />
        <Text style={styles.trackTitle} accessibilityRole="header">
          {currentTrack.title}
        </Text>
        <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
        <Text style={styles.trackAlbum}>{currentTrack.album}</Text>
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
          maximumValue={duration}
          value={currentTime}
          onValueChange={seekToTime}
          minimumTrackTintColor="#1DB954" // High contrast color
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Track progress"
          accessibilityHint="Drag to seek through the track"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duration: ${formatTime(duration)}`}
        >
          {formatTime(duration)}
        </Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipBackward}
          accessibilityLabel="Previous track"
          accessibilityHint="Double tap to play the previous track"
          accessibilityRole="button"
        >
          <Ionicons name="play-skip-back" size={32} color="#000000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton]}
          onPress={togglePlayback}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint="Double tap to play or pause the current track"
          accessibilityRole="button"
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={40}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipForward}
          accessibilityLabel="Next track"
          accessibilityHint="Double tap to play the next track"
          accessibilityRole="button"
        >
          <Ionicons name="play-skip-forward" size={32} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <Text style={styles.sectionHeader} accessibilityRole="header">
        Playlist
      </Text>
      <ScrollView style={styles.playlistContainer}>
        {playlist.map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[
              styles.playlistItem,
              index === currentTrackIndex && styles.currentPlaylistItem,
            ]}
            onPress={() => selectTrack(index)}
            accessibilityLabel={`${track.title} by ${track.artist}, ${track.duration}`}
            accessibilityHint="Double tap to play this track"
            accessibilityRole="button"
            accessibilityState={{ selected: index === currentTrackIndex }}
          >
            <Image
              source={{ uri: track.coverArt }}
              style={styles.playlistCoverArt}
              accessibilityIgnoresInvertColors={true}
            />
            <View style={styles.playlistTextContainer}>
              <Text style={styles.playlistTrackTitle}>{track.title}</Text>
              <Text style={styles.playlistTrackArtist}>{track.artist}</Text>
            </View>
            <Text style={styles.playlistTrackDuration}>{track.duration}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");
const MIN_TOUCH_SIZE = 48; // Minimum recommended touch target size

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  trackInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  coverArt: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 8,
    marginBottom: 16,
  },
  trackTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000", // High contrast
    marginBottom: 4,
    textAlign: "center",
  },
  trackArtist: {
    fontSize: 18,
    color: "#333333", // Sufficient contrast (>4.5:1 on white)
    marginBottom: 2,
    textAlign: "center",
  },
  trackAlbum: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 8,
    height: 40, // Larger for better touch target
  },
  timeText: {
    fontSize: 16,
    color: "#000000", // High contrast
    minWidth: 48, // Ensure consistent width
    textAlign: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    width: MIN_TOUCH_SIZE,
    height: MIN_TOUCH_SIZE,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  playButton: {
    backgroundColor: "#1DB954", // Spotify green
    borderRadius: MIN_TOUCH_SIZE / 2,
    width: MIN_TOUCH_SIZE * 1.5,
    height: MIN_TOUCH_SIZE * 1.5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },
  playlistContainer: {
    flex: 1,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    minHeight: MIN_TOUCH_SIZE, // Ensure minimum touch target height
  },
  currentPlaylistItem: {
    backgroundColor: "#E0F8E9",
  },
  playlistCoverArt: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  playlistTextContainer: {
    flex: 1,
  },
  playlistTrackTitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 2,
  },
  playlistTrackArtist: {
    fontSize: 14,
    color: "#333333",
  },
  playlistTrackDuration: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 8,
  },
});

export default MusicPlayerScreen;
