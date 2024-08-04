import { Route, Routes } from 'react-router-dom'
import './App.css'
import LibroDetalle from './views/LibroDetalle'
import Home from './views/Home'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="libros/">
          <Route path=":id" element={<LibroDetalle />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
