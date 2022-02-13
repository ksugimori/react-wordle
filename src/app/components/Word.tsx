import React from "react";
import styled from "styled-components";

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
  border: 2px solid #000;

  ${(props: { empty: boolean }) => props.empty && `
    border-color: #ccc;
  `}
`;

type Props = {
  value: string;
}

export default function Word({ value }: Props) {
  const chars = Array(5).fill('')
    .map((_, i) => value.charAt(i).toUpperCase())
    .map((c, i) => <Char key={i} empty={!c}>{c}</Char>);

  return <Container>{chars}</Container>;
}