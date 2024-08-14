import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const arrayStore = createSlice({
  name: 'array',
  initialState,
  reducers: {
   addItem: (state,action) =>{
    // state.items += action.payload;
    state.items = state.items.concat(action.payload);
   },
   clearItems: (state) => {
    state.items = []; // Clears the array
  },
  },
})

// Action creators are generated for each case reducer function
export const {addItem, clearItems} = arrayStore.actions

export default arrayStore.reducer