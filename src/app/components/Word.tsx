import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { selectCurrent } from "../../features/game/gameSlice";

const Container = styled.div`
  display: flex;
`;

const Char = styled.div<{ empty: boolean }>`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2em;
  font-weight: bold;
  margin: 0.1em;
  border: 2px solid ${props => props.empty ? '#ccc' : '#000'}
`;

type Props = {
  value: string;
  focus: boolean;
}

export default function Word({ value, focus }: Props) {
  const current = useAppSelector(selectCurrent);

  const src = focus ? current : value;
  const chars = Array(5).fill('')
    .map((_, i) => src.charAt(i).toUpperCase())
    .map((c, i) => <Char key={i} empty={!c}>{c}</Char>);

  return <Container>{chars}</Container>;
}