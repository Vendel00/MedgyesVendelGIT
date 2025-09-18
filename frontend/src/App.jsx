import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'
import Regiok from './Regiok.jsx'
import Regisztracio from "./Regisztracio.jsx"

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home/>} />
        <Route path="/regiok" element= {<Regiok/>} />
        <Route path="/regisztracio" element = {<Regisztracio/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
