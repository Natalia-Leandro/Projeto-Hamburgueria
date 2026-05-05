import { pizzaType } from "../types/pizzaType";

export const pizzas: pizzaType[] = [
  { id: 0, titulo: "Calabresa", descricao: "Calabresa com queijo", preco: "R$39.90", imagem: require("../assets/images/pizza1.jpg") },
  { id: 1, titulo: "Mussarela", descricao: "Muito queijo", preco: "R$34.90", imagem: require("../assets/images/pizza2.jpg") },
  { id: 2, titulo: "Frango com Catupiry", descricao: "Frango desfiado com catupiry", preco: "R$44.90", imagem: require("../assets/images/pizza3.jpg") },
  { id: 3, titulo: "Portuguesa", descricao: "Presunto, ovo, cebola e queijo", preco: "R$46.90", imagem: require("../assets/images/pizza4.jpg") },
  { id: 4, titulo: "4 Queijos", descricao: "Mussarela, parmesão, provolone e catupiry", preco: "R$49.90", imagem: require("../assets/images/pizza5.jpg") },
  { id: 5, titulo: "Marguerita", descricao: "Tomate, queijo e manjericão", preco: "R$42.90", imagem: require("../assets/images/pizza6.jpg") },
  { id: 6, titulo: "Bacon", descricao: "Queijo com bacon crocante", preco: "R$47.90", imagem: require("../assets/images/pizza7.jpg") },
  { id: 7, titulo: "Pepperoni", descricao: "Pepperoni com queijo derretido", preco: "R$48.90", imagem: require("../assets/images/pizza8.jpg") },
  { id: 8, titulo: "Vegetariana", descricao: "Legumes frescos com queijo", preco: "R$41.90", imagem: require("../assets/images/pizza9.jpg") },
  { id: 9, titulo: "Chocolate", descricao: "Pizza doce de chocolate", preco: "R$36.90", imagem: require("../assets/images/pizza10.jpg") },
];