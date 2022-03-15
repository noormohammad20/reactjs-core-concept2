import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Product></Product>
    </div>
  )
}

function Product(props) {
  return (
    <div>
      <h3>name:</h3>
      <p>price:</p>
    </div>

  )
}

export default App
