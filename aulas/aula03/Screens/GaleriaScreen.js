import { View, Text, StyleSheet } from "react-native";

function GaleriaScreen(){
    return < View style={styles.grid}>
        <View style={styles.photo}>
            <Text>Foto 1</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 2</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 3</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 4</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 5</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 6</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 7</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 8</Text>
        </View>
        <View style={styles.photo}>
            <Text>Foto 9</Text>
        </View>      
    </View>;
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        paddingLeft: 6,
    },

    photo: {
      height: 120,
      width: 120,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default GaleriaScreen;