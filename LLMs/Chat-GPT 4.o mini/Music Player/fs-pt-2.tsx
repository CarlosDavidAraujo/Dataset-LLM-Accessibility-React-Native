import Slider from "@react-native-community/slider";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MusicPlayer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
        alignItems: "center",
      }}
    >
      {/* Título da Música */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#000000",
          marginBottom: 10,
        }}
        accessibilityLabel="Título da música atual"
      >
        Título da Música
      </Text>

      {/* Artista da Música */}
      <Text
        style={{ fontSize: 18, color: "#333333" }}
        accessibilityLabel="Nome do artista"
      >
        Nome do Artista
      </Text>

      {/* Barra de Progresso */}
      <Text style={{ color: "#000000", marginTop: 20 }}>Progresso</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={50}
        step={1}
        accessibilityLabel="Controle de progresso da música"
        accessibilityValue={{ min: 0, max: 100, now: 50 }}
      />

      {/* Controles de Reprodução */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          width: "80%",
        }}
      >
        {/* Botão Retroceder */}
        <TouchableOpacity
          style={{
            minWidth: 48,
            minHeight: 48,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DDD",
            borderRadius: 24,
          }}
          accessibilityLabel="Retroceder música"
        >
          <Text style={{ fontSize: 18, color: "#000" }}>⏪</Text>
        </TouchableOpacity>

        {/* Botão Play/Pause */}
        <TouchableOpacity
          style={{
            minWidth: 48,
            minHeight: 48,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DDD",
            borderRadius: 24,
          }}
          accessibilityLabel="Play ou Pausar"
        >
          <Text style={{ fontSize: 18, color: "#000" }}>⏯️</Text>
        </TouchableOpacity>

        {/* Botão Avançar */}
        <TouchableOpacity
          style={{
            minWidth: 48,
            minHeight: 48,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DDD",
            borderRadius: 24,
          }}
          accessibilityLabel="Avançar música"
        >
          <Text style={{ fontSize: 18, color: "#000" }}>⏩</Text>
        </TouchableOpacity>
      </View>

      {/* Playlist */}
      <View style={{ marginTop: 40, width: "100%" }}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}
          accessibilityLabel="Playlist atual"
        >
          Playlist
        </Text>

        <Text
          style={{ color: "#555555", marginTop: 10 }}
          accessibilityLabel="Música 1"
        >
          🎵 Música 1
        </Text>
        <Text
          style={{ color: "#555555", marginTop: 10 }}
          accessibilityLabel="Música 2"
        >
          🎵 Música 2
        </Text>
        <Text
          style={{ color: "#555555", marginTop: 10 }}
          accessibilityLabel="Música 3"
        >
          🎵 Música 3
        </Text>
      </View>
    </View>
  );
};

export default MusicPlayer;
