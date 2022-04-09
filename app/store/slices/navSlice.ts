import {createSlice} from '@reduxjs/toolkit'

interface NavSliceProps {
    origin:string;
    destination:string;
    travelTimeInformation:string;
}

const  initialState:NavSliceProps = {
    origin:'',
    destination:'',
    travelTimeInformation:''
}
export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin:(state,action)=>{
            state.origin = action.payload
        },
        setDestination:(state,action)=>{
            state.destination = action.payload
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation = action.payload
        }
    }
})

export const {setOrigin,setDestination,setTravelTimeInformation}  = navSlice.actions;
//selector

export const selectOrigin = (state:any)=>state.nav.origin;
export const selectDestination = (state:any)=>state.nav.origin;
export const selectTravelTimeInformation = (state:any)=>state.nav.origin;

export default navSlice.reducer

