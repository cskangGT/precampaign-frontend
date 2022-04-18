import React from 'react';
import styled from '@emotion/styled';

interface User {
  name: string;
  thumbnail: string;
  gender: string;
  platform: string[];
  accountName: string;
  height: number;
  weight: number;
  keyword: string[];
  acceptedCampaigns: string[];
}

export default function UserList({
  name,
  thumbnail,
  gender,
  platform,
  height,
  weight,
  keyword,
  acceptedCampaigns,
}: User) {
  return (
    <>
      <Container>
        <Thumbnail>
          <ThumbnailImg src={thumbnail} />
        </Thumbnail>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <Platform>
          {platform.map((item) => {
            return <Platforms>{item}</Platforms>;
          })}
        </Platform>
        <Height>{height}</Height>
        <Weight>{weight}</Weight>
        <Keyword>
          {keyword.map((item) => {
            return <Keywords>{item}</Keywords>;
          })}
        </Keyword>
        <AcceptedCampaigns>
          {acceptedCampaigns.map((item) => {
            return <Campaign>{item}</Campaign>;
          })}
        </AcceptedCampaigns>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-around;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 5px 0;
`;

const Campaign = styled.div``;
const Platforms = styled.div``;
const Keywords = styled.div``;

const UserCard = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  border-right: 1px solid lightgray;
`;

const Thumbnail = styled(UserCard)`
  width: 20%;
`;

const ThumbnailImg = styled.img`
  width: 120px;
  border-radius: 5px;
`;
const Name = styled(UserCard)`
  width: 10%;
`;
const Gender = styled(UserCard)`
  width: 6%;
`;
const Platform = styled(UserCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 10%;
`;

const Height = styled(UserCard)`
  width: 7%;
`;
const Weight = styled(UserCard)`
  width: 7%;
`;
const Keyword = styled(UserCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 14%;
`;
const AcceptedCampaigns = styled(UserCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 26%;
  border-right: none;
`;
