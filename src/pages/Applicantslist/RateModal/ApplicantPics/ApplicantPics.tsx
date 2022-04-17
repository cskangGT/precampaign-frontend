import React from 'react';
import styled from '@emotion/styled';
import { ApplicantPicsProps } from '../../../types';

export default function ApplicantPics({ thumbnail }: ApplicantPicsProps) {
  return (
    <>
      <Container>
        <UserImg src={thumbnail}></UserImg>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 400px;
  height: 450px;
  background-color: #286883;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 50px;
`;

const UserImg = styled.img`
  width: 400px;
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
