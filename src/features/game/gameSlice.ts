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
  words: [],
  current: '',
  status: 'play'
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitWord: (state) => {
      if (state.status === 'play') {
        state.words.push(state.current);
        state.current = '';
      }
    },

    deleteCharacter: (state) => {
      if (state.status === 'play') {
        state.current = state.current.slice(0, state.current.length - 1);
      }
    },

    reset: (state) => {
      state.words = [];
      state.status = 'play'
    },

    inputCharacter: (state, action: PayloadAction<string>) => {
      if (state.current.length < 5) {
        state.current += action.payload;
      }
    }
  }
});

//
// Actions
//
export const { submitWord, reset, inputCharacter, deleteCharacter } = gameSlice.actions;

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