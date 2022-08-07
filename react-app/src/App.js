import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/Login'
import User from './Components/User'
import Create from "./Components/Create"
import Update from "./Components/Update"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
