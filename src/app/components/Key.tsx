import React from "react";
import styled, { css } from "styled-components";

type Props = {
  character: string;
}

const Border = styled.div`
  margin: 0.2em;
  width: 3em;
  height: 3.4em;
  line-height: 3.4em;
  font-weight: bold;
  border-radius: 0.3em;
  background-color: #f3f3f3;

  ${(props: { large: boolean }) => props.large && css`
    width: 4.9em;
  `}
`;

export function Key({ character }: Props) {
  const isLarge = character.length > 1;
  const text = isLarge ? character : character.toUpperCase();

  return (
    <Border large={isLarge}>{text}</Border>
  );
}