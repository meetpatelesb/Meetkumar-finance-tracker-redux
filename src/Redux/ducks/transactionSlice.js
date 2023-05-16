import { createSlice, current, combineReducers } from "@reduxjs/toolkit";
import { defaultTransactionData } from "../../utils/constant";
const initialState = defaultTransactionData;

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { data } = action.payload;
      state.push(data);
    },
    updateTransaction: (state, action) => {
      const { updateData, id } = action.payload;
      const index = state
        .map((item) => item)
        .findIndex((trans) => trans.id == id);
      state[index] = updateData;
      // state[id-1] = updateData;
    },
    deleteTransaction: (state, action) => {
      const { id } = action.payload;
      const clone = [...state];
      const deletedData = clone.filter((value) => value.id !== parseInt(id));
      return deletedData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteTransaction, addTransaction, updateTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
