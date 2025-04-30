import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ContactScreen({ navigation }) {
  const contatos = [
    { nome: 'Nome do Contato', telefone: '(99) 99999-9999' },
    { nome: 'Nome do Contato', telefone: '(99) 99999-9999' },
    { nome: 'Nome do Contato', telefone: '(99) 99999-9999' },
  ];

  return (
    <ScrollView style={styles.container}>
      {contatos.map((contato, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.usuario}>{contato.nome}</Text>
          <Text style={styles.telefone}>{contato.telefone}</Text>
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
  telefone: {
    fontSize: 14,
    color: '#555',
  },
});

export default ContactScreen;
