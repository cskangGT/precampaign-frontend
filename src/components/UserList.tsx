import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: gray;
  height: 150px;
  display: flex;
  justify-content: space-around;
`;

const UserCard = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Thumbnail = styled(UserCard)`
  width: 20%;
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
`;

export default function UserList() {
  return (
    <>
      <Container>
        <Thumbnail>
          <img src="https://cdn.pixabay.com/photo/2022/04/03/13/54/woman-7109043_1280.jpg" width="140px" />
        </Thumbnail>
        <Name>김준영</Name>
        <Gender>남</Gender>
        <AccountName>junzerokim</AccountName>
        <Height>175</Height>
        <Weight>70</Weight>
        <Keyword>스트릿</Keyword>
        <CampaignName>봄 모자 캠페인</CampaignName>
      </Container>
    </>
  );
}
