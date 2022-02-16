import React from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectWords, addWord } from "../../features/game/gameSlice";

import Word from "./Word";

import styled from "styled-components";

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
  const dispatch = useAppDispatch();

  const next = words.length;

  const wordComponents = Array(6).fill('')
    .map((_, i) => words[i] || '')
    .map((w, i) => <Word key={i} value={w} focus={next === i} />);

  return (
    <Container onClick={() => dispatch(addWord("abcde"))}>
      <List>
        {wordComponents}
      </List>
    </Container>
  );
}