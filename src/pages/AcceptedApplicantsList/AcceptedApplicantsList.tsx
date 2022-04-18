import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import AcceptedApplicantsCard from './AcceptedApplicantsCard/AcceptedApplicantsCard';

export default function AcceptedApplicantsList() {
  const [acceptedApplicantsCard, setAcceptedApplicantsCard] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const token: any = localStorage.getItem('access_token');
  const BASE_URL = 'http://3.36.173.130:8081/campaigns/accepted-applicants-list';
  const back = () => {
    return navigate(-1);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/${params.campaignId}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAcceptedApplicantsCard(res.applicants);
      });
  }, []);

  return (
    <>
      <Container>
        <Nav>
          <GoBack onClick={back}>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          {acceptedApplicantsCard &&
            acceptedApplicantsCard.map(({ id, thumbnail_url, name, gender, birthdate, contact, address }) => {
              return (
                <AcceptedApplicantsCard
                  key={id}
                  thumbnail_url={thumbnail_url}
                  name={name}
                  gender={gender}
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const Nav = styled.div`
  width: 1500px;
  height: 75px;
  display: flex;
`;

const GoBack = styled.button`
  width: 125px;
  height: 50px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: gray;
    border: 1px solid darkgray;
  }
`;

const ListContainer = styled.div`
  width: 1500px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  border-radius: 10px;
`;
