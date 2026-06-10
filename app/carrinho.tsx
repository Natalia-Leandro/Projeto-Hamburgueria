import { useFocusEffect, router } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { listarCarrinho, limparCarrinho } from "./database/db";

export default function Carrinho() {
  const [produtos, setProdutos] = useState<any[]>([]);

  function carregarCarrinho() {
    setProdutos(listarCarrinho());
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

  function converterPreco(preco: string) {
    return Number(preco.replace("R$", "").replace(",", ".").trim());
  }

  const total = produtos.reduce((soma, item) => soma + converterPreco(item.preco), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        )}
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalTexto}>Total:</Text>
        <Text style={styles.totalPreco}>R$ {total.toFixed(2).replace(".", ",")}</Text>
      </View>

      <TouchableOpacity style={styles.botaoLimpar} onPress={apagarCarrinho}>
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
  titulo: { fontSize: 36, fontWeight: "bold", textAlign: "center", color: "#940346", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 18, marginBottom: 14 },
  nome: { fontSize: 24, fontWeight: "bold", color: "#000" },
  descricao: { fontSize: 16, color: "#555", marginTop: 6 },
  preco: { fontSize: 24, color: "#8e0866", fontWeight: "bold", marginTop: 8 },
  totalBox: { backgroundColor: "#fff", padding: 18, borderRadius: 16, flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  totalTexto: { fontSize: 24, fontWeight: "bold" },
  totalPreco: { fontSize: 24, fontWeight: "bold", color: "#940346" },
  botaoLimpar: { backgroundColor: "#940346", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 12 },
  botaoTexto: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  botaoVoltar: { backgroundColor: "#000", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  voltarTexto: { color: "#ff69b4", fontSize: 18, fontWeight: "bold" },
});