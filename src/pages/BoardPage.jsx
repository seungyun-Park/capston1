import React from 'react';
import styled from 'styled-components';
import PostTable from '../components/PostTable';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"

const Container = styled.div`
  background-color: #494949;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  padding: 20px;
  margin-top: 50px;
  color: white;
  font-weight: 550;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  width: 80%; 
  margin: auto;
  justify-content: flex-end;
`;

function BoardPage(){
  const navigate = useNavigate();

  
  return (
    <Container>
      <Header/>
        <Title>Bench.com 커뮤니티</Title>
        <Wrapper>
          <Button 
            title="글 작성하기" 
            onClick={() => {
              navigate("/post-write");
            }}
          />
        </Wrapper>

        <PostTable/>
    </Container>
  );
};

export default BoardPage;