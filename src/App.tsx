import './style.css'
import {Title} from "./assets/Title.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.js";
import {Contact} from "./pages/Contact.js";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
