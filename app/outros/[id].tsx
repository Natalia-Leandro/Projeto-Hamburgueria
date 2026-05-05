import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { outros } from "../../data/arrayOutros";

export default function Id() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const outro = outros.find((p) => p.id === Number(id));

  if (!outro) return <Text>Nao EXISTE ESSE ITEM</Text>;

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={outro.imagem} resizeMode="cover" />

      <View style={styles.info}>
        <Text style={styles.nome}>{outro.titulo}</Text>
        <Text style={styles.preco}>{outro.preco}</Text>
        <Text style={styles.descricao}>{outro.descricao}</Text>

        <TouchableOpacity style={styles.botaoComprar}>
          <Text style={styles.botaoComprarText}>Add Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
          <Text style={styles.botaoVoltarText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imagem: { width: "100%", height: 300 },
  info: { padding: 20, gap: 12 },
  nome: { fontSize: 24, fontWeight: "bold", color: "#000" },
  preco: { fontSize: 40, fontWeight: "600", color: "#8e0866" },
  descricao: { fontSize: 25, lineHeight: 28, color: "#555" },
  botaoComprar: {
    backgroundColor: "#f10b0b",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  botaoComprarText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f6f0f0",
  },
  botaoVoltar: {
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  botaoVoltarText: {
    fontSize: 14,
    color: "#4d4949",
  },
});