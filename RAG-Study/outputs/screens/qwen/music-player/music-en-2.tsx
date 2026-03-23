import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import {
  AccessibilityActionEvent,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock data
const mockPlaylist = [
  { id: "1", title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { id: "2", title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: "3", title: "Imagine", artist: "John Lennon", duration: "3:04" },
  {
    id: "4",
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    duration: "6:12",
  },
];

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds

  const currentSong = mockPlaylist[currentSongIndex];

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % mockPlaylist.length);
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prev) => (prev - 1 + mockPlaylist.length) % mockPlaylist.length,
    );
    setProgress(0);
  };

  const handleSeek = (value: number) => {
    setProgress(value);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAccessibilityAction = (event: AccessibilityActionEvent) => {
    switch (event.nativeEvent.actionName) {
      case "increment":
        handleNext();
        break;
      case "decrement":
        handlePrevious();
        break;
      case "activate":
        handlePlayPause();
        break;
    }
  };

  const renderPlaylistItem = ({
    item,
    index,
  }: {
    item: (typeof mockPlaylist)[0];
    index: number;
  }) => (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`Select ${item.title} by ${item.artist}`}
      accessibilityHint="Double tap to select this song"
      onPress={() => {
        setCurrentSongIndex(index);
        setProgress(0);
        setIsPlaying(true);
      }}
      style={[
        styles.playlistItem,
        index === currentSongIndex && styles.currentSong,
      ]}
    >
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.songDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Current Song Info */}
      <View
        style={styles.songHeader}
        accessible={true}
        accessibilityRole="summary"
        accessibilityLabel={`Now playing: ${currentSong.title} by ${currentSong.artist}`}
      >
        <Image
          source={{ uri: "https://placehold.co/300" }}
          style={styles.albumArt}
          accessibilityLabel="Album cover"
        />
        <View style={styles.songDetails}>
          <Text style={styles.mainTitle} accessibilityRole="header">
            {currentSong.title}
          </Text>
          <Text style={styles.subtitle}>{currentSong.artist}</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={progress}
          onValueChange={handleSeek}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ddd"
          accessible={true}
          accessibilityRole="adjustable"
          accessibilityLabel="Playback position"
          accessibilityHint="Drag to change playback position"
          accessibilityValue={{
            min: 0,
            max: duration,
            now: progress,
          }}
        />
        <View style={styles.timeLabels}>
          <Text style={styles.timeText}>{formatTime(progress)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Previous track"
          accessibilityHint="Double tap to go to previous track"
          onPress={handlePrevious}
          style={styles.controlButton}
        >
          <Text style={styles.controlIcon}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint="Double tap to play or pause"
          onPress={handlePlayPause}
          style={[styles.controlButton, styles.playButton]}
          accessibilityActions={[
            { name: "activate", label: isPlaying ? "Pause" : "Play" },
          ]}
          onAccessibilityAction={handleAccessibilityAction}
        >
          <Text style={styles.controlIcon}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Next track"
          accessibilityHint="Double tap to go to next track"
          onPress={handleNext}
          style={styles.controlButton}
          accessibilityActions={[{ name: "increment", label: "Next Track" }]}
          onAccessibilityAction={handleAccessibilityAction}
        >
          <Text style={styles.controlIcon}>⏭️</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist Header */}
      <Text style={styles.playlistHeader} accessibilityRole="header">
        Playlist
      </Text>

      {/* Playlist */}
      <FlatList
        data={mockPlaylist}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
        style={styles.playlist}
        contentContainerStyle={styles.playlistContent}
        accessibilityRole="list"
        accessibilityLabel="Playlist"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  songHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  albumArt: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  songDetails: {
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#B3B3B3",
    marginTop: 4,
  },
  progressContainer: {
    marginVertical: 24,
  },
  progressBar: {
    height: 40,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#1DB954",
    borderRadius: 10,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  timeText: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
  controlButton: {
    marginHorizontal: 16,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },
  controlIcon: {
    fontSize: 24,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  playlist: {
    flex: 1,
  },
  playlistContent: {
    paddingBottom: 16,
  },
  playlistItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  currentSong: {
    backgroundColor: "#1e1e1e",
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  songArtist: {
    fontSize: 14,
    color: "#B3B3B3",
    marginTop: 2,
  },
  songDuration: {
    fontSize: 14,
    color: "#B3B3B3",
  },
});

export default MusicPlayerScreen;
