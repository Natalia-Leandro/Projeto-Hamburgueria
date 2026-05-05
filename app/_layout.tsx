import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen name="index" options={{ title: "Tela Inicial" }} />

      
      <Stack.Screen name="lista" options={{ title: "Sanduíches" }} />
      <Stack.Screen name="produto/[id]" options={{ title: "Detalhe Sanduíche" }} />

      
      <Stack.Screen name="bebidas" options={{ title: "Bebidas" }} />
      <Stack.Screen name="bebida/[id]" options={{ title: "Detalhe Bebida" }} />

      
      <Stack.Screen name="pizzas" options={{ title: "Pizzas" }} />
      <Stack.Screen name="pizza/[id]" options={{ title: "Detalhe Pizza" }} />

      
      <Stack.Screen name="doces" options={{ title: "Doces" }} />
      <Stack.Screen name="doce/[id]" options={{ title: "Detalhe Doce" }} />

      
      <Stack.Screen name="outros" options={{ title: "Outros" }} />
      <Stack.Screen name="outro/[id]" options={{ title: "Detalhe Outros" }} />
    </Stack>
  );
}