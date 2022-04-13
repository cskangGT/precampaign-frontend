import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import UserCard from './UserCard';
import UserData from './UserData';

export default function AcceptedApplicantsList() {
  const navigate = useNavigate();

  const back = () => {
    return navigate('/precampaign-list');
  };

  return (
    <>
      <Container>
        <Nav>
          <GoBack onClick={back}>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          {UserData.map((data) => {
            return <UserCard name={data.name} snsId={data.snsId} />;
          })}
        </ListContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const Nav = styled.div`
  width: 1500px;
  height: 100px;
  background-color: yellow;
`;

const GoBack = styled.button`
  width: 125px;
  height: 50px;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ListContainer = styled.div`
  width: 1500px;
  height: 750px;
  border: 1px solid black;
  background-color: green;
  display: flex;
  flex-wrap: wrap;
`;
