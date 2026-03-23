import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import {
  AccessibilityInfo,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock data for songs
const mockPlaylist = [
  { id: "1", title: "Bohemian Rhapsody", artist: "Queen", duration: 354 },
  { id: "2", title: "Blinding Lights", artist: "The Weeknd", duration: 200 },
  { id: "3", title: "Shape of You", artist: "Ed Sheeran", duration: 234 },
  { id: "4", title: "Dance Monkey", artist: "Tones and I", duration: 209 },
];

const MusicPlayerScreen = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [voiceOverEnabled, setVoiceOverEnabled] = useState(false);

  const currentSong = mockPlaylist[currentSongIndex];

  // Check if screen reader is enabled
  useEffect(() => {
    const checkAccessibility = async () => {
      const isEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      setVoiceOverEnabled(isEnabled);
    };

    checkAccessibility();
    const subscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      setVoiceOverEnabled,
    );

    return () => subscription?.remove();
  }, []);

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

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

  const handleSkipForward = () => {
    setProgress(Math.min(progress + 10, 100));
  };

  const handleRewind = () => {
    setProgress(Math.max(progress - 10, 0));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const renderPlaylistItem = ({
    item,
    index,
  }: {
    item: (typeof mockPlaylist)[0];
    index: number;
  }) => (
    <TouchableOpacity
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Select ${item.title} by ${item.artist}`}
      accessibilityHint="Double tap to play this song"
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
      <View>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.songDuration}>{formatTime(item.duration)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Current Song Info */}
      <View
        accessible={true}
        accessibilityRole="summary"
        accessibilityLabel={`Now playing: ${currentSong.title} by ${currentSong.artist}`}
        style={styles.nowPlayingContainer}
      >
        <Image
          source={{ uri: "https://placehold.co/300" }}
          style={styles.albumArt}
          accessibilityLabel="Album cover"
        />
        <View style={styles.songInfo}>
          <Text style={styles.mainTitle} accessibilityRole="header">
            Now Playing
          </Text>
          <Text style={styles.songTitleLarge}>{currentSong.title}</Text>
          <Text style={styles.songArtistLarge}>{currentSong.artist}</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View
        accessible={true}
        accessibilityRole="adjustable"
        accessibilityValue={{
          min: 0,
          max: 100,
          now: progress,
        }}
        accessibilityLabel="Playback progress"
        style={styles.progressContainer}
      >
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={100}
          value={progress}
          onSlidingComplete={(value) => setProgress(value)}
          thumbTintColor="#1DB954"
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ddd"
          accessibilityRole="adjustable"
        />
        <View style={styles.timeLabels}>
          <Text style={styles.timeText}>
            {formatTime(Math.floor((progress / 100) * currentSong.duration))}
          </Text>
          <Text style={styles.timeText}>
            {formatTime(currentSong.duration)}
          </Text>
        </View>
      </View>

      {/* Playback Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Rewind 10 seconds"
          accessibilityHint="Double tap to skip backwards"
          onPress={handleRewind}
          style={styles.controlButton}
        >
          <Text style={styles.controlIcon}>⏪</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint="Double tap to play or pause"
          onPress={handlePrevious}
          style={styles.controlButton}
        >
          <Text style={styles.controlIcon}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityHint="Double tap to play or pause"
          onPress={handlePlayPause}
          style={[styles.playButton, styles.controlButton]}
          accessibilityState={{ selected: isPlaying }}
        >
          <Text style={styles.playIcon}>{isPlaying ? "⏸️" : "▶️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Skip to next track"
          accessibilityHint="Double tap to go to next song"
          onPress={handleNext}
          style={styles.controlButton}
        >
          <Text style={styles.controlIcon}>⏭️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Fast forward 10 seconds"
          accessibilityHint="Double tap to skip forward"
          onPress={handleSkipForward}
          style={styles.controlButton}
        >
          <Text style={styles.controlIcon}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={styles.playlistContainer}>
        <Text style={styles.sectionHeader} accessibilityRole="header">
          Playlist
        </Text>
        <FlatList
          data={mockPlaylist}
          renderItem={renderPlaylistItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.playlistList}
          accessibilityLabel="Song playlist"
          accessibilityHint="Scroll to select a song"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  nowPlayingContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  songInfo: {
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b3b3b3",
    marginBottom: 8,
  },
  songTitleLarge: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 4,
  },
  songArtistLarge: {
    fontSize: 18,
    color: "#b3b3b3",
    textAlign: "center",
  },
  progressContainer: {
    marginVertical: 24,
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  timeText: {
    color: "#b3b3b3",
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 24,
  },
  controlButton: {
    padding: 10,
    borderRadius: 50,
  },
  controlIcon: {
    fontSize: 24,
  },
  playButton: {
    backgroundColor: "#1DB954",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    fontSize: 32,
  },
  playlistContainer: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  playlistList: {
    paddingBottom: 16,
  },
  playlistItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  currentSong: {
    borderLeftWidth: 4,
    borderLeftColor: "#1DB954",
    paddingLeft: 12,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  songArtist: {
    fontSize: 14,
    color: "#b3b3b3",
  },
  songDuration: {
    fontSize: 14,
    color: "#b3b3b3",
  },
});

export default MusicPlayerScreen;
