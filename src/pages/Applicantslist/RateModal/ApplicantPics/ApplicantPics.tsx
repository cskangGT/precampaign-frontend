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
  width: 400px;
  height: 450p dx;
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
