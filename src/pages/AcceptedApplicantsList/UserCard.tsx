import React from 'react';
import styled from '@emotion/styled';

interface User {
  name: string;
  snsId: string;
}

export default function UserCard({ name, snsId }: User) {
  return (
    <>
      <Container>
        <UserImg src="https://cdn.pixabay.com/photo/2022/04/03/13/54/woman-7109043_1280.jpg"></UserImg>
        <UserInfo>
          <UserName>{name}</UserName>
          <UserId>@{snsId}</UserId>
        </UserInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 50px 0 50px;
`;

const UserImg = styled.img`
  width: 350px;
`;

const UserInfo = styled.div`
  width: 300px;
  height: 40px;
  background-color: blue;
  display: flex;
`;

const UserName = styled.div`
  width: 150px;
  height: 40px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserId = styled.div`
  width: 150px;
  height: 40px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
