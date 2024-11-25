import * as S from './styles'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: {
    id: number
    nome: string
    preco: number
    imagem: string
  }
  favoritar: () => void
  estaNosFavoritos: boolean
  aoComprar: () => void
  estaNoCarrinho: boolean
}

const Produto = ({
  produto,
  estaNosFavoritos,
  estaNoCarrinho,
  favoritar,
  aoComprar
}: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>{paraReal(produto.preco)}</S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {estaNosFavoritos
          ? '❤️ Remover dos favoritos'
          : '🤍 Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={aoComprar} type="button">
        {estaNoCarrinho ? '🛒 Remover do carrinho' : '🛍️ Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
