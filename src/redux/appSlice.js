import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brandName: "SnapTap",
    gradientColor:true,
    // brandColor1: "#215582",
    // brandColor2:"#9ccdf7",
    brandColor1: "skyblue",
    brandColor2:"pink",
    primaryColor:null,
    secondaryColor:null,
    brandColor3:null,
}

export const appSlice = createSlice({
  name: 'app',  
    initialState,
    reducers:{
        setBrandColor2:(state, action)=>{
            state.brandColor2=action.payload
        },
        setBrandColor3:(state, action)=>{                       
            state.brandColor3=action.payload
        },
        setBrandName:(state, action)=>{                       
            state.brandName=action.payload
        }

    }
})

export const { setBrandColor2, setBrandColor3, setBrandName } = appSlice.actions;
export default appSlice.reducer;