import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./sass/main.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Login />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/:id' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
