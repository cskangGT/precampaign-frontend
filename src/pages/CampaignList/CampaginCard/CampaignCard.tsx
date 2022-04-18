import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { CampaignCardProps } from '../../Types/types';
import { campaginNameState, campaignStatusState } from '../../Recoil/Atoms/atomCampaign';

function CampaignCard({ campaignCard }: CampaignCardProps) {
  const { id, thumbnail_url, title, status, evaluation_start_date } = campaignCard;
  const navigate = useNavigate();
  const setCampainName = useSetRecoilState(campaginNameState);
  const setCampaignStatus = useSetRecoilState(campaignStatusState);

  const goToApplicantList = (promId: number, campTitle: string, campStatus: string) => {
    navigate(`/campaigns/${promId}`);
    setCampainName(campTitle);
    setCampaignStatus(campStatus);
  };

  return (
    <CampaignItem>
      {/* <DetailLink to={`/products/${campagin_id}`}> */}
      <CampaignImg alt="img" src={thumbnail_url} />
      {/* </DetailLink> */}
      <CampaignInfo>
        <Card>
          {/* <Link to={`/products/${campagin_id}`} className="link"> */}
          {title}
          {/* </Link> */}
        </Card>
        <Card>
          {evaluation_start_date.slice(0, 4)}년 {evaluation_start_date.slice(5, 7)}월{' '}
          {evaluation_start_date.slice(8, 10)}일
        </Card>
      </CampaignInfo>

      <GoToApplicants
        onClick={() => {
          goToApplicantList(id, title, status);
        }}
      >
        신청자 보러 가기
      </GoToApplicants>
    </CampaignItem>
  );
}

export default CampaignCard;

const CampaignItem = styled.article`
  margin: 30px 30px 30px;
  width: 21%;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edecec;
  border-radius: 10px;
  transition: all 0.2s;
  :hover {
    background-color: lightgray;
  }
`;

const CampaignImg = styled.img`
  width: 95%;
  height: 290px;
  border-radius: 5px;
`;

const CampaignInfo = styled.ul`
  text-decoration: none;
  width: 275px;
  height: 100px;
`;

const Card = styled.li`
  list-style: none;
  height: 50%;
  border: 1px solid darkgray;
  border-top: none;
  border-left: none;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :first-child {
    margin-top: 5px;
  }
`;

// const DetailLink = styled.link`
//   text-decoration: none;
//   color: black;
// `;

const GoToApplicants = styled.div`
  margin: 16px 0;
  list-style: none;
  width: 150px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(1, 1, 59);
  color: rgb(1, 1, 59);
  border-radius: 10px;
  margin-top: 25px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s;
  :hover {
    background-color: rgb(1, 1, 59);
    color: white;
  }
`;
