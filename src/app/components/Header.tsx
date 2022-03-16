import React from 'react';
import styled from 'styled-components';

const UnderlinedHeader = styled.header`
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid #f3f3f3;
`;

/**
 * ヘッダー
 * @returns ヘッダーコンポーネント
 */
export default function Header() {
  return (
    <UnderlinedHeader>WORDLE</UnderlinedHeader>
  );
}