import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

function LoginScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput label="E-mail" mode="outlined" style={styles.input} />
      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={() => {}} style={styles.input}>
        Entrar
      </Button>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text style={styles.info}>Esqueceu sua senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.link}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  info: {
    textAlign: "center",
    marginBottom: 16,
  },
});

export default LoginScreen;
