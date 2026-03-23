import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MusicPlayer = () => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const loadSound = async () => {
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    });
    setSound(newSound);
    playSound();
  };

  async function playSound() {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;
        if (status.didJustFinish) {
          setIsPlaying(false);
        } else {
          setPosition(status.positionMillis);
        }
      });
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  React.useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const onSeek = async (positionMillis: number) => {
    if (sound) {
      await sound.setPositionAsync(positionMillis);
      setPosition(positionMillis);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{/* Current song information */}</Text>
      <Button
        title={isPlaying ? "Pause" : "Play"}
        onPress={isPlaying ? pauseSound : playSound}
        accessibilityLabel="Play or Pause"
      />
      <Button
        title="Skip Forward"
        onPress={() => {}} // Add skip forward logic here
        accessibilityLabel="Skip Forward"
      />
      <Button
        title="Rewind"
        onPress={() => {}} // Add rewind logic here
        accessibilityLabel="Rewind"
      />
      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSeek}
        style={{ width: "80%", height: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MusicPlayer;
