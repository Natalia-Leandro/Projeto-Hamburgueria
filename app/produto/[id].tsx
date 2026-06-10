import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { sandubas } from "../../data/arrayProdutos";
import {
  adicionarProdutoCarrinho,
  criarTabelaCarrinho,
} from "../database/db";

export default function Id() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const produto = sandubas.find((p) => p.id === Number(id));

  if (!produto) {
    return <Text>Não existe esse produto</Text>;
  }

  const produtoSelecionado = produto;

  criarTabelaCarrinho();

  function adicionarAoCarrinho() {
    adicionarProdutoCarrinho(
      produtoSelecionado.titulo,
      produtoSelecionado.preco,
      produtoSelecionado.descricao
    );

    alert("Produto adicionado ao carrinho!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={produtoSelecionado.imagem}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <Text style={styles.nome}>{produtoSelecionado.titulo}</Text>
          <Text style={styles.preco}>{produtoSelecionado.preco}</Text>
          <Text style={styles.descricao}>{produtoSelecionado.descricao}</Text>

          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={adicionarAoCarrinho}
          >
            <Text style={styles.botaoComprarText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Text style={styles.botaoVoltarText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8abcf",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    elevation: 5,
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 18,
  },
  info: {
    flex: 1,
    gap: 14,
  },
  nome: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  preco: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#8e0866",
  },
  descricao: {
    fontSize: 22,
    color: "#555",
  },
  botaoComprar: {
    backgroundColor: "#f10b0b",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  botaoComprarText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  botaoVoltar: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoVoltarText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff69b4",
  },
});