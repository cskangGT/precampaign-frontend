import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AllAcceptantsCard from './AllAcceptantsCard/AllAcceptantsCard';

export default function List() {
  const navigate = useNavigate();
  const [allAcceptantsCard, setAllAcceptantsCard] = useState([]);
  const token: any = localStorage.getItem('access_token');
  const BASE_URL = 'http://3.36.173.130:8081/applicants';
  const back = () => {
    return navigate('/campaigns');
  };
  useEffect(() => {
    fetch(`${BASE_URL}/all-accepted-applicants-list`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAllAcceptantsCard(res.applicants);
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
            <PlatformTitle>Platforms</PlatformTitle>
            <HeightTitle>Height</HeightTitle>
            <WeightTitle>Weight</WeightTitle>
            <KeywordTitle>Keyword</KeywordTitle>
            <AcceptedCampaignsTitle>Accepted Campaigns</AcceptedCampaignsTitle>
          </TitleBox>
          {allAcceptantsCard.map(
            ({ id, name, thumbnail_url, gender, platforms, accountName, height, weight, keywords, campaigns }) => {
              return (
                <AllAcceptantsCard
                  key={id}
                  name={name}
                  thumbnail={thumbnail_url}
                  gender={gender}
                  platforms={platforms}
                  accountName={accountName}
                  height={height}
                  weight={weight}
                  keywords={keywords}
                  acceptedCampaigns={campaigns}
                />
              );
            },
          )}
        </ListContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const Nav = styled.div`
  width: 1500px;
  height: 100px;
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
    border: 1px solid darkgrey;
  }
`;

const ListContainer = styled.div`
  width: 1500px;
  height: 750px;
  border-radius: 10px;
  border-bottom: 1px solid lightgray;
  overflow: auto;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  border-radius: 10px;
  position: sticky;
  top: 0;
`;

const Title = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid gray;
`;

const ThumbnailTitle = styled(Title)`
  width: 20%;
`;

const NameTitle = styled(Title)`
  width: 10%;
`;

const GenderTitle = styled(Title)`
  width: 6%;
`;

const PlatformTitle = styled(Title)`
  width: 10%;
`;

const HeightTitle = styled(Title)`
  width: 7%;
`;

const WeightTitle = styled(Title)`
  width: 7%;
`;

const KeywordTitle = styled(Title)`
  width: 14%;
`;

const AcceptedCampaignsTitle = styled(Title)`
  width: 26%;
  border-right: none;
`;
