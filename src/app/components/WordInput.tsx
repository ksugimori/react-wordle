import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { inputCharacter, submitWord, deleteCharacter, selectCurrent } from "../../features/game/gameSlice";
import Word from "./Word";

export default function WordInput() {
  const current = useAppSelector(selectCurrent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const key = event.key;

      if (key.match(/^[a-zA-Z]$/)) {
        dispatch(inputCharacter(key));
      } else if (key === 'Enter') {
        dispatch(submitWord());
      } else if (['Backspace', 'Delete'].includes(key)) {
        dispatch(deleteCharacter());
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [dispatch]);

  return (
    <Word value={current} />
  );
}