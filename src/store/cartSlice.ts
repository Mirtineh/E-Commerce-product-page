import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";
interface cartState {
  quantity: number;
}
const initialState: cartState = {
  quantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    emptyCart: (state) => {
      state.quantity = 0;
    },
  },
});
//Action Creaters
export const { addToCart, emptyCart } = cartSlice.actions;
//Selectors
export const selectQuantity = (state: RootState) => state.quantity;
//Reducer
export default cartSlice.reducer;
