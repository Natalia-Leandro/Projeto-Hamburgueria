import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { adicionarProdutoCarrinho, criarTabelaCarrinho } from "./database/db";

type Promocao = {
  id: string;
  nome: string;
  categoria: string;
  imagem: string;
  preco: string;
};

export default function Promocoes() {
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);
  const [loading, setLoading] = useState(true);

  criarTabelaCarrinho();

  async function buscarPromocoes() {
    try {
      const response = await fetch(
        "https://6a282b5c4e1e783349a534c8.mockapi.io/promocoes"
      );

      const data = await response.json();
      setPromocoes(data);
    } catch (error) {
      alert("Erro ao buscar promoções");
    } finally {
      setLoading(false);
    }
  }

  function adicionarAoCarrinho(item: Promocao) {
    adicionarProdutoCarrinho(item.nome, item.preco, `Promoção - ${item.categoria}`);
    alert("Promoção adicionada ao carrinho!");
  }

  useEffect(() => {
    buscarPromocoes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#940346" />
        <Text>Carregando promoções...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Promoções</Text>

      <FlatList
        data={promocoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.categoria}>Categoria: {item.categoria}</Text>
              <Text style={styles.preco}>{item.preco}</Text>

              <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={() => adicionarAoCarrinho(item)}
              >
                <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push("/")}>
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8abcf", padding: 20 },
  titulo: { fontSize: 32, fontWeight: "bold", color: "#940346", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#fff", borderRadius: 20, padding: 16, marginBottom: 18, flexDirection: "row", alignItems: "center" },
  imagem: { width: 130, height: 130, borderRadius: 16 },
  info: { flex: 1, marginLeft: 20, gap: 8 },
  nome: { fontSize: 22, fontWeight: "bold", color: "#000" },
  categoria: { fontSize: 16, color: "#555" },
  preco: { fontSize: 24, fontWeight: "bold", color: "#8e0866" },
  botaoAdicionar: {  backgroundColor: "#940346",  paddingVertical: 8, paddingHorizontal: 20, borderRadius: 7,  alignItems: "center", alignSelf: "center",  marginTop: 5, width: 220,},
  textoBotao: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  botaoVoltar: { backgroundColor: "#000", padding: 14, borderRadius: 12, alignItems: "center", marginTop: 10 },
  textoVoltar: { color: "#ff69b4", fontSize: 18, fontWeight: "bold" },
  loading: { flex: 1, justifyContent: "center", alignItems: "center", gap: 10 },
});