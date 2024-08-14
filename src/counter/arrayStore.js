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
   removeItem: (state, action) => {
    state.items = state.items.filter(item => item.name !== action.payload);
  },
  },
})

// Action creators are generated for each case reducer function
export const {addItem, removeItem} = arrayStore.actions

export default arrayStore.reducer