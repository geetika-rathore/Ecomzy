import React from "react";
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <div className="bg-slate-900 relative">
        <Navbar  />
      </div>
<Routes>
  <Route  path="/" element={<Home />} />
  <Route  path="/card" element={<Cart />} />
</Routes>
    </div>
  );
};

export default App;
