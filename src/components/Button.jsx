//Button.jsx
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 4px 8px;
    font-size: 20px;
    border-width: 1px;
    border-radius: 10px;
    border-style: none;
    font-weight: 550;
    cursor: pointer;

    color: #2f2e2e;
    background-color: #edb320;
    &:hover{
        background: #e0c990;
    }
`;

function Button(props){
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}> {title || "button"} </StyledButton>;
}

export default Button;