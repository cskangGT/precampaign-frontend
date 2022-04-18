import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ApplicantPics from '../RateModal/ApplicantPics/ApplicantPics';
import StarRating from '../RateModal/StarRating/StarRating';
import {
  backgroundRateState,
  campaignStatusState,
  creativityRateState,
  trendRateState,
} from '../../Recoil/Atoms/atomCampaign';
import { ApplicantProps } from '../../Types/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { applicantInfoState } from '../../Recoil/Atoms/atomCampaign';

export default function ApplicantCard({
  id,
  name,
  gender,
  height,
  weight,
  thumbnail,
  platform,
  accountName,
  keywords,
  rate,
  campaignApplicantId,
  campaignParam,
  BASE_URL,
  setAvgRate,
}: ApplicantProps) {
  const [modal, setModal] = useState(false);
  const [applicantData, setApplicantData] = useState([]);
  const token: string | null = localStorage.getItem('access_token');
  const rateKind: string[] = ['background', 'trend', 'creativity'];
  const backgroundRate = useRecoilValue(backgroundRateState);
  const trendRate = useRecoilValue(trendRateState);
  const creativityRate = useRecoilValue(creativityRateState);

  const requestHeaders: HeadersInit = new Headers();
  if (token === null) {
    console.log('token is null');
  } else {
    requestHeaders.set('Authorization', token);
  }
  const toggleModal = () => {
    setModal(!modal);
    fetch(`${BASE_URL}/applicant-images/${campaignParam}?applicant-id=${id}`, {
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        setApplicantData(res.image);
      });
  };

  const sendRate = () => {
    setModal(!modal);
    console.log(campaignApplicantId);
    fetch('http://3.36.173.130:8081/applicants/rate', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        campaign_applicant_id: campaignApplicantId,
        background_rate: backgroundRate,
        trend_rate: trendRate,
        creativity_rate: creativityRate,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rateAvg);
        setAvgRate(res.rateAvg);
      });
  };

  return (
    <>
      <Container>
        <Thumbnail>
          <img src={thumbnail} width="140px" />
        </Thumbnail>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <Platform>{platform}</Platform>
        <AccountName>{accountName}</AccountName>
        <Height>{height}</Height>
        <Weight>{weight}</Weight>
        <Keyword>
          {keywords.map((item: string, index: number) => {
            return <Keywords key={index}>{item}</Keywords>;
          })}
        </Keyword>
        <Rate>{rate.rate_avg}</Rate>
        <RateModal>
          <ModalOpen onClick={toggleModal}>사진확인</ModalOpen>
          {modal && (
            <ModalWindow>
              <Overlay onClick={toggleModal}></Overlay>
              <ModalContent>
                <ListContainer>
                  <UserInfoBox>
                    <UserInfo>
                      <UserNameBox>Name</UserNameBox>
                      <UserName>{name}</UserName>
                      <UserGenderBox>Gender</UserGenderBox>
                      <UserGender>{gender}</UserGender>
                      <UserHeightBox>Height</UserHeightBox>
                      <UserHeight>{height}</UserHeight>
                      <UserWeightBox>Weight</UserWeightBox>
                      <UserWeight>{weight}</UserWeight>
                      <UserKeywordBox>Keyword</UserKeywordBox>
                      <UserKeyword>
                        {keywords.map((item: string, index: number) => {
                          return <Keywords key={index}>{item}</Keywords>;
                        })}
                      </UserKeyword>
                    </UserInfo>
                  </UserInfoBox>
                  {applicantData.map((image: string, index: number) => {
                    return <ApplicantPics thumbnail={image} key={index} />;
                  })}
                </ListContainer>
                <EvaluationStandard>
                  <BackgroundBox>
                    <Background>연출</Background>
                    <StarRate>
                      <StarRating rateKind={rateKind[0]} />
                    </StarRate>
                  </BackgroundBox>
                  <TrendBox>
                    <Trend>트렌드</Trend>
                    <StarRate>
                      <StarRating rateKind={rateKind[1]} />
                    </StarRate>
                  </TrendBox>
                  <CreativeBox>
                    <Creative>창의성</Creative>
                    <StarRate>
                      <StarRating rateKind={rateKind[2]} />
                    </StarRate>
                  </CreativeBox>
                </EvaluationStandard>
                <EvaluationBtn onClick={sendRate}>평가 완료</EvaluationBtn>
              </ModalContent>
            </ModalWindow>
          )}
        </RateModal>
      </Container>
    </>
  );
}
//TODO: 두가지 로직 필요 평가 완료버튼으로 post 하는거, each StarRating 에서 저장 리코일로 받아서 쓰는거

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

const Keywords = styled.div``;

const Thumbnail = styled(UserCard)`
  width: 18%;
`;
const Name = styled(UserCard)`
  width: 10%;
`;
const Gender = styled(UserCard)`
  width: 8%;
`;
const AccountName = styled(UserCard)`
  width: 12%;
`;
const Platform = styled(UserCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 8%;
`;
const Height = styled(UserCard)`
  width: 6%;
`;
const Weight = styled(UserCard)`
  width: 6%;
`;
const Keyword = styled(UserCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 12%;
`;
const Rate = styled(UserCard)`
  width: 8%;
`;
const RateModal = styled(UserCard)`
  width: 12%;
  border-right: none;
`;

///////////////

const ModalOpen = styled.button`
  padding: 10px 20px;
  display: block;
  background-color: lightgray;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: gray;
    border: 1px solid darkgray;
  }
`;

const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow-y: hidden;
`;

const Overlay = styled(ModalWindow)`
  background: rgba(49, 49, 49, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 10px;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserBox = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 20px;
`;

const UserNameBox = styled(UserBox)``;
const UserGenderBox = styled(UserBox)``;
const UserHeightBox = styled(UserBox)``;
const UserWeightBox = styled(UserBox)``;
const UserKeywordBox = styled(UserBox)``;

const User = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  padding-left: 20px;
  align-items: center;
`;

const UserName = styled(User)``;
const UserGender = styled(User)``;
const UserHeight = styled(User)``;
const UserWeight = styled(User)``;
const UserKeyword = styled(User)`
  padding-left: 10px;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

const EvaluationStandard = styled.div`
  background-color: white;
  position: absolute;
  bottom: 100px;
  right: 75px;
  width: 300px;
  height: 150px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Evaluation = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Background = styled(Evaluation)``;
const Trend = styled(Evaluation)``;
const Creative = styled(Evaluation)``;

const EvaluationBox = styled.div`
  width: 275px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-left: 25px;
`;

const BackgroundBox = styled(EvaluationBox)``;
const TrendBox = styled(EvaluationBox)``;
const CreativeBox = styled(EvaluationBox)`
  border-bottom: none;
`;

const EvaluationBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 75px;
  width: 150px;
  height: 50px;
  background-color: lightgray;
  font-size: 18px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: gray;
    border: 1px solid darkgray;
  }
`;

const StarRate = styled.div`
  width: 210px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function then(arg0: (res: { rate_avg: number }) => void) {
  throw new Error('Function not implemented.');
}

//TODO: campaignApplicantId 보내주기
