import React from 'react';
import Keyboard from './app/components/keyboard/Keyboard';
import './App.css';
import Header from './app/components/Header';
import WordList from './app/components/wordlist/WordList';

function App() {
  return (
    <div className="App">
      <Header />
      <WordList />
      <Keyboard />
    </div>
  );
}

export default App;
