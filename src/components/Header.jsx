import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Button = styled.button`
    padding: 4px 8px;
    font-size: 20px;
    border-width: 1px;
    border-radius: 20px;
    border-style: none;
    font-weight: 550;
    cursor: pointer;

    color: #2f2e2e;
    background-color: #edb320;
    &:hover{
        background: #e0c990;
    }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: #363636;
`;

const Logo = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #edb320;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: 50px;
`;

const Linkto = styled(NavLink)`
  margin-right: 50px;
  margin-left: 50px;
  text-decoration: none;
  padding-top: 5px;
  font-size: 35px;
  color: #ffffff;

  
  &:hover {
    color: #edb320;
  }

  &.active {
    color: #edb320;
  }
`;

const UserInfo = styled.div`
  padding-top: 2px;
  margin-left: auto;
`;

function Header(){
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo>Bench.com</Logo>
      <Navigation>
        <Linkto to="/home">Home</Linkto>
        <Linkto to="/board">커뮤니티</Linkto>
      </Navigation>
      <UserInfo>
        <Button onClick={()=>{navigate(`/login`)}}>로그아웃</Button>
      </UserInfo>
    </HeaderWrapper>
  );
}

export default Header;