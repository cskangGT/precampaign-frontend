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
  width: 275px;
  height: 450px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 50px;
`;

const UserImg = styled.img`
  width: 300px;
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const UserInfoBox = styled.div`
  width: 300px;
  height: 40px;
  background-color: blue;
  display: flex;
`;

const UserInfo = styled.div`
  width: 150px;
  height: 40px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

const UserName = styled(UserInfo)``;

const UserAddress = styled(UserInfo)``;

const UserBirth = styled(UserInfo)`
  width: 300px;
`;

const UserContact = styled(UserInfo)`
  width: 300px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
