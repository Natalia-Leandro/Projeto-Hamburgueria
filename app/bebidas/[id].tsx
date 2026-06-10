import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { bebidas } from "../../data/arrayBebidas";
import {
  adicionarProdutoCarrinho,
  criarTabelaCarrinho,
} from "../database/db";

export default function Id() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const bebida = bebidas.find((p) => p.id === Number(id));

  if (!bebida) {
    return <Text>Não existe essa bebida</Text>;
  }

  const bebidaSelecionada = bebida;

  criarTabelaCarrinho();

  function adicionarAoCarrinho() {
    adicionarProdutoCarrinho(
      bebidaSelecionada.titulo,
      bebidaSelecionada.preco,
      bebidaSelecionada.descricao
    );

    alert("Bebida adicionada ao carrinho!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={bebidaSelecionada.imagem}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <Text style={styles.nome}>
            {bebidaSelecionada.titulo}
          </Text>

          <Text style={styles.preco}>
            {bebidaSelecionada.preco}
          </Text>

          <Text style={styles.descricao}>
            {bebidaSelecionada.descricao}
          </Text>

          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={adicionarAoCarrinho}
          >
            <Text style={styles.botaoComprarText}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Text style={styles.botaoVoltarText}>
              Voltar
            </Text>
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