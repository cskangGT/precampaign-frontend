import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import UserCard from './UserCard';

export default function AcceptedApplicantsList() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const back = () => {
    return navigate('/precampaign-list');
  };

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.Data);
      });
  }, []);

  return (
    <>
      <Container>
        <Nav>
          <GoBack onClick={back}>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          {userData.map(({ name, snsId }) => {
            return <UserCard name={name} snsId={snsId} />;
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
