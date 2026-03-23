import { Audio } from "expo-av";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type State = {
  isPlaying: boolean;
  positionMillis: number;
  durationMillis: number;
};

class MusicPlayer extends React.Component<{}, State> {
  private soundObject: any; // Use a more specific type if possible, or import Audio from expo-av directly in the component

  constructor(props: {}) {
    super(props);
    this.state = {
      isPlaying: false,
      positionMillis: 0,
      durationMillis: 0,
    };
  }

  async playSound() {
    if (this.soundObject) {
      await this.soundObject.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
      { uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // Adjust the path to your audio file
      {
        shouldPlay: true,
        rate: 1,
        volume: 1,
        isMuted: false,
      },
    );
    this.soundObject = sound;
    await sound.playAsync();
    this.setState({ isPlaying: true });
  }

  async pauseSound() {
    if (this.soundObject) {
      await this.soundObject.pauseAsync();
      this.setState({ isPlaying: false });
    }
  }

  async rewindSound() {
    const position = Math.max(0, this.state.positionMillis - 15000); // Rewind by 15 seconds
    await this.soundObject.setPositionAsync(position);
    this.setState({ positionMillis: position });
  }

  async skipForwardSound() {
    const position = Math.min(
      this.state.durationMillis,
      this.state.positionMillis + 30000,
    ); // Skip forward by 30 seconds
    await this.soundObject.setPositionAsync(position);
    this.setState({ positionMillis: position });
  }

  async setProgress() {
    if (this.soundObject) {
      const status = await this.soundObject.getStatusAsync();
      this.setState({
        positionMillis: status.position,
        durationMillis: status.duration,
      });
    }
  }

  componentDidMount() {
    this.setProgress();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{/* Display current song information here */}</Text>
        <Button
          title={this.state.isPlaying ? "Pause" : "Play"}
          onPress={
            this.state.isPlaying
              ? () => this.pauseSound()
              : () => this.playSound()
          }
        />
        <Button title="Rewind" onPress={() => this.rewindSound()} />
        <Button title="Skip Forward" onPress={() => this.skipForwardSound()} />
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              {
                width: `${(this.state.positionMillis / this.state.durationMillis || 0) * 100}%`,
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    width: "80%",
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
});

export default MusicPlayer;
