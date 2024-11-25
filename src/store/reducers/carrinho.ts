import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoProps } from '../../App'

type CarrinhoState = {
  itens: ProdutoProps[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarOuRemoverDoCarrinho: (
      state,
      action: PayloadAction<ProdutoProps>
    ) => {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )

      if (produtoExistente) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarOuRemoverDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
