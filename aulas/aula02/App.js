import { useState } from "react";
import { Text, Button } from "react-native";

function Titulo(props) {
  return<>{props.children}</>;
}

function App(){
  const [estado, setEstado] = useState;

  return (
  <>
  <Titulo texto="Meu App"></Titulo>
  <Text style={styles.titulo}>Olá Pessoal!</Text>
  <Text style={{ fontSize: 24, padding: 2 }}>Olá Pessoal!</Text>
  <Button title="Clique aqui"
  onPress={() => setEstado(estado + 1)} />
  </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    paddingTop: 24,
  }
})

export default App;