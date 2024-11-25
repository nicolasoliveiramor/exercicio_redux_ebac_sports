import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { useGetProdutosQuery } from '../service/api'
import { RootState } from '../store'
import { favoritar } from '../store/reducers/favoritos'
import { adicionarOuRemoverDoCarrinho } from '../store/reducers/carrinho'

import Produto from '../components/Produto'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const produtoEstaNosFavotiros = (produtoId: number) => {
    return favoritos.some((favorito) => favorito.id === produtoId)
  }

  const produtoEstaNoCarrinho = (produtoId: number) => {
    return carrinho.some((item) => item.id === produtoId)
  }

  const handleComprar = (produto: any) => {
    dispatch(adicionarOuRemoverDoCarrinho(produto))
  }

  const handleFavoritar = (produto: any) => {
    dispatch(favoritar(produto))
  }

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os produtos.</p>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavotiros(produto.id)}
          estaNoCarrinho={produtoEstaNoCarrinho(produto.id)}
          favoritar={() => handleFavoritar(produto)}
          aoComprar={() => handleComprar(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
