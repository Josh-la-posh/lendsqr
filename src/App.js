import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/main.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
