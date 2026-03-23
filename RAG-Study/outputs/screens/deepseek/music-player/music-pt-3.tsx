import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState(0);
  const soundObject = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    (async () => {
      const { sound } = await Audio.Sound.createAsync({
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      });
      soundObject.current = sound;
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis || 0);
        }
      });
    })();

    return () => {
      if (soundObject.current) {
        soundObject.current.unloadAsync();
      }
    };
  }, []);

  const playAsync = async () => {
    if (soundObject.current) {
      await soundObject.current.playAsync();
    }
  };

  const pauseAsync = async () => {
    if (soundObject.current) {
      await soundObject.current.pauseAsync();
    }
  };

  const togglePlayPause = () => {
    isPlaying ? pauseAsync() : playAsync();
    setIsPlaying(!isPlaying);
  };

  const skipForward = async () => {
    if (soundObject.current) {
      await soundObject.current.setPositionAsync(position + 10000); // Avança 10 segundos
    }
  };

  const skipBackward = async () => {
    if (soundObject.current) {
      await soundObject.current.setPositionAsync(position - 10000); // Retrocede 10 segundos
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Player de Música</Text>
      <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
        {isPlaying ? <Text>Pausar</Text> : <Text>Reproduzir</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={skipBackward} style={styles.controlButton}>
        <Text>Retroceder</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={skipForward} style={styles.controlButton}>
        <Text>Avançar</Text>
      </TouchableOpacity>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration || 1}
        onValueChange={(value) => setPosition(value)}
        style={styles.slider}
      />
      <Text>{isPlaying ? "Reproduzindo" : "Pausado"}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  slider: {
    width: "80%",
    marginTop: 20,
  },
});

export default MusicPlayerScreen;
