import React from 'react';
import styled from 'styled-components';

export function Page2() {
  return (
    <>
      <h1>Page2</h1>
      <Text color='teal'>これはPage2です。これはPage2です。これはPage2です。これはPage2です。これはPage2です。これはPage2です。これはPage2です。これはPage2です。これはPage2です。</Text>
    </>
  );
}

const Text = styled.p`
  padding: 30px;
  color: ${(props: { color: string }) => props.color}
`