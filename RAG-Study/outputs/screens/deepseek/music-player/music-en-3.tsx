import { Audio } from "expo-av";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type State = {
  isPlaying: boolean;
  positionMillis: number;
  durationMillis: number;
};

class MusicPlayer extends React.Component<{}, State> {
  private soundObject: any;

  constructor(props: {}) {
    super(props);
    this.state = {
      isPlaying: false,
      positionMillis: 0,
      durationMillis: 0,
    };
  }

  async componentDidMount() {
    // Load a sound file and get the status of it
    const { sound } = await Audio.Sound.createAsync(
      { uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { shouldPlay: false },
    );
    this.soundObject = sound;
    this.soundObject.setOnPlaybackStatusUpdate((status: any) => {
      if (status.isLoaded) {
        this.setState({
          positionMillis: status.positionMillis,
          durationMillis: status.durationMillis,
          isPlaying: status.isPlaying,
        });
      }
    });
  }

  componentWillUnmount() {
    // Unload the sound when the component is destroyed
    if (this.soundObject) {
      this.soundObject.unloadAsync();
    }
  }

  playPauseSound = async () => {
    try {
      if (this.soundObject) {
        if (this.state.isPlaying) {
          await this.soundObject.pauseAsync();
        } else {
          await this.soundObject.playAsync();
        }
      }
    } catch (error) {
      console.log("Error playing/pausing sound:", error);
    }
  };

  skipForward = async () => {
    try {
      if (this.soundObject) {
        await this.soundObject.setPositionAsync(
          this.state.positionMillis + 10000,
        ); // Skip forward by 10 seconds
      }
    } catch (error) {
      console.log("Error skipping forward:", error);
    }
  };

  rewind = async () => {
    try {
      if (this.soundObject) {
        await this.soundObject.setPositionAsync(
          Math.max(0, this.state.positionMillis - 10000),
        ); // Rewind by 10 seconds
      }
    } catch (error) {
      console.log("Error rewinding:", error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Now Playing: Song Title</Text>
        <Button
          title={this.state.isPlaying ? "Pause" : "Play"}
          onPress={this.playPauseSound}
          accessibilityLabel="Play/Pause"
        />
        <Button
          title="Skip Forward"
          onPress={this.skipForward}
          accessibilityLabel="Skip Forward"
        />
        <Button
          title="Rewind"
          onPress={this.rewind}
          accessibilityLabel="Rewind"
        />
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${(this.state.positionMillis / (this.state.durationMillis || 1)) * 100}%`,
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
    padding: 20,
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginTop: 20,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "blue",
  },
});

export default MusicPlayer;
