import React from 'react';
// import searchData from '../PclDummy/PclDummy';
import styled from '@emotion/styled';
import CampaignCard from '../CampaginCard/CampaignCard';
import { CampaignCardInfo } from '../../types';

interface CampaignCardListProps {
  searchInputText: string;
  campaignCardList: CampaignCardInfo[];
}

function CampaignCardList({ searchInputText, campaignCardList }: CampaignCardListProps) {
  console.log(campaignCardList);

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

{
  /* <CardList>
{productList.map((product) => (
  <ProductItem key={product.id} product={product} />
))}
</CardList> */
}

export default CampaignCardList;

const SearchItems = styled.ul`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// typeof Array -> Object shows up
// Array.isArray(campaignCartdList) ->  true -> then it's real array.
