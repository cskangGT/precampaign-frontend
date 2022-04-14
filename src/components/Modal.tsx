import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import UserCard from './UserCard';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState([]);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.Data);
      });
  });

  return (
    <>
      <ModalOpen onClick={toggleModal}>Open</ModalOpen>
      {modal && (
        <ModalWindow>
          <Overlay onClick={toggleModal}></Overlay>
          <ModalContent>
            <ListContainer>
              <UserInfoBox>
                <UserInfo>
                  <UserNameBox>Name</UserNameBox>
                  <UserName>김준영</UserName>
                  <UserGenderBox>Gender</UserGenderBox>
                  <UserGender>남</UserGender>
                  <UserHeightBox>Height</UserHeightBox>
                  <UserHeight>175</UserHeight>
                  <UserWeightBox>Weight</UserWeightBox>
                  <UserWeight>70</UserWeight>
                  <UserKeywordBox>Keyword</UserKeywordBox>
                  <UserKeyword>스트릿</UserKeyword>
                </UserInfo>
              </UserInfoBox>
              {userData.map(({ thumbnail }) => {
                return <UserCard thumbnail={thumbnail} />;
              })}
            </ListContainer>
            <ModalClose onClick={toggleModal}>Close</ModalClose>
          </ModalContent>
        </ModalWindow>
      )}
    </>
  );
}

const ModalOpen = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
  cursor: pointer;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 9px 12px;
  cursor: pointer;
`;

const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow-y: hidden;
`;

const Overlay = styled(ModalWindow)`
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 75px;
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserBox = styled.div`
  width: 800px;
  height: 50px;
  /* background-color: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 5px;
  margin-left: 20px;
`;

const UserNameBox = styled(UserBox)``;
const UserGenderBox = styled(UserBox)``;
const UserHeightBox = styled(UserBox)``;
const UserWeightBox = styled(UserBox)``;
const UserKeywordBox = styled(UserBox)``;

const User = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  padding-left: 20px;
  align-items: center;
`;

const UserName = styled(User)``;
const UserGender = styled(User)``;
const UserHeight = styled(User)``;
const UserWeight = styled(User)``;
const UserKeyword = styled(User)``;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background: gray;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;
