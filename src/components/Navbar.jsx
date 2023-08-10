import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
const Navbar = () => {
const {cart} =useSelector((state)=>state);
  return (
<nav className="flex justify-between items-center  h-20 max-w-6xl mx-auto">
  <NavLink to="/" >
  <div >
  <img src="logo.png"  className=" w-[200px] h-[70px] " alt="item" />
  </div>
  </NavLink>
<div className="flex flex-row justify-center items-center gap-2 font-medium text-slate-100 mr-5 space-x-6" >
  <NavLink to="/" >
  <p>Home</p>
  </NavLink>
  <NavLink to="/card">
    <div className="relative">
<AiOutlineShoppingCart  className="text-xl"/>{
  cart.length > 0 &&
<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white ">{cart.length}</span>
}
    </div>

  </NavLink>
</div>
</nav>
  );
};

export default Navbar;
