import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
const CartItem = ({ cart }) => {
  const { handleDecrement, handleIncrement, handleRemove } = useContext(StateContext);
  const subTotal = Number(cart?.qunatity) * Number(cart?.price);

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-around w-full">
          <div className="">
            <img
              src={cart?.imageUrl}
              className="w-20 h-20 object-contain" alt=""
            />
          </div>

          <div>
            <p className="font-semibold">{cart?.name}</p>
            <p className="text-slate-600 text-sm">{cart?.bundle}</p>
            <p className="text-slate-600 text-sm">Price: {cart?.price} ৳</p>
          </div>
          <div className="rounded-[2px]">
            <span className="mr-2 text-sm">{" "}Qty:</span>
            <span
              onClick={(e) => handleDecrement(e, cart?._id)}
              className=" hover:bg-[#6BA22C] cursor-pointer bg-slate-100 text-lg border-[1px] border-slate-200 ">-</span>
            <span className=" bg-slate-100 border-[1px] border-slate-200">
              {cart?.qunatity}
            </span>
            <span
              onClick={(e) => handleIncrement(e, cart?._id)}
              className="hover:bg-[#6BA22C]  cursor-pointer bg-slate-100 text-lg border-[1px] border-slate-200"
            >
              +
            </span>
          </div>

          <p className="text-slate-600 text-sm">SubTotal: {subTotal} ৳</p>
        </div>
        <div>
          <div
            onClick={(e) => handleRemove(e, cart?._id)}
            className="p-2 text-2xl bg-red-100  rounded-full cursor-pointer hover:bg-red-200 mr-5"
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
