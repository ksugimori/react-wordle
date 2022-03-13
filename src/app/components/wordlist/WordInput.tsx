import React, { useEffect, useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { submitWord } from "../../../features/game/gameSlice";
import Word from "./Word";

export default function WordInput() {
  const [value, setValue] = useState('');
  const valueRef = useRef('');
  valueRef.current = value;
  const dispatch = useAppDispatch();

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    const key = event.key;

    const current = valueRef.current;
    if (key.match(/^[a-zA-Z]$/) && current.length < 5) {
      setValue(current + key);
    } else if (key === 'Enter' && current.length === 5) {
      dispatch(submitWord(current));
      setValue('');
    } else if (['Backspace', 'Delete'].includes(key)) {
      setValue(current.slice(0, -1));
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <Word value={value} />
  );
}