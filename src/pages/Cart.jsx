import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(
      cart.reduce((acc, curr) => (acc += curr.price),0))}, [cart])
  return (
    <div className="flex flex-row justify-center items-center">
      {
        cart.length > 0 ?
          (<div className="flex flex-row gap-x-8 w-9/12 max-h-[1080px] mt-[2rem] ">
            <div className="w-1/2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} Cartindex={index} />
                })
              }
            </div>
            <div className="flex flex-col justify-between h-[400px]">
              <div className="flex flex-col ">
              <p className="text-2xl text-green-600 font-semibold">Your Cart</p>
              <h2 className="text-3xl text-green-600 font-semibold">
                Summary
              </h2>
              <p className="text-md font-semibold text-slate-500">Total Item : {cart.length}</p>
            </div>
            <div>
              <div className="flex flex-col ">
              <p className=" text-slate-700 text-xl font-bold">Total Amount :${totalAmount}</p>
              <button className="text-green-700 rounded-lg cursor-pointer border-2 px-6 py-2 border-green-700 hover:bg-green-600 hover:text-slate-100 mt-2">CheckOut</button>
                </div>
            </div>
                </div>
          </div>

          ) :
          (
            <div className="flex flex-col  gap-x-3 mx-auto text-center relative top-[15rem]">
              <h2 className="mb-2 text-green-800 font-semibold">No Item !</h2>
              <NavLink to="/" >
                <button className="text-green-700 rounded-lg cursor-pointer border-2 px-6 py-2 border-green-700 hover:bg-green-600 hover:text-slate-100 ">Shop Now</button>
              </NavLink>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
