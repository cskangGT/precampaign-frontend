import React from 'react';
import styled from '@emotion/styled';
import UserList from './UserList';
import UserData from './UserData';

export default function List() {
  return (
    <>
      <Container>
        <Nav>
          <GoBack>뒤로 가기</GoBack>
        </Nav>
        <ListContainer>
          <TitleBox>
            <ThumbnailTitle>Thumbnail</ThumbnailTitle>
            <NameTitle>Name</NameTitle>
            <GenderTitle>Gender</GenderTitle>
            <AccountNameTitle>Account Name</AccountNameTitle>
            <HeightTitle>Height</HeightTitle>
            <WeightTitle>Weight</WeightTitle>
            <KeywordTitle>Keyword</KeywordTitle>
            <CampaignNameTitle>Campaign Name</CampaignNameTitle>
          </TitleBox>
          {UserData.map((data) => {
            return (
              <UserList
                name={data.name}
                gender={data.gender}
                accountName={data.accountName}
                height={data.height}
                weight={data.weight}
                keyword={data.keyword}
                campaignName={data.campaignName}
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

const AccountNameTitle = styled(Title)`
  width: 15%;
`;

const HeightTitle = styled(Title)`
  width: 5%;
`;

const WeightTitle = styled(Title)`
  width: 5%;
`;

const KeywordTitle = styled(Title)`
  width: 15%;
`;

const CampaignNameTitle = styled(Title)`
  width: 25%;
`;
