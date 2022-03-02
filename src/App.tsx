import React, { useEffect } from 'react';
import Keyboard from './app/components/Keyboard';
import './App.css';
import Header from './app/components/Header';
import WordList from './app/components/WordList';
import { useAppDispatch } from './app/hooks';
import { inputCharacter, deleteCharacter, submitWord } from './features/game/gameSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      const key = event.key;

      if (key.match(/^[a-zA-Z]$/)) {
        dispatch(inputCharacter(key));
      } else if (key === 'Enter') {
        dispatch(submitWord());
      } else if (['Backspace', 'Delete'].includes(key)) {
        dispatch(deleteCharacter());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <WordList />
      <Keyboard />
    </div>
  );
}

export default App;
