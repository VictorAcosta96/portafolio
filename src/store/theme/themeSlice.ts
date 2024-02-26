import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  value: string;
}

const initialState: themeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
     
        state.value = action.payload;

    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
