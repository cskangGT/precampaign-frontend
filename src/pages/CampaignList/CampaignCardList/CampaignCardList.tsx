import React from 'react';
import styled from '@emotion/styled';
import CampaignCard from '../CampaginCard/CampaignCard';
import { CampaignCardInfo } from '../../Types/types';

interface CampaignCardListProps {
  searchInputText: string;
  campaignCardList: CampaignCardInfo[];
}

function CampaignCardList({ searchInputText, campaignCardList }: CampaignCardListProps) {
  const filterData = campaignCardList.filter((el) => {
    if (searchInputText === '') {
      return el;
    } else {
      return el.title.toLowerCase().includes(searchInputText);
    }
  });

  return (
    <SearchItems>
      {filterData.map((campaignCard, i: number) => (
        <CampaignCard key={i} campaignCard={campaignCard} />
      ))}
    </SearchItems>
  );
}

export default CampaignCardList;

const SearchItems = styled.ul`
  font-size: 20px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`;

// typeof Array -> Object shows up
// Array.isArray(campaignCartdList) ->  true -> then it's real array.
