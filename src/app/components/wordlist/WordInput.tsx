import React, { useEffect, useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { submitWord } from "../../../features/game/gameSlice";
import Word from "./Word";

/**
 * キー入力を受け付ける Word コンポーネント
 * 
 * 入力中の値はこのコンポーネントのステートとして保持、
 * 確定するときに submitWord アクションをディスパッチする。
 * @returns WordInput
 */
export default function WordInput() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const valueRef = useRef(''); // ここの valueRef は何度レンダーされても同じオブジェクトを参照している
  valueRef.current = value;

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const key = event.key;

    const currentValue = valueRef.current; // valueRef を経由して最新の値を取得
    if (key.match(/^[a-zA-Z]$/) && currentValue.length < 5) {
      setValue(currentValue + key.toUpperCase());
    } else if (key === 'Enter' && currentValue.length === 5) {
      dispatch(submitWord(currentValue));
      setValue('');
    } else if (['Backspace', 'Delete'].includes(key)) {
      setValue(currentValue.slice(0, -1));
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  // 実体は Word コンポーネントそのまま
  return <Word value={value} />;
}