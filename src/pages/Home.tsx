import { AlertBtn } from '../components/AlertBtn'
import React from 'react';
import styled from 'styled-components';

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Text color='gray'>これはHomeです。これはHomeです。これはHomeです。これはHomeです。これはHomeです。これはHomeです。これはHomeです。これはHomeです。これはHomeです。</Text>
      <AlertBtn />
    </>
  );
}

const Text = styled.p`
  padding: 30px;
  color: ${(props: { color: string }) => props.color}
`