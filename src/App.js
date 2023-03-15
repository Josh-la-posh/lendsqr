import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/main.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  
  return (
    <BrowserRouter>
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
