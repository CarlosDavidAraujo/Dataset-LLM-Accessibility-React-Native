import Slider from "@react-native-community/slider";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  AccessibilityInfo,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const sliderRef = useRef(null);

  const playlist = [
    {
      id: "1",
      title: "Song 1",
      artist: "Artist 1",
      artwork: "https://via.placeholder.com/150", // Replace with actual image URL
      duration: 200, // in seconds
    },
    {
      id: "2",
      title: "Song 2",
      artist: "Artist 2",
      artwork: "https://via.placeholder.com/150",
      duration: 250,
    },
    // Add more songs...
  ];

  const currentSong = playlist[currentSongIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add audio playback logic here
  };

  const skipForward = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setProgress(0);
      // Add logic to change audio source
    }
  };

  const rewind = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setProgress(0);
      // Add logic to change audio source
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const renderPlaylistItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      onPress={() => {
        setCurrentSongIndex(index);
        setProgress(0);
        // Add logic to change audio source
      }}
      accessibilityRole="button"
      accessibilityLabel={`Song ${index + 1}: ${item.title} by ${item.artist}`}
      accessible={true}
    >
      <Text style={styles.playlistTitle}>{item.title}</Text>
      <Text style={styles.playlistArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    // Simulate progress update (replace with actual audio progress)
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        if (progress < currentSong.duration) {
          setProgress((prevProgress) => prevProgress + 1);
        } else {
          clearInterval(interval);
          if (currentSongIndex < playlist.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
            setProgress(0);
            // Add logic to change audio source
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
            setProgress(0);
          }
        }
      }, 1000); // Update every second
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, progress, currentSongIndex]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentSong.artwork }}
        style={styles.artwork}
        accessibilityRole="image"
        accessibilityLabel="Album artwork"
      />
      <View style={styles.songInfo}>
        <Text style={styles.title} accessibilityRole="header">
          {currentSong.title}
        </Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={currentSong.duration}
        value={progress}
        onValueChange={(value) => setProgress(value)}
        ref={sliderRef}
        accessibilityRole="adjustable"
        accessibilityLabel="Song progress"
        accessibilityHint="Use left and right swipe gestures to adjust the progress"
        accessibilityValue={{
          now: formatTime(progress),
          max: formatTime(currentSong.duration),
        }}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(progress)}</Text>
        <Text style={styles.time}>{formatTime(currentSong.duration)}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={rewind}
          accessibilityLabel="Rewind"
          accessibilityRole="button"
        >
          <Icon name="replay-10" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={togglePlayPause}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
        >
          <Icon
            name={isPlaying ? "pause" : "play-arrow"}
            size={40}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={skipForward}
          accessibilityLabel="Skip forward"
          accessibilityRole="button"
        >
          <Icon name="forward-10" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={playlist}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
        style={styles.playlist}
        accessibilityLabel="Playlist"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  artwork: {
    width: width - 40,
    height: width - 40,
    marginBottom: 20,
    alignSelf: "center",
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  artist: {
    fontSize: 18,
    color: "#666",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    color: "#333",
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
    justifyContent: "center",
    alignItems: "center",
  },
  playlist: {
    flex: 1,
  },
  playlistItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  playlistTitle: {
    fontSize: 18,
    color: "#000",
  },
  playlistArtist: {
    fontSize: 14,
    color: "#666",
  },
});

export default MusicPlayer;
