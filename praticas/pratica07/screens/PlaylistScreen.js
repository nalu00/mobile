import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PlaylistScreen({ navigation }) {
  const playlists = [
    { nome: 'Playlist 1', quantidade: '10 músicas' },
    { nome: 'Playlist 2', quantidade: '5 músicas' },
    { nome: 'Playlist 3', quantidade: '8 músicas' },
  ];

  return (
    <View style={styles.container}>
      {playlists.map((playlist, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.titulo}>🎼 {playlist.nome}</Text>
          <Text style={styles.subtitulo}>{playlist.quantidade}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#555',
  },
});

export default PlaylistScreen;

