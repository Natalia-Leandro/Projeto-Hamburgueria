import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>

       
        <TouchableOpacity style={styles.item} onPress={() => router.push("/lista" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/hamburguer.jpg")} />
          <Text style={styles.texto}>Hambúrguer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/pizzas" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/pizzas.jpg")} />
          <Text style={styles.texto}>Pizzas</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item} onPress={() => router.push("/bebidas" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/bebidas.jpg")} />
          <Text style={styles.texto}>Bebidas</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item} onPress={() => router.push("/doces" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/doces.jpg")} />
          <Text style={styles.texto}>Doces</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item} onPress={() => router.push("/outros" as any)}>
          <Image style={styles.imagem} source={require("../assets/images/outros.jpg")} />
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
    width: 250,      
    height: 250,     
    borderRadius: 15,
  },

  texto: {
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 20,    
  },
});
