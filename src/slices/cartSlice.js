import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  image: localStorage.getItem("image")
    ? JSON.parse(localStorage.getItem("image"))
    : "",
  text: localStorage.getItem("text")
    ? JSON.parse(localStorage.getItem("text"))
    : "",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToImage: (state, action) => {
      const url = action.payload
      state.image = url ;
      localStorage.setItem("image", JSON.stringify(state.image))
      toast.success("Logo added successfully")
    },
    removeFromImage: (state) => {
        state.image = "" ;
        localStorage.setItem("image", JSON.stringify(state.image))
        toast.success("image removed successfully")
      
    },
    addToText: (state, action) => {
      const text = action.payload
      state.text = text ;
      localStorage.setItem("text", JSON.stringify(state.text))
      toast.success("text added successfully")
    },
    removeFromText: (state) => {
      const k = "" ;
        state.text = k ;
        localStorage.setItem("text", JSON.stringify(k))
        toast.success("text removed successfully")
      
    },
    
  },
})

export const { addToImage, removeFromImage, addToText , removeFromText } = cartSlice.actions

export default cartSlice.reducer
