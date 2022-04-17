import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ApplicantCard from './ApplicantCard/ApplicantCard';
import { campaginNameState, campaignStatusState } from '../Recoil/Atoms/atomCampaign';

export default function List() {
  const navigate = useNavigate();
  const params = useParams();
  const campaignStatus = useRecoilValue(campaignStatusState);
  const campaignName = useRecoilValue(campaginNameState);
  const accessToken = localStorage.getItem('access_token');
  const BASE_URL = 'http://172.1.4.173:8000/campaigns';
  const [applicantData, setApplicantData] = useState([]);
  const [rateValue, setRateValue] = useState(0);

  const goToBack = () => {
    return navigate('/campaigns');
  };

  const goToAcceptedPplList = () => {
    return navigate('/accepted-applicants-list');
  };

  useEffect(() => {
    if (accessToken) {
      console.log('params', params);
      fetch(`${BASE_URL}/` + params, {
        headers: { authorization: accessToken },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApplicantData(data);
        });
    }
  }, []);

  // useEffect(() => {
  //   fetch('/data/userData.json')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setApplicantData(res.applicants);
  //     });
  // }, [rateValue]);

  return (
    <>
      <Container>
        <Nav>
          <GogoToBack onClick={goToBack}>뒤로 가기</GogoToBack>
          <CampaignTitle>{campaignName}</CampaignTitle>
          {/* <GoToResult>결과 확인</GoToResult> */}
          {campaignStatus === 'Termination' && <GoToResult onClick={goToAcceptedPplList}>결과 확인</GoToResult>}
        </Nav>
        <ListContainer>
          <TitleBox>
            <ThumbnailTitle>Picture</ThumbnailTitle>
            <NameTitle>Name</NameTitle>
            <GenderTitle>Gender</GenderTitle>
            <PlatformTitle>Platform</PlatformTitle>
            <AccountNameTitle>Account Name</AccountNameTitle>
            <HeightTitle>Height</HeightTitle>
            <WeightTitle>Weight</WeightTitle>
            <KeywordTitle>Keyword</KeywordTitle>
            <RateTitle>Rate</RateTitle>
            <EvaluationTitle>Check</EvaluationTitle>
          </TitleBox>
          {applicantData.map(
            ({
              id,
              name,
              gender,
              height,
              weight,
              thumbnail,
              contact,
              address,
              platform_account,
              platform,
              keyword,
              rate,
            }) => {
              return (
                <ApplicantCard
                  key={id}
                  name={name}
                  gender={gender}
                  height={height}
                  weight={weight}
                  platform={platform}
                  thumbnail={thumbnail}
                  accountName={platform_account}
                  keyword={keyword}
                  rate={rate}
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
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1500px;
  height: 100px;
  background-color: yellow;
`;

const GogoToBack = styled.button`
  width: 125px;
  height: 50px;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CampaignTitle = styled.div`
  width: 500px;
  height: 50px;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoToResult = styled.div`
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
  width: 15%;
`;

const HeightTitle = styled(Title)`
  width: 5%;
`;

const WeightTitle = styled(Title)`
  width: 5%;
`;

const KeywordTitle = styled(Title)`
  width: 5%;
`;
const RateTitle = styled(Title)`
  width: 10%;
`;
const EvaluationTitle = styled(Title)`
  width: 15%;
`;
