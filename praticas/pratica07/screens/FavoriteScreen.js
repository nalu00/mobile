import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FavoriteScreen({ navigation }) {
  const favoritas = [
    { titulo: 'Música Favorita 1', artista: 'Artista 1' },
    { titulo: 'Música Favorita 2', artista: 'Artista 2' },
  ];

  return (
    <View style={styles.container}>
      {favoritas.map((musica, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.titulo}>🎵 {musica.titulo}</Text>
          <Text style={styles.subtitulo}>{musica.artista}</Text>
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

export default FavoriteScreen;