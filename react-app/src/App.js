import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/Login'
import User from './Components/User'
import Create from "./Components/Create"
import Update from "./Components/Update"
import Trade from "./Components/Trade"
import Tradecreate from "./Components/Tradecreate"
import Tradeupdate from "./Components/Tradeupdate"
import WishList from "./Components/WishList"
import IssueUpdate from "./Components/IssueUpdate"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/wishlist/:userName" element={<WishList />} />
        <Route path="/trade/:id" element={<Trade />} />
        <Route path="/tradecreate/:id" element={<Tradecreate />} />
        <Route path="/tradeupdate/:id" element={<Tradeupdate/>} />
        <Route path="/IssueUpdate" element={<IssueUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
