import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons"; // Assuming you have these installed
import Slider from "@react-native-community/slider";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.5); // Example progress
  const [currentSong, setCurrentSong] = useState({
    title: "Sample Song",
    artist: "Sample Artist",
    artwork: "https://via.placeholder.com/150", // Replace with your image URL
  });

  const playlist = [
    { id: "1", title: "Song 1", artist: "Artist 1" },
    { id: "2", title: "Song 2", artist: "Artist 2" },
    { id: "3", title: "Song 3", artist: "Artist 3" },
    // ... more songs
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    // Implement skip forward logic
    console.log("Skip Forward");
  };

  const handleRewind = () => {
    // Implement rewind logic
    console.log("Rewind");
  };

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      accessibilityRole="button"
      accessibilityLabel={`Play ${item.title} by ${item.artist}`}
      onPress={() => {
        setCurrentSong({ title: item.title, artist: item.artist });
        setIsPlaying(true);
      }}
    >
      <Text style={styles.playlistTitle}>{item.title}</Text>
      <Text style={styles.playlistArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.artworkContainer}>
        <Image
          source={{ uri: currentSong.artwork }}
          style={styles.artwork}
          accessibilityLabel={`Artwork for ${currentSong.title}`}
        />
      </View>

      <View style={styles.songInfo}>
        <Text style={styles.title} accessibilityRole="header">
          {currentSong.title}
        </Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        onValueChange={setProgress}
        accessibilityRole="adjustable"
        accessibilityLabel="Song progress"
        accessibilityHint="Adjust the song playback progress"
      />

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleRewind}
          accessibilityRole="button"
          accessibilityLabel="Rewind"
        >
          <Feather name="rewind" size={32} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handlePlayPause}
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
        >
          <FontAwesome
            name={isPlaying ? "pause" : "play"}
            size={32}
            color="#333"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleSkipForward}
          accessibilityRole="button"
          accessibilityLabel="Skip Forward"
        >
          <Feather name="fast-forward" size={32} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={playlist}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
        style={styles.playlist}
        accessibilityLabel="Playlist"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  artworkContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  artwork: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  songInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  artist: {
    fontSize: 16,
    color: "#666",
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
    minWidth: 48, // Minimum touch target size
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
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
    color: "#333",
  },
  playlistArtist: {
    fontSize: 14,
    color: "#666",
  },
});

export default MusicPlayer;
