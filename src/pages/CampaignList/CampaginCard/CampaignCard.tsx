import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { CampaignCardInfo } from '../../types';
import { campaginNameState, campaignStatusState } from '../../Recoil/Atoms/atomCampaign';

interface CampaignCardProps {
  campaignCard: CampaignCardInfo;
}

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
        <Card>{evaluation_start_date}</Card>
        <Card>
          <GoToApplicants
            onClick={() => {
              goToApplicantList(id, title, status);
            }}
          >
            신청자 보러 가기
          </GoToApplicants>
        </Card>
      </CampaignInfo>
    </CampaignItem>
  );
}

export default CampaignCard;

const CampaignItem = styled.article`
  margin-bottom: 60px;
  &:not(:nth-child(4n)) {
    margin-right: 33px;
  }
`;

const CampaignImg = styled.img`
  width: 275px;
  height: 290px;
`;

const CampaignInfo = styled.ul`
  text-decoration: none;
  /* list-style: ; */
`;

const Card = styled.li`
  margin: 16px 0;
  list-style: none;
`;

// const DetailLink = styled.link`
//   text-decoration: none;
//   color: black;
// `;

const GoToApplicants = styled.div`
  margin: 0;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
`;
