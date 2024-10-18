import Products from './components/products/products'
import './App.css'

function App() {
  const information = {
    message: 'secret',
    phone: 23433456676
  }

  return (
    <>
      <Products info={information}></Products>
      <h1>Hello APp.jsx</h1>
    </>
  )
}

export default App
