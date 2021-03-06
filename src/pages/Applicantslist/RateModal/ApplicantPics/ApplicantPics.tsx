import React from 'react';
import styled from '@emotion/styled';
import { ApplicantPicsProps } from '../../../Types/types';

export default function ApplicantPics({ thumbnail }: ApplicantPicsProps) {
  return (
    <>
      <Container>
        <UserImg src={thumbnail} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

const UserImg = styled.img`
  width: 100%;
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
