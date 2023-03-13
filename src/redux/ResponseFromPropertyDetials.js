import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bidPeriodId: null,
  longitude: null,
  latitude: null,
  address1:null,
  address2:null,
  area:null,
  bidStatus:"Place bid",
  moreRentDetails:null,
};

export const ResponseFromPropertyDetails = createSlice({
  name: "ResponseFromPropertyDetails",
  initialState,
  reducers: {
    setbidPeriodId: (state, action) => {
      state.bidPeriodId = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setAddress1:(state,action)=>{
      state.address1 = action.payload;
    },
    setAddress2:(state,action)=>{
      state.address2 = action.payload;
    },
    setArea:(state,action)=>{
      state.area = action.payload;
    },
    setBidStatus:(state,action)=>{
    
      state.bidStatus = action.payload;

    },
    setMoreRentDetails :(state,action)=>{

      state.moreRentDetails=action.payload;
    }
  },
});

export const { setbidPeriodId,setLongitude,setLatitude,setArea,setAddress2,setAddress1,setBidStatus,setMoreRentDetails} = ResponseFromPropertyDetails.actions;

export default ResponseFromPropertyDetails.reducer;

// Extract and export each action creator by name
