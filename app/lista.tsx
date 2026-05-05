import { View, Text, FlatList, StyleSheet } from "react-native";
import { sandubas } from "../data/arrayProdutos";
import ProdutoCard from "../components/ProdutoCard";

export default function Lista() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio de Sanduíches</Text>

      <FlatList
        data={sandubas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProdutoCard produto={item} />}
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