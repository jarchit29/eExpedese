import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id:null,
  partnerName:null,
  mfaPortalType:null,
  mfaPartnerIdHr:null,
  mfaIsMfaEnabled:null,
  mfaIsThirdPartyConfigured:null,
  isReduxEmpty:true,

};

export const PartnerIdSlice = createSlice({
  name: "PartnerId",
  initialState,
  reducers: {
  setPartnerId: (state, action) => {
      state.Id = action.payload;
    },

    setPartnerName:(state,action)=>{
      state.partnerName =action.payload;

    },
    setMfaPortalType:(state,action)=>{

      state.mfaPortalType = action.payload;
    
    },
    setMfaIsMfaEnabled:(state,action)=>{

      state.mfaIsMfaEnabled = action.payload;
    
    },
    setMfaIsThirdPartyConfigured:(state,action)=>{

      state.mfaIsThirdPartyConfigured = action.payload;
    
    },
    setMfaPartnerIdHr:(state,action)=>{

      state.mfaPartnerIdHr = action.payload;
    
    },
    setIsReduxEmpty:(state,action)=>{

      state.isReduxEmpty= action.payload;

    }

    
  },
});

export const { setPartnerId,setPartnerName,setIsReduxEmpty,setMfaIsMfaEnabled,setMfaPartnerIdHr,setMfaIsThirdPartyConfigured,setMfaPortalType} = PartnerIdSlice.actions;

export default PartnerIdSlice.reducer;


// Extract and export each action creator by name








