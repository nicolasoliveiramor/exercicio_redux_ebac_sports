import { Provider } from 'react-redux'
import { store } from './store'

import Header from './components/Header'
import { GlobalStyle } from './styles'
import ProdutosComponent from './containers/Produtos'

export type ProdutoProps = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosComponent />
      </div>
    </Provider>
  )
}

export default App
