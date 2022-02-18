import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GameState {
  /** ワードのリスト */
  words: string[];

  /** 現在入力中のワード */
  current: string;

  /** ステータス */
  status: 'play' | 'win' | 'lose';

  // TODO: ハズレ文字のリストとかも持つ？
}

const initialState: GameState = {
  words: ['a', 'bc', 'def'], // TODO: ここ空に
  current: '',
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
    },

    inputChar: (state, action: PayloadAction<string>) => {
      if (state.current.length < 5) {
        state.current += action.payload;
      }
    }
  }
});

//
// Actions
//
export const { addWord, reset, inputChar } = gameSlice.actions;

//
// Selectors
//
export const selectWords = (state: RootState) => state.game.words;
export const selectStatus = (state: RootState) => state.game.status;
export const selectCurrent = (state: RootState) => state.game.current;

//
// Reducer
//
export default gameSlice.reducer;