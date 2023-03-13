import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageId: null,
  messageRead:0,
  messageUnread:0,
  messageAll:0,
  messageSent:0
};

export const ResponseFromMessages = createSlice({
  name: "ResponseFromMessages",
  initialState,
  reducers: {

    setmessageId: (state, action) => {
        state.messageId = action.payload;
    },

    setmessageRead:(state,action)=>{
        state.messageRead=action.payload
    },
    
    setmessageUnread:(state,action)=>{
      state.messageUnread=action.payload
    },
    setmessageSent:(state,action)=>{
      state.messageSent=action.payload
    },
    setmessageAll:(state,action)=>{
      state.messageAll=action.payload
    }
  },
});

export const {setmessageId,setmessageRead,setmessageUnread,setmessageSent,setmessageAll} =
ResponseFromMessages.actions;

export default ResponseFromMessages.reducer;

// Extract and export each action creator by name
