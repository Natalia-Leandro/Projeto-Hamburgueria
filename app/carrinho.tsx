import { useFocusEffect, router } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { listarCarrinho, limparCarrinho } from "./database/db";

export default function Carrinho() {
  const [produtos, setProdutos] = useState<any[]>([]);

  function carregarCarrinho() {
    const itens = listarCarrinho();
    setProdutos(itens);
  }

  useFocusEffect(
    useCallback(() => {
      carregarCarrinho();
    }, [])
  );

  function apagarCarrinho() {
    limparCarrinho();
    carregarCarrinho();
    alert("Carrinho limpo!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botao} onPress={apagarCarrinho}>
        <Text style={styles.botaoTexto}>Limpar Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push("/")}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8abcf", padding: 20 },
  titulo: { fontSize: 32, fontWeight: "bold", textAlign: "center", color: "#940346", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 16, marginBottom: 12 },
  nome: { fontSize: 22, fontWeight: "bold" },
  preco: { fontSize: 20, color: "#8e0866", fontWeight: "bold" },
  descricao: { fontSize: 16, color: "#555" },
  botao: { backgroundColor: "#940346", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  botaoTexto: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  botaoVoltar: { backgroundColor: "#000", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  voltarTexto: { color: "#ff69b4", fontSize: 18, fontWeight: "bold" },
});