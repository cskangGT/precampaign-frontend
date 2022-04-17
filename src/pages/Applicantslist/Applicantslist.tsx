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
  const BASE_URL = 'http://172.1.7.241:8081/campaigns';
  // const BASE_URL = 'data/userData.json';
  const [applicantData, setApplicantData] = useState([]);
  const [rateValue, setRateValue] = useState(0);
  const campaign_param = params.campaignId;
  // 어차피 state 값 변하면 reloading 됨.
  const goToBack = () => {
    return navigate(-1);
  };

  const goToAcceptedPplList = () => {
    return navigate(`/campaigns/accepted-applicants-list/${params.campaignId}`);
  };

  // useEffect(() => {
  //   if (accessToken) {
  //     fetch(`${BASE_URL}/${params.campaignId}`, {
  //       headers: { authorization: accessToken },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         // console.log(campaign_param);
  //         setApplicantData(data);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    fetch('/data/userData.json')
      .then((res) => res.json())
      .then((res) => {
        setApplicantData(res.applicants);
      });
  }, []);

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
              platform_account,
              platform,
              keyword,
              campaign_applicant_id,
              rate,
            }) => {
              return (
                <ApplicantCard
                  key={id}
                  id={id}
                  name={name}
                  gender={gender}
                  height={height}
                  weight={weight}
                  platform={platform}
                  thumbnail={thumbnail}
                  accountName={platform_account}
                  keyword={keyword}
                  rate={rate}
                  campaignApplicantId={campaign_applicant_id}
                  campaignParam={campaign_param}
                  BASE_URL={BASE_URL}
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
  display: flex;
  width: 1500px;
  height: 100px;
`;

const GogoToBack = styled.button`
  width: 125px;
  height: 50px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 16px;
  margin-right: 375px;
  :hover {
    background-color: gray;
    border: 1px solid darkgray;
  }
`;

const CampaignTitle = styled.div`
  width: 500px;
  height: 50px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 20px;
  margin-right: 375px;
`;

const GoToResult = styled.div`
  width: 125px;
  height: 50px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: gray;
    border: 1px solid darkgray;
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
  width: 18%;
`;

const NameTitle = styled(Title)`
  width: 10%;
`;

const GenderTitle = styled(Title)`
  width: 8%;
`;
const PlatformTitle = styled(Title)`
  width: 8%;
`;
const AccountNameTitle = styled(Title)`
  width: 12%;
`;

const HeightTitle = styled(Title)`
  width: 6%;
`;

const WeightTitle = styled(Title)`
  width: 6%;
`;

const KeywordTitle = styled(Title)`
  width: 12%;
`;
const RateTitle = styled(Title)`
  width: 8%;
`;
const EvaluationTitle = styled(Title)`
  width: 12%;
  border-right: none;
`;
