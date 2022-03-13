import React from "react";
import { useAppSelector } from '../../hooks';
import { selectWords } from "../../../features/game/gameSlice";

import Word from "./Word";

import styled from "styled-components";
import WordInput from "./WordInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

function sequence(n: number) {
  if (n <= 0) {
    return [];
  }

  return Array(n).fill(null).map((_, i) => i);
}

export default function WordList() {
  const words = useAppSelector(selectWords);

  const wordComponents = words.map((w, i) => <Word key={i} value={w} />);
  const emptyWordComponents = sequence(5 - words.length).map((_, i) => <Word key={i} value={''} />);

  return (
    <Container>
      <div className="flex-col">
        {wordComponents}
        <WordInput />
        <>
          {emptyWordComponents}
        </>
      </div>
    </Container>
  );
}