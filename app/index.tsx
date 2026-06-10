import { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { listarCarrinho } from "./database/db";

export default function Index() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  function carregarQuantidadeCarrinho() {
    const itens = listarCarrinho();
    setQuantidadeCarrinho(itens.length);
  }

  useEffect(() => {
    carregarQuantidadeCarrinho();
  }, []);

  useFocusEffect(() => {
    carregarQuantidadeCarrinho();
  });

  return (
    <View style={styles.container}>
      <View style={styles.botoesTopo}>
        <TouchableOpacity
          style={styles.botaoCarrinho}
          onPress={() => router.push("/carrinho" as any)}
        >
          <Text style={styles.textoCarrinho}>🛒 Carrinho</Text>

          {quantidadeCarrinho > 0 && (
            <View style={styles.bolinha}>
              <Text style={styles.numeroBolinha}>{quantidadeCarrinho}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoPromocoes}
          onPress={() => router.push("/promocoes" as any)}
        >
          <Text style={styles.textoPromocoes}>🔥 Promoções</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Delícias Express</Text>

      <Text style={styles.subtitulo}>
        Os melhores sabores em um só lugar 🍔🍕🥤
      </Text>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.item} onPress={() => router.push("/lista" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/hamburguer.png")} />
          <Text style={styles.texto}>Hambúrguer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/pizzas" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/pizzas.png")} />
          <Text style={styles.texto}>Pizzas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/bebidas" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/bebidas.png")} />
          <Text style={styles.texto}>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/doces" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/doces.png")} />
          <Text style={styles.texto}>Doces</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/outros" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/outros.png")} />
          <Text style={styles.texto}>Outros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8abcf", padding: 20 },
  botoesTopo: { position: "absolute", top: 25, right: 30, flexDirection: "row", gap: 12 },
  titulo: { fontSize: 60, fontWeight: "bold", color: "#940346", marginBottom: 8, textAlign: "center" },
  subtitulo: { fontSize: 22, color: "#080708", marginBottom: 40, textAlign: "center" },
  menu: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 30 },
  item: { alignItems: "center" },
  imagem: { width: 220, height: 220, borderRadius: 15 },
  texto: { textAlign: "center", marginTop: 8, fontWeight: "bold", fontSize: 20 },
  botaoCarrinho: { backgroundColor: "#000", paddingVertical: 12, paddingHorizontal: 22, borderRadius: 18 },
  textoCarrinho: { color: "#ff69b4", fontSize: 18, fontWeight: "bold" },
  botaoPromocoes: { backgroundColor: "#940346", paddingVertical: 12, paddingHorizontal: 22, borderRadius: 18 },
  textoPromocoes: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  bolinha: { position: "absolute", top: -10, right: -10, backgroundColor: "red", width: 28, height: 28, borderRadius: 14, justifyContent: "center", alignItems: "center" },
  numeroBolinha: { color: "#fff", fontWeight: "bold" },
});