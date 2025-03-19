import { View, Text, StyleSheet, TextInput, Button, ScrollView } from "react-native";

function RegistrarConta() {
  return <View style={{flex: 1}}>
    <View style={styles.appBar}>
        <Text style={styles.appTitle}>Registrar Conta</Text>
    </View>
    <ScrollView>
    <View style={styles.container}>
        <TextInput style={styles.input} multiline placeholder="Nome" />
        <TextInput style={styles.input} keyboardType="email-address" placeholder="Email"/>
        <TextInput style={styles.input} keyboardType="url" secureTextEntry placeholder="Senha"/>
        <TextInput style={styles.input} keyboardType="url" secureTextEntry placeholder="Confirmar Senha"/>
        <Button title="Registrar" color="purple"/>
    </View>
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({ 
    appBar: {
        height: 64,
        backgroundColor: "purple",
        padding: 16,
        justifyContent: "center",
        marginBottom: 8,
        elevation: 3,
    },
    appTitle: {
        color: "white",
        fontSize: 24,
      },
      container: {
        flex: 1,
        paddingHorizontal: 16,
        peddingTop: 64,
      },
      input: {
        backgroundColor: "#E6E6FA",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "purple",
        marginBottom: 16,
      },
});

export default RegistrarConta;