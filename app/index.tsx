import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Delícias Express</Text>

      <Text style={styles.subtitulo}>
        Os melhores sabores em um só lugar 🍔🍕🥤
      </Text>

      <View style={styles.menu}>

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/lista" as any)}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/images/hamburguer.png")}
          />
          <Text style={styles.texto}>Hambúrguer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/pizzas" as any)}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/images/pizzas.png")}
          />
          <Text style={styles.texto}>Pizzas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/bebidas" as any)}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/images/bebidas.png")}
          />
          <Text style={styles.texto}>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/doces" as any)}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/images/doces.png")}
          />
          <Text style={styles.texto}>Doces</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/outros" as any)}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/images/outros.png")}
          />
          <Text style={styles.texto}>Outros</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8abcf",
    padding: 20,
  },

  titulo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#940346",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 22,
    color: "#080708",
    marginBottom: 40,
    textAlign: "center",
  },

  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
  },

  item: {
    alignItems: "center",
  },

  imagem: {
    width: 220,
    height: 220,
    borderRadius: 15,
  },

  texto: {
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 20,
  },
});