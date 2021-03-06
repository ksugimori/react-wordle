import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

/**
 * ゲームの状態
 */
export interface GameState {
  /** 正解 */
  answer: string;

  /** ワードのリスト */
  words: string[];

  /** ステータス */
  status: 'play' | 'win' | 'lose';

  // TODO: ハズレ文字のリストとかも持つ？
}

/**
 * 初期状態
 */
const initialState: GameState = {
  answer: 'ALONG', // TODO: ランダム化
  words: [],
  status: 'play'
};

/**
 * 
 */
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
export const selectAnswer = (state: RootState) => state.game.answer;

//
// Reducer
//
export default gameSlice.reducer;