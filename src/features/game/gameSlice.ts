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
  words: [],
  status: 'play'
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    /**
     * Word を確定する。
     * @param state GameState
     */
    submitWord: (state, action: PayloadAction<string>) => {
      const word = action.payload;
      if (state.status === 'play' && word.length === 5) {
        state.words.push(word);
      }
    },

    /**
     * ゲームをリセットする。
     * @param state GameState
     */
    reset: (state) => {
      Object.assign(state, initialState);
    }
  }
});

//
// Actions
//
export const { submitWord, reset } = gameSlice.actions;

//
// Selectors
//
export const selectWords = (state: RootState) => state.game.words;
export const selectStatus = (state: RootState) => state.game.status;

//
// Reducer
//
export default gameSlice.reducer;