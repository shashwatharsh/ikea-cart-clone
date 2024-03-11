"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const CartProduct = ({ cartItem }) => {
  // console.log("Products "+cartItem);
  const dispatch = useDispatch();
  function handleItemDelete(cartId) {
    dispatch(removeFromCart(cartId));
    console.log("item deleted");
  }

  function handleItemIncr(cartId) {
    dispatch(incrementQty(cartId));
  }

  function handleItemDecr(cartId) {
    dispatch(decrementQty(cartId));
  }
  return (
    <div className="">
      {/* <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={cartItem.image}
            width={249}
            height={249}
            alt={cartItem.title}
            className="rounded-xl w-20 h-20"
          />
          <div className="flex flex-col">
            <h2>{cartItem.title}</h2>
            <small>Golden</small>
          </div>
        </div>
        <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
          <button
            onClick={() => handleItemDecr(cartItem.id)}
            className="border-r border-gray-400 py-2 px-4"
          >
            <Minus />
          </button>
          <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
          <button
            onClick={() => handleItemIncr(cartItem.id)}
            className="border-l border-gray-400 py-2 px-4"
          >
            <Plus />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h4> ${cartItem.price}</h4>
          <button onClick={() => handleItemDelete(cartItem.id)}>
            <Trash2 className="text-red-600 w-5 h-5" />
          </button>
        </div>
      </div> */}

      {/* <!-- cart product option --> */}
      <div class=" py-8 flex gap-4 border-b border-slate-400  mb-3 mt-3">
        {/* <!-- image of product --> */}
        <div class="">
          <Image
            src={cartItem.image}
            width={249}
            height={249}
            alt={cartItem.title}
            className="rounded-xl w-32 h-40 ml-8"
          />
          <div className=" border-gray-400 w-32 flex items-center justify-center bg-gray-300 rounded-sm text-sm mx-7 my-2">
            505.390.75
          </div>
        </div>
        {/* <!-- data of product --> */}
        <div class=" h-52 w-[76%] ">
          <ul className=" list-none">
            <li className=" text-xl text-gray-600 font-[700] flex justify-between ">
              {" "}
              <div className="">{cartItem.title}</div>
              <div className="">Rs. {cartItem.price.toFixed(2)}</div>
            </li>
            <li className=" text-gray-800 ">
              Room darkening curtains, 1 pair, yellow-beige
            </li>
            <li className="text-gray-800">135x250 cm (53x98 ")</li>
            <li className=" text-gray-800">1.18 kg per piece</li>
            <li className=" my-2">
              <span className=" box-border h-1 w-10  rounded-xl mr-3 text-xs text-gray-400 bg-slate-400">
                .d.
              </span>
              <span className=" text-gray-500 text-xs">
                Go to checkout for delivery information
              </span>
            </li>
          </ul>
          <div className="flex">
            <div className=" rounded-3xl border border-gray-400 flex gap items-center w-36 m-7 ">
              <button
                onClick={() => handleItemDecr(cartItem.id)}
                className=" border-gray-400 py-2 px-4"
              >
                <Minus />
              </button>
              <p className="flex-grow py-2 px-4 font-bold leading-8">{cartItem.qty}</p>
              <button
                onClick={() => handleItemIncr(cartItem.id)}
                className=" border-gray-400 py-2 px-4"
              >
                <Plus />
              </button>
            </div>
            <div className=" translate-y-10 mx-5">
              <Heart />
            </div>
            <button onClick={() => handleItemDelete(cartItem.id)} className="mx-5">
              <Trash2 className=" " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
