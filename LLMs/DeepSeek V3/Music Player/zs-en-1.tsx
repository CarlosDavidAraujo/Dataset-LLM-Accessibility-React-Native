import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  AccessibilityInfo,
  findNodeHandle,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/useColorScheme.web";

const MusicPlayerScreen = () => {
  const colorScheme = useColorScheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const playerControlsRef = useRef(null);

  // Sample playlist data
  const playlist = [
    {
      id: "1",
      title: "Beautiful Day",
      artist: "U2",
      album: "All That You Can't Leave Behind",
      duration: "3:45",
      coverArt: "https://example.com/cover1.jpg",
    },
    {
      id: "2",
      title: "Yellow",
      artist: "Coldplay",
      album: "Parachutes",
      duration: "4:27",
      coverArt: "https://example.com/cover2.jpg",
    },
    {
      id: "3",
      title: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      duration: "3:48",
      coverArt: "https://example.com/cover3.jpg",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Calculate contrast colors based on theme
  const textColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const secondaryTextColor = colorScheme === "dark" ? "#BBBBBB" : "#555555";
  const backgroundColor = colorScheme === "dark" ? "#121212" : "#FFFFFF";
  const controlColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const highlightColor = "#1DB954"; // Spotify green for consistency

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Announce the state change for screen readers
    AccessibilityInfo.announceForAccessibility(
      isPlaying ? "Playback paused" : "Playback started"
    );
  };

  const handleSkipForward = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    // Focus the play button after track change
    setTimeout(() => {
      const reactTag = findNodeHandle(playerControlsRef.current);
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }, 100);
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[nextIndex].title} by ${playlist[nextIndex].artist}`
    );
  };

  const handleSkipBackward = () => {
    const prevIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);
    setTimeout(() => {
      const reactTag = findNodeHandle(playerControlsRef.current);
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }, 100);
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[prevIndex].title} by ${playlist[prevIndex].artist}`
    );
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlaylistItemPress = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
    AccessibilityInfo.announceForAccessibility(
      `Now playing ${playlist[index].title}`
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Current Track Info */}
      <View style={styles.trackInfoContainer} accessible={true}>
        <Image
          source={{ uri: currentTrack.coverArt }}
          style={styles.coverArt}
          accessibilityLabel={`Album art for ${currentTrack.album}`}
        />
        <Text
          style={[styles.trackTitle, { color: textColor }]}
          accessibilityRole="header"
        >
          {currentTrack.title}
        </Text>
        <Text
          style={[styles.trackArtist, { color: secondaryTextColor }]}
          accessibilityRole="text"
        >
          {currentTrack.artist}
        </Text>
        <Text
          style={[styles.trackAlbum, { color: secondaryTextColor }]}
          accessibilityRole="text"
        >
          {currentTrack.album}
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={[styles.timeText, { color: secondaryTextColor }]}>
          {formatTime(currentTime)}
        </Text>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={setCurrentTime}
          minimumTrackTintColor={highlightColor}
          maximumTrackTintColor={secondaryTextColor}
          thumbTintColor={highlightColor}
          accessibilityLabel="Progress bar"
          accessibilityHint="Drag to seek through the track"
          accessibilityRole="adjustable"
        />
        <Text style={[styles.timeText, { color: secondaryTextColor }]}>
          {formatTime(duration)}
        </Text>
      </View>

      {/* Player Controls */}
      <View
        style={styles.controlsContainer}
        ref={playerControlsRef}
        accessible={true}
        accessibilityLabel="Player controls"
      >
        <TouchableOpacity
          onPress={handleSkipBackward}
          style={styles.controlButton}
          accessibilityLabel="Previous track"
          accessibilityHint="Plays the previous track in the playlist"
          accessibilityRole="button"
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Icon
            name="skip-previous"
            size={36}
            color={controlColor}
            accessible={false}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePlayPause}
          style={styles.playPauseButton}
          accessibilityLabel={isPlaying ? "Pause" : "Play"}
          accessibilityRole="button"
          accessibilityState={{ selected: isPlaying }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Icon
            name={isPlaying ? "pause" : "play-arrow"}
            size={48}
            color={controlColor}
            accessible={false}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSkipForward}
          style={styles.controlButton}
          accessibilityLabel="Next track"
          accessibilityHint="Plays the next track in the playlist"
          accessibilityRole="button"
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Icon
            name="skip-next"
            size={36}
            color={controlColor}
            accessible={false}
          />
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <Text
        style={[styles.playlistHeader, { color: textColor }]}
        accessibilityRole="header"
      >
        Playlist
      </Text>
      <ScrollView
        style={styles.playlistContainer}
        accessibilityLabel="Playlist"
        accessibilityRole="list"
      >
        {playlist.map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[
              styles.playlistItem,
              {
                backgroundColor:
                  index === currentTrackIndex
                    ? colorScheme === "dark"
                      ? "#333333"
                      : "#EEEEEE"
                    : "transparent",
              },
            ]}
            onPress={() => handlePlaylistItemPress(index)}
            accessibilityLabel={`${track.title} by ${track.artist}, ${track.duration}`}
            accessibilityHint="Plays this track"
            accessibilityRole="button"
            accessibilityState={{ selected: index === currentTrackIndex }}
          >
            <Image
              source={{ uri: track.coverArt }}
              style={styles.playlistCoverArt}
              accessibilityLabel={`Album art for ${track.album}`}
            />
            <View style={styles.playlistTextContainer}>
              <Text
                style={[
                  styles.playlistTrackTitle,
                  {
                    color:
                      index === currentTrackIndex ? highlightColor : textColor,
                  },
                ]}
                numberOfLines={1}
              >
                {track.title}
              </Text>
              <Text
                style={[
                  styles.playlistTrackArtist,
                  { color: secondaryTextColor },
                ]}
                numberOfLines={1}
              >
                {track.artist}
              </Text>
            </View>
            <Text
              style={[
                styles.playlistTrackDuration,
                { color: secondaryTextColor },
              ]}
            >
              {track.duration}
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
    padding: 16,
  },
  trackInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  coverArt: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  trackTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  trackArtist: {
    fontSize: 18,
    marginBottom: 4,
    textAlign: "center",
  },
  trackAlbum: {
    fontSize: 16,
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  progressBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
  },
  timeText: {
    fontSize: 14,
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
    minWidth: 60,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  playPauseButton: {
    padding: 16,
    minWidth: 80,
    minHeight: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  playlistContainer: {
    flex: 1,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistCoverArt: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
  },
  playlistTextContainer: {
    flex: 1,
  },
  playlistTrackTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  playlistTrackArtist: {
    fontSize: 14,
  },
  playlistTrackDuration: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default MusicPlayerScreen;
