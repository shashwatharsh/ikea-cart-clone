import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [
  // {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   qty: 1,
  // },
  // {
  //   id: 2,
  //   title: "Mens Casual Premium Slim Fit T-Shirts ",
  //   price: 22.3,
  //   image:
  //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //   qty: 1,
  // },
];

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(state);
      const { id, title, price, image, qty } = action.payload;

      // check is there is any item already presnt in the store

      const exitstingitem = state.find((item) => item.id === id);
      if (exitstingitem) {
        exitstingitem.qty += 1;
      } else {
        state.push({ id, title, price, image, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      // Your logic for incrementQty
      const cartId = action.payload;
      const exitstingitem = state.find((item) => item.id === cartId);
      exitstingitem.qty += 1;
    },
    decrementQty: (state, action) => {
      // Your logic for decrementQty
      const cartId = action.payload;
      const exitstingitem = state.find((item) => item.id === cartId);
      if(exitstingitem.qty === 1){
        return state.filter((item) => item.id !== cartId);
      }else{
      exitstingitem.qty -= 1;
      }

    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
