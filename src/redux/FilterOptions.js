import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchByText: "",
  areaList: [],
  buildList: [],
  build: null,
  area: null,
  bedroom: [],
  showEligibleOnly: "Y",
  groundFloor: "N",
  accesible: "N",
  sheltered: "N",
  parking: "N",
  garden: "N",
  advanceFilter: [],
  filterFlag: false,
};

export const FilterOptions = createSlice({
  name: "FilterOptions",
  initialState,
  reducers: {
    setSearchByText: (state, action) => {
      state.searchByText = action.payload;
    },
    setBuild: (state, action) => {
      state.build = action.payload;
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setBedroom: (state, action) => {
      state.bedroom = action.payload;
    },
    setShowEligibleOnly: (state, action) => {
      state.showEligibleOnly = action.payload;
    },
    setGroundFloor: (state, action) => {
      state.groundFloor = action.payload;
    },
    setAccesible: (state, action) => {
      state.accesible = action.payload;
    },
    setSheltered: (state, action) => {
      state.sheltered = action.payload;
    },
    setParking: (state, action) => {
      state.parking = action.payload;
    },
    setGarden: (state, action) => {
      state.garden = action.payload;
    },
    setAreaList: (state, action) => {
      state.areaList = action.payload;
    },
    setBuildList: (state, action) => {
      state.buildList = action.payload;
    },
    setAdvanceFilter: (state, action) => {
      state.advanceFilter = action.payload;
    },
    setFilterFlag: (state, action) => {
      state.filterFlag = action.payload;
    },
  },
});

export const {
  setSearchByText,
  setBuild,
  setArea,
  setBedroom,
  setShowEligibleOnly,
  setGroundFloor,
  setAccesible,
  setSheltered,
  setParking,
  setGarden,
  setAreaList,
  setBuildList,
  setFilterFlag,
  setAdvanceFilter,
} = FilterOptions.actions;

export default FilterOptions.reducer;
