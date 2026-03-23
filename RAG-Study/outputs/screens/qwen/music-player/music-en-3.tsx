import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock data
const mockPlaylist = [
  { id: "1", title: "Bohemian Rhapsody", artist: "Queen", duration: 354 },
  { id: "2", title: "Imagine", artist: "John Lennon", duration: 183 },
  { id: "3", title: "Billie Jean", artist: "Michael Jackson", duration: 293 },
  {
    id: "4",
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    duration: 373,
  },
];

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(mockPlaylist[0].duration);

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            clearInterval(interval!);
            setIsPlaying(false);
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

  const handleSkipForward = () => {
    if (currentSongIndex < mockPlaylist.length - 1) {
      const nextIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextIndex);
      setProgress(0);
      setDuration(mockPlaylist[nextIndex].duration);
    }
  };

  const handleRewind = () => {
    if (progress > 3) {
      setProgress(0);
    } else if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      setProgress(0);
      setDuration(mockPlaylist[prevIndex].duration);
    }
  };

  const handleSelectSong = (index: number) => {
    setCurrentSongIndex(index);
    setProgress(0);
    setDuration(mockPlaylist[index].duration);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const currentSong = mockPlaylist[currentSongIndex];

  return (
    <View style={styles.container}>
      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <Image
          source={{ uri: "https://placehold.co/300" }}
          style={styles.albumArt}
          accessibilityLabel={`Album art for ${currentSong.title}`}
        />
      </View>

      {/* Song Info */}
      <View style={styles.songInfo} accessibilityRole="summary">
        <Text style={styles.songTitle} accessibilityRole="header">
          {currentSong.title}
        </Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer} accessibilityRole="timer">
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={progress}
          onSlidingComplete={(value) => setProgress(value)}
          thumbTintColor="#1DB954"
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ddd"
          accessibilityLabel="Playback progress"
          accessibilityHint="Drag to change playback position"
        />
        <View style={styles.timeInfo}>
          <Text style={styles.timeText}>{formatTime(progress)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls} accessibilityRole="toolbar">
        <TouchableOpacity
          onPress={handleRewind}
          accessibilityRole="button"
          accessibilityLabel="Previous track"
          accessibilityHint="Go to previous song"
        >
          <Text style={styles.controlButton}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePlayPause}
          accessibilityRole="button"
          accessibilityState={{ expanded: isPlaying }}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint={
            isPlaying ? "Pause current song" : "Start playing current song"
          }
        >
          <Text style={styles.playButton}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSkipForward}
          accessibilityRole="button"
          accessibilityLabel="Next track"
          accessibilityHint="Skip to next song"
        >
          <Text style={styles.controlButton}>⏭️</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistHeader} accessibilityRole="header">
          Playlist
        </Text>
        <FlatList
          data={mockPlaylist}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.playlistItem,
                index === currentSongIndex && styles.currentSong,
              ]}
              onPress={() => handleSelectSong(index)}
              accessibilityRole="button"
              accessibilityState={{ selected: index === currentSongIndex }}
              accessibilityLabel={`${item.title} by ${item.artist}`}
            >
              <Text style={styles.playlistTitle}>{item.title}</Text>
              <Text style={styles.playlistArtist}>{item.artist}</Text>
            </TouchableOpacity>
          )}
          accessibilityLabel="Song playlist"
          accessibilityHint="Double tap to select a song"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  albumArtContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  artist: {
    fontSize: 18,
    color: "#666",
    marginTop: 4,
  },
  progressContainer: {
    marginVertical: 20,
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  timeInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  timeText: {
    color: "#666",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  controlButton: {
    fontSize: 32,
  },
  playButton: {
    fontSize: 48,
  },
  playlistContainer: {
    flex: 1,
    marginTop: 20,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playlistItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  currentSong: {
    backgroundColor: "#e8f5e9",
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  playlistArtist: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});

export default MusicPlayerScreen;
