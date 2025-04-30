import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function CallScreen({ navigation }) {
  const chamadas = [
    { nome: 'Campos Sales', dataHora: '28/02/2024 12:03' },
    { nome: 'Rui Barbosa', dataHora: '04/12/2023 21:10' },
  ];

  return (
    <ScrollView style={styles.container}>
      {chamadas.map((chamada, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.usuario}>
            👤 {chamada.nome} 📞
          </Text>
          <Text style={styles.dataHora}>{chamada.dataHora}</Text>
        </View>
      ))}
    </ScrollView>
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
  usuario: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dataHora: {
    fontSize: 14,
    color: '#555',
  },
});

export default CallScreen;
