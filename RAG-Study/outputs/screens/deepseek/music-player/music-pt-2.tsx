import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MusicPlayerScreen = () => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  async function playSound() {
    console.log("Loading Sound");
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    });
    setSound(newSound);
    await newSound.playAsync();
    newSound.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) return;
      if (status.isPlaying) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
    });
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  React.useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const togglePlayPause = async () => {
    if (isPlaying) {
      await pauseSound();
    } else {
      await playSound();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player</Text>
      <TouchableOpacity
        onPress={togglePlayPause}
        accessible={true}
        accessibilityLabel="Play/Pause"
        style={styles.controlButton}
      >
        {isPlaying ? (
          <Text style={styles.controlIcon}>⏸️</Text>
        ) : (
          <Text style={styles.controlIcon}>▶️</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sound?.setPositionAsync(position - 10000)}
        accessible={true}
        accessibilityLabel="Rewind"
        style={styles.controlButton}
      >
        <Text style={styles.controlIcon}>⏪️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sound?.setPositionAsync(position + 10000)}
        accessible={true}
        accessibilityLabel="Fast Forward"
        style={styles.controlButton}
      >
        <Text style={styles.controlIcon}>⏩️</Text>
      </TouchableOpacity>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        onValueChange={(value) => sound?.setPositionAsync(value)}
        accessible={true}
        accessibilityLabel="Progress"
        style={styles.slider}
      />
      <Text>
        {Math.floor(position / 1000)}/{Math.floor(duration / 1000)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
  },
  controlIcon: {
    fontSize: 30,
  },
  slider: {
    width: "80%",
    marginTop: 20,
  },
});

export default MusicPlayerScreen;
