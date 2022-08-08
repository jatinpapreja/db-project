import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Login from './Components/Login'
import User from './Components/User'
import Create from "./Components/Create"
import Update from "./Components/Update"
import Trade from "./Components/Trade"

function App() {
  const params = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/trade/:id" element={<Trade id={params.id} />} />
        <Route path="/tradecreate" element={<Tradecreate />} />
        <Route path="/tradeupdate" element={<Tradeupdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
