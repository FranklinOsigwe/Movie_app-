import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "../src/components/Home";
import Cart from "../src/components/Cart";

  
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
