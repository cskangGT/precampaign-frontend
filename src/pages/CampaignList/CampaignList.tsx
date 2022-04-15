import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core';
import styled from '@emotion/styled';
import { CampaignCardInfo, QueryInfo } from '../types';
import SearchIcon from '@material-ui/icons/Search';
import CampaignCardList from './CampaignCardList/CampaignCardList';

const CampaignList: React.FC = () => {
  const BASE_URL = '172.1.7.241:8081';
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInputText, setSearchInputText] = useState<string>('');
  // Type 추론이 되지만 우선 공부 목적아로 <> 남겨둠
  const [campaignCardList, setCampaignCardList] = useState<CampaignCardInfo[]>([]);
  const [queryData, setQueryData] = useState<QueryInfo>({
    query_for_status: '',
    query_for_sort: '',
  });

  let searchInputHandler = (e: { target: { value: string } }) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInputText(lowerCase);
  };

  // useEffect(() => {
  //   fetch('/data/mockData.json')
  //     .then((res) => res.json())
  //     .then((res) => setCampaignCardList(res.data));
  // }, []);

  useEffect(() => {
    console.log('location.search', location.search);
    console.log(localStorage.getItem('access_token'));
    fetch(`http://${BASE_URL}/campaigns${location.search}`, {
      headers: { authorization: localStorage.getItem('access_token') },
      //TODO: Bloker!!해결할것
    })
      .then((res) => res.json())
      .then((res) => setCampaignCardList(res));
  }, [location.search]);
  // console.log(campaignCardList);
  // setCampaignCardList(res.data);

  const changeSection = (sectionParam: string) => {
    if (sectionParam === '') {
      setQueryData({ ...queryData, query_for_status: '' });
    } else if (sectionParam === 'ongoing') {
      setQueryData({ ...queryData, query_for_status: 'ongoing' });
    } else {
      setQueryData({ ...queryData, query_for_status: 'termination' });
    }
    updateQuery(queryData);
  };

  const updateSort = (e: { target: { value: string } }) => {
    // console.log(e.target.value);
    const newQuery = queryData;
    newQuery.query_for_sort = e.target.value;
    updateQuery(newQuery);
  };

  const updateQuery = (newQuery: QueryInfo) => {
    navigate(`?status=${newQuery.query_for_status}&${newQuery.query_for_sort}`);
  };

  return (
    <>
      <Main>
        <Header>MLB Pre-Campaigns</Header>
        <SearchBar>
          <TextField
            id="outlined-basic"
            onChange={searchInputHandler}
            variant="outlined"
            fullWidth
            label="검색"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchBar>
        <GoToAllAccepted>
          <h4>수락된 신청자 모두 보러가기</h4>
        </GoToAllAccepted>
        <ProgressBox>
          <ShowAll onClick={() => changeSection('')}>전체보기</ShowAll>
          <ShowProgess onClick={() => changeSection('ongoing')}>진행중</ShowProgess>
          <ShowTermination onClick={() => changeSection('termination')}>종료</ShowTermination>
          <SortSelectBox onChange={updateSort}>
            <option value="sort_order=desc&sort_by=createdAt">캠페인 생성순</option>
            <option value="sort_order=desc&sort_by=count">신청자 순</option>
          </SortSelectBox>
        </ProgressBox>
        <CampaignCardList searchInputText={searchInputText} campaignCardList={campaignCardList} />
      </Main>
    </>
  );
};

export default CampaignList;

//////////////////////////////
////////////////////////////
const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  margin: 10px;
  font-size: 40px;
  color: rgb(1, 1, 59);
`;

const SearchBar = styled.div`
  width: 40%;
`;

const GoToAllAccepted = styled.button`
  display: flex;
  position: absolute;
  top: 70px;
  right: 50px;
  width: 180px;
  height: 50px;
  margin: 0;
  padding-left: 12px;
  background-color: pink;
  box-sizing: border-box;
  cursor: pointer;
`;
////////////

////////////////////////////////

const ProgressBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1300px;
  margin: 0 auto;
`;

const ShowAll = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: 1px soild black;
  border-radius: 50%;
  list-style: none;
  cursor: pointer;
`;

const ShowProgess = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: 2px soild black;
  border-radius: 50%;
  list-style: none;
  cursor: pointer;
`;

const ShowTermination = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: 1px soild black;
  border-radius: 50%;
  list-style: none;
  cursor: pointer;
`;

const SortSelectBox = styled.select`
  width: 130px;
  height: 40px;
  margin-left: 100px;
  padding: 0 10px;
  border-color: #d9dbe1;
  background: 0 0;
  font-size: 14px;
`;

///////////////
