import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#ff69b4",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tela Inicial" }} />

      <Stack.Screen name="lista" options={{ title: "Sanduíches" }} />
      <Stack.Screen name="produto/[id]" options={{ title: "Detalhes Sanduíche" }} />

      <Stack.Screen name="carrinho" options={{ title: "Carrinho" }} />
      <Stack.Screen name="promocoes" options={{ title: "Promoções" }} />

      <Stack.Screen name="bebidas" options={{ title: "Bebidas" }} />
      <Stack.Screen name="bebidas/[id]" options={{ title: "Detalhes Bebidas" }} />

      <Stack.Screen name="pizzas" options={{ title: "Pizzas" }} />
      <Stack.Screen name="pizzas/[id]" options={{ title: "Detalhes Pizzas" }} />

      <Stack.Screen name="doces" options={{ title: "Doces" }} />
      <Stack.Screen name="doces/[id]" options={{ title: "Detalhes Doces" }} />

      <Stack.Screen name="outros" options={{ title: "Outros" }} />
      <Stack.Screen name="outros/[id]" options={{ title: "Detalhes Outros" }} />
    </Stack>
  );
}