import React from "react";
import styled from "styled-components";

const Container = styled.div<{ active: boolean }>`
  display: flex;
  background-color: ${props => props.active ? '#ffd6d6' : 'transparent'}
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
  const chars = Array(5).fill('')
    .map((_, i) => value.charAt(i).toUpperCase())
    .map((c, i) => <Char key={i} empty={!c}>{c}</Char>);

  return <Container active={focus}>{chars}</Container>;
}