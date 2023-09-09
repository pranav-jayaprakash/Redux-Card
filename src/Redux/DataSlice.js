import { createSlice } from "@reduxjs/toolkit";

const allusers=createSlice({
    name:'Collector',
    initialState:{
        Data:[]
    },
    reducers:{
        Adder:(state,action)=>{
            state.Data.push(action.payload)
        }
    }
})

export const {Adder}=allusers.actions
export default allusers.reducer