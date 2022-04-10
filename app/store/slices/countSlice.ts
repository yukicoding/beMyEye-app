import {createSlice} from '@reduxjs/toolkit'

interface NavSliceProps {
    value:number
}

const  initialState:NavSliceProps = {
   value:0
}
export const countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
       increase:(state,action)=>{
           state.value+= action.payload.value
       },
       descrease:(state,action)=>{
        state.value-= action.payload.value

       }
    }
})

export const {increase,descrease}  = countSlice.actions;
//selector



export default countSlice.reducer

