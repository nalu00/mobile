import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://placekitten.com/200/200' }}
        />
      </View>
      <Text style={styles.name}>João da Silva</Text>
      <Text style={styles.email}>joao.silva@email.com.br</Text>
      <Text style={styles.phone}>(61) 99999-9999</Text>
      <Button title="Editar Perfil" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ProfileScreen;
