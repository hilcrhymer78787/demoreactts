import { AlertBtn } from '../components/AlertBtn'
import React from 'react';
import styled from 'styled-components';

export function Page1() {
  return (
    <>
      <h1>Page1</h1>
      <Text color='gray'>これはPage1です。これはPage1です。これはPage1です。これはPage1です。これはPage1です。これはPage1です。これはPage1です。これはPage1です。これはPage1です。</Text>
      <AlertBtn />
    </>
  );
}

const Text = styled.p`
  padding: 30px;
  color: ${(props: { color: string }) => props.color}
`