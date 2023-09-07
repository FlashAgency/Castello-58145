import './App.css'
import Navbar from './components/Navbar/Navbar'
import './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
const greeting = "Bienvenido a la tienda más divertida"

return (
  <>
  <Navbar />
  <ItemListContainer greeting={greeting} /> 

  </>
  )
}

export default App
