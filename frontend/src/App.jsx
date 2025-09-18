import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'
import Regiok from './Regiok.jsx'

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home/>} />
        <Route path="/regiok" element= {<Regiok/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
