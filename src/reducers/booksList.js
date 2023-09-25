import { createSlice } from "@reduxjs/toolkit";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const initialState = {
  cat: {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  },
  selected: "fantasy",
  searchResult: [],
  isLoading: false,
};

export const booksList = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload
      //state.searchResult = state.cat[action.payload]
    },
    searchData: (state,action) => {
      state.searchResult = state.cat[state.selected].filter((book) => book.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelected,searchData,isSelected } = booksList.actions;

export default booksList.reducer;
