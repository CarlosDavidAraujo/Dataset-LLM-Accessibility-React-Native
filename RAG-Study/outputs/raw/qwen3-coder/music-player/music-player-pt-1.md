```typescript
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Slider,
  Alert,
  AccessibilityInfo,
} from 'react-native';

// Mock data for playlist
const mockPlaylist = [
  { id: '1', title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
  { id: '2', title: 'Imagine', artist: 'John Lennon', duration: '3:07' },
  { id: '3', title: 'Billie Jean', artist: 'Michael Jackson', duration: '4:54' },
  { id: '4', title: 'Like a Rolling Stone', artist: 'Bob Dylan', duration: '6:12' },
  { id: '5', title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:01' },
];

export default function MusicPlayerScreen() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const currentTrack = mockPlaylist[currentTrackIndex];

  // Start or stop progress simulation
  const togglePlayback = () => {
    if (isPlaying) {
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentTrackIndex < mockPlaylist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
    }
  };

  const handleSeek = (value: number) => {
    setProgress(value);
  };

  // Cleanup interval on unmount
  React.useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  // Accessibility actions for the main player controls container
  const playerAccessibilityActions = [
    { name: 'play', label: 'Reproduzir' },
    { name: 'pause', label: 'Pausar' },
    { name: 'next', label: 'Próxima faixa' },
    { name: 'previous', label: 'Faixa anterior' },
  ];

  const handleAccessibilityAction = (event: any) => {
    switch (event.nativeEvent.actionName) {
      case 'play':
        if (!isPlaying) togglePlayback();
        break;
      case 'pause':
        if (isPlaying) togglePlayback();
        break;
      case 'next':
        handleNext();
        break;
      case 'previous':
        handlePrevious();
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Player Controls Section */}
      <View 
        style={styles.playerSection}
        accessible={true}
        accessibilityLabel={`Controles do player de música. Música atual: ${currentTrack.title} por ${currentTrack.artist}`}
        accessibilityHint="Toque duas vezes para ativar os controles"
        accessibilityRole="adjustable"
        accessibilityActions={playerAccessibilityActions}
        onAccessibilityAction={handleAccessibilityAction}
      >
        {/* Track Info */}
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle} accessibilityRole="header">
            {currentTrack.title}
          </Text>
          <Text style={styles.trackArtist}>{currentTrack.artist}</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <Slider
            style={styles.progressBar}
            value={progress}
            onValueChange={handleSeek}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#1DB954"
            minimumTrackTintColor="#1DB954"
            accessibilityLabel="Barra de progresso"
            accessibilityHint="Arraste para mudar a posição na música"
            accessibilityRole="adjustable"
          />
          <View style={styles.timeInfo}>
            <Text style={styles.timeText}>{Math.floor(progress / 100 * 180)}:{String(Math.round((progress / 100 * 180) % 60)).padStart(2, '0')}</Text>
            <Text style={styles.timeText}>{currentTrack.duration}</Text>
          </View>
        </View>

        {/* Control Buttons */}
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={handlePrevious}
            accessibilityLabel="Voltar à música anterior"
            accessibilityRole="button"
            style={styles.controlButton}
          >
            <Text style={styles.controlButtonText}>⏮</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={togglePlayback}
            accessibilityLabel={isPlaying ? "Pausar" : "Reproduzir"}
            accessibilityRole="button"
            style={[styles.controlButton, styles.playButton]}
          >
            <Text style={styles.controlButtonText}>
              {isPlaying ? '⏸' : '▶'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleNext}
            accessibilityLabel="Avançar para próxima música"
            accessibilityRole="button"
            style={styles.controlButton}
          >
            <Text style={styles.controlButtonText}>⏭</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Playlist Section */}
      <View 
        style={styles.playlistSection}
        accessible={true}
        accessibilityLabel="Lista de reprodução"
        accessibilityHint="Lista de todas as músicas disponíveis"
      >
        <Text style={styles.playlistHeader} accessibilityRole="header">
          Lista de Reprodução
        </Text>
        <ScrollView 
          style={styles.playlist}
          accessibilityLabel="Lista de músicas"
        >
          {mockPlaylist.map((track, index) => (
            <TouchableOpacity
              key={track.id}
              style={[
                styles.playlistItem,
                index === currentTrackIndex && styles.currentTrack
              ]}
              onPress={() => {
                setCurrentTrackIndex(index);
                setProgress(0);
                if (!isPlaying) setIsPlaying(true);
              }}
              accessibilityLabel={`${track.title} por ${track.artist}, duração ${track.duration}`}
              accessibilityRole={index === currentTrackIndex ? "text" : "button"}
              accessibilityHint={
                index === currentTrackIndex 
                  ? "Música atual em reprodução" 
                  : "Toque para selecionar esta música"
              }
            >
              <View style={styles.trackDetails}>
                <Text style={[
                  styles.trackTitleSmall,
                  index === currentTrackIndex && styles.currentTrackText
                ]}>
                  {track.title}
                </Text>
                <Text style={styles.trackArtistSmall}>{track.artist}</Text>
              </View>
              <Text style={styles.trackDuration}>{track.duration}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  playerSection: {
    padding: 20,
    alignItems: 'center',
  },
  trackInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 18,
    color: '#B3B3B3',
    marginTop: 5,
  },
  progressBarContainer: {
    width: '100%',
    marginBottom: 30,
  },
  progressBar: {
    height: 40,
    width: '100%',
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  timeText: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  controlButton: {
    marginHorizontal: 20,
    padding: 10,
  },
  playButton: {
    backgroundColor: '#1DB954',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  playlistSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  playlistHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  playlist: {
    flex: 1,
  },
  playlistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  trackDetails: {
    flex: 1,
  },
  trackTitleSmall: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  trackArtistSmall: {
    fontSize: 14,
    color: '#B3B3B3',
    marginTop: 2,
  },
  trackDuration: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  currentTrack: {
    borderLeftWidth: 3,
    borderLeftColor: '#1DB954',
    paddingLeft: 12,
  },
  currentTrackText: {
    color: '#1DB954',
  },
});
```

Esta tela de player de música inclui:

1. **Informações da música atual** com título e artista destacados
2. **Barra de progresso** com controles de tempo
3. **Botões de controle** (anterior, reproduzir/pausar, próximo)
4. **Lista de reprodução** com todas as faixas
5. **Recursos de acessibilidade completos**:
   - `accessibilityActions` para controles principais (play, pause, next, previous)
   - `onAccessibilityAction` para manipular ações de acessibilidade
   - Labels descritivos para todos os elementos interativos
   - Roles apropriados (button, adjustable, header)
   - Hints contextuais para ajudar usuários de leitor de tela
   - Foco adequado nas músicas atuais
   - Suporte para gestos padrão do VoiceOver

Os controles respondem tanto ao toque quanto às ações de acessibilidade, permitindo que usuários com deficiência visual controlem completamente o player através do VoiceOver. A interface é totalmente funcional com simulação de progresso automático e transição entre faixas.