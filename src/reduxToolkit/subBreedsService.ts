import { createSlice } from "@reduxjs/toolkit";

const subBreedsService = createSlice({
  name: "subBreeds",

  initialState: {
   subBreeds:[],
   breedSubBreed: {}
  },

  reducers: {
    setSubBreeds: (state, { payload }) => 
    // console.log('payload :>> ', payload),
    {
      state.subBreeds = payload?.data?.message || []
    },
    setBreedsSubBreeds: (state, { payload }) => 
    // console.log('payload :>> ', payload),
    {
      state.breedSubBreed = payload || 
      {}
    },
  },
});

export const { setSubBreeds,setBreedsSubBreeds } = subBreedsService.actions;

export default subBreedsService.reducer;
