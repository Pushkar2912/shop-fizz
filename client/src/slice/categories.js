import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: []
    },
    reducers:{
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    }
})

const categoriesReducer = categorySlice.reducer
const { setCategories } = categorySlice.actions

export{
    categoriesReducer,
    setCategories
}