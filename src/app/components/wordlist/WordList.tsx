import React from "react";
import { useAppSelector } from '../../hooks';
import { selectWords } from "../../../features/game/gameSlice";

import Word from "./Word";

import styled from "styled-components";
import WordInput from "./WordInput";
import ArrayUtils from "../../utils/ArrayUtils";
import FixedWord from "./FixedWord";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

export default function WordList() {
  const words = useAppSelector(selectWords);

  const wordComponents = words.map((w, i) => <FixedWord key={i} value={w} />);
  const emptyWordComponents = ArrayUtils.sequence(5 - words.length).map(i => <Word key={i} />);

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