import React from 'react';
import styled from '@emotion/styled';

interface User {
  name: string;
  thumbnail: string;
  gender: string;
  accountName: string;
  height: number;
  weight: number;
  keyword: string;
  campaignName: string;
}

export default function UserList({
  name,
  thumbnail,
  gender,
  accountName,
  height,
  weight,
  keyword,
  campaignName,
}: User) {
  return (
    <>
      <Container>
        <Thumbnail>
          <ThumbnailImg src={thumbnail} />
        </Thumbnail>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <AccountName>{accountName}</AccountName>
        <Height>{height}</Height>
        <Weight>{weight}</Weight>
        <Keyword>{keyword}</Keyword>
        <CampaignName>{campaignName}</CampaignName>
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
  width: 5%;
`;
const AccountName = styled(UserCard)`
  width: 15%;
`;
const Height = styled(UserCard)`
  width: 5%;
`;
const Weight = styled(UserCard)`
  width: 5%;
`;
const Keyword = styled(UserCard)`
  width: 15%;
`;
const CampaignName = styled(UserCard)`
  width: 25%;
  border-right: none;
`;
