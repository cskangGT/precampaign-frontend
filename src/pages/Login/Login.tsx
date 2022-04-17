import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdInput = (e: { target: { value: string } }) => {
    setIdValue(e.target.value);
  };

  const handlePwInput = (e: { target: { value: string } }) => {
    setPwValue(e.target.value);
  };

  const navigate = useNavigate();
  // http://3.36.173.130:8000/users/signin

  const handleLogin = () => {
    fetch('http://172.1.4.173:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.accessToken) {
          localStorage.setItem('access_token', result.accessToken);
          navigate('/campaigns');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <CompanyName>M L B</CompanyName>
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
          <LoginBtn type="submit" onClick={handleLogin}>
            로그인
          </LoginBtn>
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

const LoginBox = styled.form`
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
  height: 47px;
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
  height: 47px;
  outline: none;
  padding-left: 13px;
  border-radius: 5px;
  border: 1px solid gray;
  :hover {
    border: 2px solid #364f8c;
  }
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
  height: 47px;
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
  height: 47px;
  outline: none;
  padding-left: 13px;
  border-radius: 5px;
  border: 1px solid gray;
  :hover {
    border: 2px solid #364f8c;
  }
`;

const LoginBtn = styled.button`
  width: 140px;
  height: 50px;
  background-color: gray;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  color: white;
  border: 1px solid darkgray;
  :hover {
    background-color: #364f8c;
  }
`;
