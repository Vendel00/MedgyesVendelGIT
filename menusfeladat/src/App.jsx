import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'
import Contact from './Contact.jsx'
import Services from "./Services.jsx"
import About from "./About.jsx"

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/services" element = {<Services/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
