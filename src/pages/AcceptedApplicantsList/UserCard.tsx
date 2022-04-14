import React from 'react';
import styled from '@emotion/styled';

interface User {
  thumbnail: string;
  name: string;
  birth: string;
  contact: string;
  address: string;
}

export default function UserCard({ thumbnail, name, birth, contact, address }: User) {
  return (
    <>
      <Container>
        <UserImg src={thumbnail}></UserImg>
        <UserInfoBox>
          <UserName>{name}</UserName>
          <UserAddress>{address.slice(0, 2)}</UserAddress>
        </UserInfoBox>
        <UserInfoBox>
          <UserBirth>
            {birth.slice(0, 4)}년 {birth.slice(4, 6)}월 {birth.slice(6, 8)}일
          </UserBirth>
        </UserInfoBox>
        <UserInfoBox>
          <UserContact>
            {contact.slice(0, 3)}.{contact.slice(3, 7)}.{contact.slice(7, 11)}
          </UserContact>
        </UserInfoBox>
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
