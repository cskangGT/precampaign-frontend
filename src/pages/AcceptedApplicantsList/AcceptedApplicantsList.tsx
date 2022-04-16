import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import UserCard from './UserCard';

export default function AcceptedApplicantsList() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const token: any = localStorage.getItem('token');

  const back = () => {
    return navigate('/campaign-list');
  };

  useEffect(() => {
    fetch('http://172.1.4.173:8080/applicants', {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
        console.log(res);
      });
  }, []);

  // login -> token -> accedss_token -> localStorage.getItem
  // Authorization: localStorage.getItem(access_token) -> app
  return (
    <>
      <Container>
        <Nav>
          <GoBack onClick={back}>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          {userData &&
            userData.map(({ thumbnail_url, name, birthdate, contact, address }) => {
              return (
                <UserCard
                  thumbnail_url={thumbnail_url}
                  name={name}
                  birthdate={birthdate}
                  contact={contact}
                  address={address}
                />
              );
            })}
        </ListContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
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
  height: 75px;
  background-color: yellow;
  display: flex;
  align-items: center;
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
  overflow: auto;
`;
