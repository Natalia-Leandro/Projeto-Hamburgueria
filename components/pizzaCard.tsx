import { router } from "expo-router";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { pizzaType } from "../types/pizzaType";

type Props = {
  pizza: pizzaType;
};

export default function PizzaCard({ pizza }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/pizzas/${pizza.id}` as any)}
    >
      <View style={styles.info}>
        <Text style={styles.titulo}>{pizza.titulo}</Text>
        <Text style={styles.preco}>{pizza.preco}</Text>
      </View>

      <Image style={styles.imagem} source={pizza.imagem} resizeMode="cover" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f1f1f1",
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  info: {
    flex: 1,
    gap: 6,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  preco: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginLeft: 12,
  },
});