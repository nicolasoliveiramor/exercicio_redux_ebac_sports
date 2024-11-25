import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoProps } from '../../App'

type FavoritoState = {
  itens: ProdutoProps[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<ProdutoProps>) => {
      const produto = action.payload
      const existe = state.itens.find((item) => item.id === produto.id)

      if (existe) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
