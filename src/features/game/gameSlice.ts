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
    /**
     * 文字を入力する。
     * @param state GameState
     * @param action 入力する文字を持ったアクション
     */
    inputCharacter: (state, action: PayloadAction<string>) => {
      if (state.current.length < 5) {
        state.current += action.payload;
      }
    },

    /**
     * 文字を削除する。
     * @param state GameState
     */
    deleteCharacter: (state) => {
      if (state.status === 'play') {
        state.current = state.current.slice(0, state.current.length - 1);
      }
    },

    /**
     * Word を確定する。
     * @param state GameState
     */
    submitWord: (state) => {
      if (state.status === 'play' && state.current.length === 5) {
        state.words.push(state.current);
        state.current = '';
      }
    },

    /**
     * ゲームをリセットする。
     * @param state GameState
     */
    reset: (state) => {
      state = initialState;
    }
  }
});

//
// Actions
//
export const { inputCharacter, deleteCharacter, submitWord, reset } = gameSlice.actions;

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