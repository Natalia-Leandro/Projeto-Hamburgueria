import { View, Text, FlatList, StyleSheet } from "react-native";
import { outros } from "../data/arrayOutros";
import OutrosCard from "../components/outrosCard";

export default function Outros() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Outros</Text>

      <FlatList
        data={outros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OutrosCard outro={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});