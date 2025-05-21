import { View } from "react-native";
import { SearchBar } from "react-native-screens";
import ListaVertical from "../components/ListaVertical";

function Lojas({ route }) {
  const { categoria } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        placeholder={`Busca em ${categoria}`}
        onIconPress={() => {}}
        onClearIconPress={() => {}}
        style={{ marginBottom: 8 }}
      />
      <ListaVertical />
    </View>
  );
}

export default Lojas;