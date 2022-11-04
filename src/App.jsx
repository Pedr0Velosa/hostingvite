import {
  Routes,
  Route,
} from "react-router-dom";
import Servicos from '../pages/Servicos'
import Locais from '../pages/Locais'
import Valores from '../pages/Valores'
import Navbar from '../src/components/Navbar'
import NotFound from "./components/NotFound";
import '../styles/globals.css'


function App() {


  return (
    <>
        <Routes>
          <Route path="hostingvite.io" element={<Navbar/>}>
            <Route path="servicos" element={<Servicos/>}/>
            <Route path="locais" element={<Locais/>}/>
            <Route path="valores" element={<Valores/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
