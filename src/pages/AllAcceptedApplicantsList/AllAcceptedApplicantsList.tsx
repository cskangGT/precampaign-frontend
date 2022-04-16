import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import UserList from './UserList';

export default function List() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const token: any = localStorage.getItem('token');

  const back = () => {
    return navigate('/campaigns');
  };

  useEffect(() => {
    fetch('/data/userData.json', {
      headers: {
        Authoriization: token,
      },
    });
    fetch('/data/userData.json')
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.applicants);
      });
  }, []);

  return (
    <>
      <Container>
        <Nav>
          <GoBack onClick={back}>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          <TitleBox>
            <ThumbnailTitle>Thumbnail</ThumbnailTitle>
            <NameTitle>Name</NameTitle>
            <GenderTitle>Gender</GenderTitle>
            <PlatformTitle>Platform</PlatformTitle>
            <AccountNameTitle>Account Name</AccountNameTitle>
            <HeightTitle>Height</HeightTitle>
            <WeightTitle>Weight</WeightTitle>
            <KeywordTitle>Keyword</KeywordTitle>
            <CampaignNameTitle>Campaign Name</CampaignNameTitle>
          </TitleBox>
          {userData.map(({ name, gender, platform, accountName, height, weight, keyword, campaignName }) => {
            return (
              <UserList
                name={name}
                gender={gender}
                platform={platform}
                accountName={accountName}
                height={height}
                weight={weight}
                keyword={keyword}
                campaignName={campaignName}
              />
            );
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
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: skyblue;
`;

const Title = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ThumbnailTitle = styled(Title)`
  width: 20%;
`;

const NameTitle = styled(Title)`
  width: 10%;
`;

const GenderTitle = styled(Title)`
  width: 5%;
`;

const PlatformTitle = styled(Title)`
  width: 10%;
`;

const AccountNameTitle = styled(Title)`
  width: 10%;
`;

const HeightTitle = styled(Title)`
  width: 5%;
`;

const WeightTitle = styled(Title)`
  width: 5%;
`;

const KeywordTitle = styled(Title)`
  width: 10%;
`;

const CampaignNameTitle = styled(Title)`
  width: 25%;
`;
