import {AiFillDelete} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast";
const CartItem = ({item,index}) => {
const dispatch= useDispatch();

const RemoveItem=()=>{
  dispatch(remove(item.id));
  toast.success("Item removed");
}
  return (
<div className="flex relative gap-10  h-10/12 ">
  <div className="flex flex-row border-b-2 border-gray-900 gap-6 h-10/12">
    <div className="m-[1rem] flex ">
      <img src={item.image} alt=""  className=" h-[200px] w-[300px] mt-4"/>
    </div>
    <div className="mt-4">
      <h1 className="text-lg text-slate-700 font-semibold">{item.title}</h1>
      <h1 className="text-md text-slate-500 ">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
      <div className="flex flex-row justify-between items-center gap-x-4 w-10/12 relative mx-auto mt-6">
      <p className="text-green-700 font-semibold">${item.price }</p>
        <AiFillDelete onClick={RemoveItem} className="bg-pink-200 rounded-full text-red h-5 w-5 cursor-pointer" / >
      </div>
    </div>
  </div>
</div>
  );
};

export default CartItem;
