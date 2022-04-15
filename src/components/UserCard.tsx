import React from 'react';
import styled from '@emotion/styled';

interface User {
  thumbnail: string;
}

export default function UserCard({ thumbnail }: User) {
  return (
    <>
      <Container>
        <UserImg src={thumbnail}></UserImg>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 400px;
  height: 450px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 50px;
`;

const UserImg = styled.img`
  width: 400px;
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
