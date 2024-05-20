import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 315px;
  height: 40px;
  border: none;
  border-radius: 5px; 
  background-color: #edb320;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

function LoginButton(props){
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}> {title || "button"} </StyledButton>;
}

export default LoginButton;