import { ImageSourcePropType } from "react-native";

export type pizzaType = {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: ImageSourcePropType;
};