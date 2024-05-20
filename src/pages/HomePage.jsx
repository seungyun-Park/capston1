import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header"

const Wrapper = styled.div`
  background-color: #494949;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
    margin-top: 50px;
    padding: 10px 10px;
    font-size: 30px;
    border-width: 1px;
    border-radius: 10px;
    border-style: none;
    font-weight: 400;
    cursor: pointer;

    color: #3c3939;
    background-color: #edb320;
    &:hover{
        background: #e0c990;
    }
`;

const ButtonContainer = styled.div`
  width: 78%;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  color: #bababa;
`;

const What = styled.h1`
  color: #bababa;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Input = styled.input`
  margin-top: 10px;
  width: calc(50%);
  height: 30px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

function HomePage() {
  return (
    <Wrapper>
      <Header/>
        <Title>당신의 컴퓨터 스펙은 ?</Title>
        
        <Container>
          <What>CPU: </What>
        <Input placeholder='cpu를 입력해보세요 !'/>
        </Container>

        <Container>
          <What>GPU: </What>
        <Input placeholder='gpu를 입력해보세요 !'/>
        </Container>

        <ButtonContainer>
          <Button>내 컴퓨터 가성비 수치 확인하기 {">>"}</Button>
        </ButtonContainer>

    </Wrapper>
  );
};

export default HomePage;