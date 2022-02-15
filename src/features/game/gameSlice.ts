import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GameState {
  /** ワードのリスト */
  words: string[];

  /** ステータス */
  status: 'play' | 'win' | 'lose';

  // TODO: ハズレ文字のリストとかも持つ？
}

const initialState: GameState = {
  words: ['a', 'bc', 'def'], // TODO: ここ空に
  status: 'play'
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      if (state.status === 'play') {
        state.words.push(action.payload);
      }
    },

    reset: (state) => {
      state.words = [];
      state.status = 'play'
    }
  }
});

//
// Actions
//
export const { addWord, reset } = gameSlice.actions;

//
// Selectors
//
export const selectWords = (state: RootState) => state.game.words;
export const selectStatus = (state: RootState) => state.game.status;

//
// Reducer
//
export default gameSlice.reducer;