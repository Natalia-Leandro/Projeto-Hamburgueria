import { View, Text, FlatList, StyleSheet } from "react-native";
import { bebidas } from "../data/arrayBebidas";
import BebidaCard from "../components/bebidaCard";

export default function Bebidas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bebidas</Text>

      <FlatList
        data={bebidas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BebidaCard bebida={item} />}
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