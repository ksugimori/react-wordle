import React from "react";
import { useAppSelector } from '../../app/hooks';
import { selectWords } from "../../features/game/gameSlice";

import Word from "./Word";

import styled from "styled-components";
import WordInput from "./WordInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function WordList() {
  const words = useAppSelector(selectWords);

  const wordComponents = Array(6).fill('')
    .map((_, i) => words[i] || '')
    .map((w, i) => <Word key={i} value={w} />);

  return (
    <Container>
      <List>
        {wordComponents}
        <WordInput />
      </List>
    </Container>
  );
}