import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  AccessibilityInfo,
  Platform,
} from "react-native";
import Slider from "@react-native-community/slider";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Sample playlist data
  const playlist = [
    {
      id: "1",
      title: "Song Title One",
      artist: "Artist Name",
      album: "Album Name",
      coverArt: "https://example.com/cover1.jpg",
      duration: 180,
    },
    {
      id: "2",
      title: "Song Title Two",
      artist: "Artist Name",
      album: "Album Name",
      coverArt: "https://example.com/cover2.jpg",
      duration: 210,
    },
    // More tracks...
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Announce state change for screen readers
    if (Platform.OS === "ios") {
      AccessibilityInfo.announceForAccessibility(
        isPlaying ? "Paused" : "Playing"
      );
    }
  };

  const handleSkipForward = () => {
    // Skip forward 15 seconds
    const newTime = Math.min(currentTime + 15, duration);
    setCurrentTime(newTime);
  };

  const handleSkipBackward = () => {
    // Skip backward 15 seconds
    const newTime = Math.max(currentTime - 15, 0);
    setCurrentTime(newTime);
  };

  const handleTrackChange = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSliderValueChange = (value) => {
    setCurrentTime(value);
  };

  const currentTrack = playlist[currentTrackIndex];

  return (
    <View style={styles.container} accessible={true}>
      {/* Current Track Info */}
      <View style={styles.trackInfoContainer} accessibilityRole="summary">
        <Image
          source={{ uri: currentTrack.coverArt }}
          style={styles.coverArt}
          accessible={true}
          accessibilityLabel={`Album cover for ${currentTrack.album}`}
        />
        <View style={styles.textInfo}>
          <Text
            style={styles.songTitle}
            accessibilityRole="header"
            accessibilityLabel={`Now playing: ${currentTrack.title}`}
          >
            {currentTrack.title}
          </Text>
          <Text
            style={styles.artistName}
            accessibilityLabel={`By ${currentTrack.artist}`}
          >
            {currentTrack.artist}
          </Text>
          <Text
            style={styles.albumName}
            accessibilityLabel={`From the album ${currentTrack.album}`}
          >
            {currentTrack.album}
          </Text>
        </View>
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
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={handleSliderValueChange}
          minimumTrackTintColor="#1DB954" // Spotify green for sufficient contrast
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#1DB954"
          accessibilityLabel="Track progress"
          accessibilityHint="Drag to scrub through the track"
          accessibilityRole="adjustable"
        />
        <Text
          style={styles.timeText}
          accessibilityLabel={`Duration: ${formatTime(duration)}`}
        >
          {formatTime(duration)}
        </Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer} accessibilityRole="toolbar">
        <TouchableOpacity
          onPress={handleSkipBackward}
          style={styles.controlButton}
          accessible={true}
          accessibilityLabel="Rewind 15 seconds"
          accessibilityHint="Double tap to rewind the track"
          accessibilityRole="button"
        >
          <Text style={styles.controlIcon}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePlayPause}
          style={[styles.controlButton, styles.mainControl]}
          accessible={true}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <Text style={styles.controlIcon}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSkipForward}
          style={styles.controlButton}
          accessible={true}
          accessibilityLabel="Skip forward 15 seconds"
          accessibilityHint="Double tap to skip forward in the track"
          accessibilityRole="button"
        >
          <Text style={styles.controlIcon}>⏩</Text>
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
            onPress={() => handleTrackChange(index)}
            accessible={true}
            accessibilityLabel={`${track.title} by ${track.artist}`}
            accessibilityHint="Double tap to play this track"
            accessibilityRole="button"
            accessibilityState={{ selected: index === currentTrackIndex }}
          >
            <Image
              source={{ uri: track.coverArt }}
              style={styles.playlistCoverArt}
              accessible={true}
              accessibilityLabel={`Album cover for ${track.album}`}
            />
            <View style={styles.playlistText}>
              <Text style={styles.playlistTitle}>{track.title}</Text>
              <Text style={styles.playlistArtist}>{track.artist}</Text>
            </View>
            <Text style={styles.playlistDuration}>
              {formatTime(track.duration)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  trackInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  coverArt: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  textInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000", // High contrast black
    marginBottom: 4,
  },
  artistName: {
    fontSize: 18,
    color: "#333333", // Dark gray for sufficient contrast
    marginBottom: 4,
  },
  albumName: {
    fontSize: 16,
    color: "#555555", // Medium gray
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
  },
  timeText: {
    fontSize: 14,
    color: "#000000",
    width: 50,
    textAlign: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  controlButton: {
    padding: 16,
    borderRadius: 40,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 8,
    minWidth: 60,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  mainControl: {
    backgroundColor: "#1DB954", // Spotify green
    minWidth: 80,
    minHeight: 80,
  },
  controlIcon: {
    fontSize: 24,
    color: "#000000",
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
    minHeight: 60, // Minimum touch target size
  },
  currentPlaylistItem: {
    backgroundColor: "#E8F5E9", // Light green background for current track
  },
  playlistCoverArt: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 12,
  },
  playlistText: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 2,
  },
  playlistArtist: {
    fontSize: 14,
    color: "#333333",
  },
  playlistDuration: {
    fontSize: 14,
    color: "#555555",
  },
});

export default MusicPlayerScreen;
