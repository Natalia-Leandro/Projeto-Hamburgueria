import { router } from "expo-router";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { outrosType } from "../types/outrosType";

type Props = {
  outro: outrosType;
};

export default function OutrosCard({ outro }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/outros/${outro.id}` as any)}
    >
      <View style={styles.info}>
        <Text style={styles.titulo}>{outro.titulo}</Text>
        <Text style={styles.preco}>{outro.preco}</Text>
      </View>

      <Image style={styles.imagem} source={outro.imagem} resizeMode="cover" />
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  info: { flex: 1, gap: 6 },
  titulo: { fontSize: 18, fontWeight: "700", color: "#000" },
  preco: { fontSize: 16, fontWeight: "600", color: "#000" },
  imagem: { width: 110, height: 110, borderRadius: 12, marginLeft: 12 },
});