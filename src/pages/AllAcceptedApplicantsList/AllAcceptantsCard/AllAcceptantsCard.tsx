import React from 'react';
import styled from '@emotion/styled';
import { AllAcceptantsProps } from '../../Types/types';

export default function AllAcceptants({
  name,
  thumbnail,
  gender,
  platforms,
  height,
  weight,
  keywords,
  acceptedCampaigns,
}: AllAcceptantsProps) {
  return (
    <>
      <Container>
        <Thumbnail>
          <ThumbnailImg src={thumbnail} />
        </Thumbnail>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <Platform>
          {platforms.map((item: string, index: number) => {
            return <Platforms key={index}>{item}</Platforms>;
          })}
        </Platform>
        <Height>{height}</Height>
        <Weight>{weight}</Weight>
        <Keyword>
          {keywords.map((item: string, index: number) => {
            return <Keywords key={index}>{item}</Keywords>;
          })}
        </Keyword>
        <AcceptedCampaigns>
          {acceptedCampaigns.map((item: string, index: number) => {
            return <Campaign key={index}>{item}</Campaign>;
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
  width: 200px;
  height: 140px;
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
