import React from 'react';
import styled from '@emotion/styled';

interface User {
  name: string;
  birth: string;
  contact: string;
  address: string;
}

export default function UserCard({ name, birth, contact, address }: User) {
  return (
    <>
      <Container>
        <UserImg src="https://cdn.pixabay.com/photo/2022/04/03/13/54/woman-7109043_1280.jpg"></UserImg>
        <UserInfoBox>
          <UserName>{name}</UserName>
          <UserAddress>{address}</UserAddress>
        </UserInfoBox>
        <UserInfoBox>
          <UserBirth>{birth}</UserBirth>
        </UserInfoBox>
        <UserInfoBox>
          <UserContact>{contact}</UserContact>
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
`;
