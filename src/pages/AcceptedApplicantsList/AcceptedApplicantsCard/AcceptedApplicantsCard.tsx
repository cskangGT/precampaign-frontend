import React from 'react';
import styled from '@emotion/styled';
import { AcceptedApplicantsCardprop } from '../../Types/types';

export default function UserCard({
  thumbnail_url,
  name,
  gender,
  birthdate,
  contact,
  address,
}: AcceptedApplicantsCardprop) {
  return (
    <>
      <Container>
        <UserImg src={thumbnail_url}></UserImg>
        <UserInfoBox>
          <UserName>{name}</UserName>
          <UserGender>{gender}</UserGender>
          <UserAddress>{address.slice(0, 2)}</UserAddress>
        </UserInfoBox>
        <UserInfoBox>
          <UserBirth>
            {birthdate.slice(0, 4)}년 {birthdate.slice(4, 6)}월 {birthdate.slice(6, 8)}일
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
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 50px;
  transition: all 0.2s;
  :hover {
    padding: 15px 0;
  }
`;

const UserImg = styled.img`
  width: 300px;
  border: 1px solid gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: none;
`;

const UserInfoBox = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 10px;
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

const UserName = styled(UserInfo)`
  width: 50%;
`;
const UserGender = styled(UserInfo)`
  width: 25%;
`;
const UserAddress = styled(UserInfo)`
  width: 25%;
`;

const UserBirth = styled(UserInfo)`
  width: 300px;
`;

const UserContact = styled(UserInfo)`
  width: 300px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
