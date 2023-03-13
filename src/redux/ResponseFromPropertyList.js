import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyId: null,
  routingFrom:null,
//   propertyId: 259881753,
  
};

export const ResponseFromPropertyList = createSlice({
  name: "ResponseFromPropertyList",
  initialState,
  reducers: {

    setPropertyId: (state, action) => {
        state.propertyId = action.payload;
    },
    setRoutingFrom:(state,action)=>{
       state.routingFrom=action.payload;
    }
    
  },
});

export const {setPropertyId,setRoutingFrom } =
ResponseFromPropertyList.actions;

export default ResponseFromPropertyList.reducer;

// Extract and export each action creator by name
