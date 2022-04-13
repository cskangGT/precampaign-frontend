import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdInput = (event: any) => {
    setIdValue(event.target.value);
  };

  const handlePwInput = (event: any) => {
    setPwValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleFetch = () => {
    fetch('http://172.1.7.241:8081/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          navigate('/');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <CompanyName>F & F</CompanyName>
          <LoginBox>
            <IdBox>
              <Id>ID</Id>
              <IdInput placeholder="아이디를 입력해주세요." onChange={handleIdInput}></IdInput>
            </IdBox>
            <PwBox>
              <Pw>PW</Pw>
              <PwInput placeholder="비밀번호를 입력해주세요" onChange={handlePwInput} type="password"></PwInput>
            </PwBox>
          </LoginBox>
          <LoginBtn onClick={handleFetch}>로그인</LoginBtn>
        </LoginContainer>
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
  box-sizing: border-box;
`;

const LoginContainer = styled.div`
  width: 600px;
  height: 700px;
  /* background-color: lightgray; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  border: 1px solid gray;
`;

const CompanyName = styled.div`
  font-size: 60px;
`;

const LoginBox = styled.div`
  width: 600px;
  height: 200px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const IdBox = styled.div`
  width: 500px;
  height: 75px;
  /* background-color: gray; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Id = styled.div`
  width: 120px;
  height: 40px;
  /* background-color: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const IdInput = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  padding-left: 10px;
`;

const PwBox = styled.div`
  width: 500px;
  height: 75px;
  /* background-color: gray; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Pw = styled.div`
  width: 120px;
  height: 40px;
  /* background-color: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const PwInput = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  padding-left: 10px;
`;

const LoginBtn = styled.button`
  width: 140px;
  height: 50px;
  /* background-color: pink; */
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  border: 1px solid gray;
`;
