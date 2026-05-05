import { View, Text, FlatList, StyleSheet } from "react-native";
import { doces } from "../data/arrayDoces";
import DocesCard from "../components/docesCard";

export default function Doces() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Doces</Text>

      <FlatList
        data={doces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DocesCard doce={item} />}
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