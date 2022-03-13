import React from "react";
import styled from "styled-components";

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
}

export default function Word({ value }: Props) {
  const chars = Array(5).fill('')
    .map((_, i) => value.charAt(i).toUpperCase())
    .map((c, i) => <Char key={i} empty={!c}>{c}</Char>);

  return <div className="flex-row">{chars}</div>;
}