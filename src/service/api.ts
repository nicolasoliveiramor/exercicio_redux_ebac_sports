import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ProdutoProps } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<ProdutoProps[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
