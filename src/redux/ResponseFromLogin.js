import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  bedroom: null,
  bedspace: null,
  dob:null,
  applicantId:null,
  sessionId:null,
  currencyBand:null,
  currentPoints:null,
  qualifyingDate:null,
  isCblUser:true,
  hrRefId:null,
  hrPass:null,
  logoutText:null,
  doubleAuthenticate:[],
  isMfaFlag:false,


};

export const ResponseFromLogin = createSlice({
  name: "ResponseFromLogin",
  initialState,
  reducers: {
    setApplicantStatus: (state, action) => {
      state.status = action.payload;
    },
    setBedroom: (state, action) => {
      state.bedroom = action.payload;
    },
    setBedspace: (state, action) => {
      state.bedspace = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setApplicantId: (state, action) => {
      state.applicantId = action.payload;
    },
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    setQualifyingDate :(state,action)=>{
      state.qualifyingDate = action.payload;
    },
    setCurrencyBand :(state,action)=>{
      state.currencyBand = action.payload;
    },
    setCurrentPoints :(state,action)=>{
      state.currentPoints = action.payload;
    },
    setIsCblUser :(state,action)=>{
      state.isCblUser=action.payload;
    },
    setDoubleAuthenticate:(state,action)=>{
        state.doubleAuthenticate= action.payload;
    },
    setHrRefId:(state,action)=>{
      state.hrRefId= action.payload;
    },
    setHrPass:(state,action)=>{
      state.hrPass= action.payload;
    },
    setLogoutText:(state,action)=>{
      state.logoutText=action.payload;
    },
    setisMfaFlag:(state,action)=>{
      state.isMfaFlag=action.payload;
    }
    
  },

});

export const { setApplicantStatus, setBedroom, setBedspace ,setDob,setApplicantId,setSessionId,setQualifyingDate,setCurrencyBand,setCurrentPoints,setLogoutText,setIsCblUser,setisMfaFlag,setDoubleAuthenticate,setHrRefId,setHrPass} =
  ResponseFromLogin.actions;

export default ResponseFromLogin.reducer;

// Extract and export each action creator by name
