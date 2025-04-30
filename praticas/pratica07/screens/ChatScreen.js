import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ChatScreen({ navigation }) {
  const mensagens = [
    { nome: 'Ana Souza', hora: '08:45', mensagem: 'Oi, tudo bem?' },
    { nome: 'Carlos Lima', hora: '09:30', mensagem: 'Vamos marcar aquela reunião?' },
    { nome: 'Mariana Santos', hora: '10:10', mensagem: 'Enviei o arquivo para vc.' },
  ];

  return (
    <ScrollView style={styles.container}>
      {mensagens.map((msg, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.usuario}>
            👤 {msg.nome} {msg.hora}
          </Text>
          <Text style={styles.mensagem}>{msg.mensagem}</Text>
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
  mensagem: {
    fontSize: 14,
    color: '#555',
  },
});

export default ChatScreen;