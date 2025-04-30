import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

function RecoverScreen({ navigation }) {
    return (
          <ScrollView contentContainerStyle={styles.container}>
            <TextInput label="E-mail" mode="outlined" style={styles.input}/>
            <Button mode="contained" onPress={() => {}} style={styles.input}>Recuperar Senha</Button>
            <Button mode="contained" onPress={() => {}} style={styles.input}>Voltar para o Login</Button>
          </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,
        padding: 16
    },
    input: {
        marginBottom: 16
    },
});

export default RecoverScreen;
