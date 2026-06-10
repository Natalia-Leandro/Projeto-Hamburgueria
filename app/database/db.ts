type ProdutoCarrinho = {
  id: number;
  titulo: string;
  preco: string;
  descricao: string;
};

const CHAVE_CARRINHO = "carrinho";

export function criarTabelaCarrinho() {
  const carrinho = localStorage.getItem(CHAVE_CARRINHO);

  if (!carrinho) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify([]));
  }
}

export function adicionarProdutoCarrinho(
  titulo: string,
  preco: string,
  descricao: string
) {
  criarTabelaCarrinho();

  const dados = localStorage.getItem(CHAVE_CARRINHO);
  const carrinho: ProdutoCarrinho[] = dados ? JSON.parse(dados) : [];

  carrinho.push({
    id: Date.now(),
    titulo,
    preco,
    descricao,
  });

  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

export function listarCarrinho() {
  criarTabelaCarrinho();

  const dados = localStorage.getItem(CHAVE_CARRINHO);
  return dados ? JSON.parse(dados) : [];
}

export function limparCarrinho() {
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify([]));
}